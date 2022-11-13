import React, { useCallback, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Input, Label, Row, Table, FormGroup } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

//Import Image
import logo from "../../../assets/images/logo-dark.png";
import { request } from "../../../services/utilities";
import { useEffect } from "react";
import toastr from "toastr"
import "toastr/build/toastr.min.css"

const ViewPost = props => {
  const { match: params } = props
  const [incident, setIncident] = useState(null);
  const [comment, setComment] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [openorclose, setOpenorclose] = useState(null);
  const [canComment, setCanComment] = useState(false);
  const [isApprove, setIsApprove] = useState(false);

  const [evidence, setEvidence] = useState('');
  const [status, setStatus] = useState([]);


  const showToast = (error, message) => {
    let positionClass = "toast-top-right"
    let toastType
    let showMethod = 'fadeIn'

    toastr.options = {
      positionClass: positionClass,
      timeOut: 5000,
      extendedTimeOut: 1000,
      closeButton: false,
      debug: false,
      progressBar: false,
      preventDuplicates: true,
      newestOnTop: true,
      showEasing: 'swing',
      hideEasing: 'linear',
      showMethod: showMethod,
      hideMethod: 'fadeOut',
      showDuration: 300,
      hideDuration: 1000
    }

    // setTimeout(() => toastr.success(`Settings updated `), 300)
    //Toaster Types
    // if (toastType === "info") toastr.info(message, title)
    // else if (toastType === "warning") toastr.warning(message, title)
    if (error === "error") toastr.error(message)
    else toastr.success(message)
  }
  const onSave = async () => {
    const data_c = { comment, sectionId: params.params?.id };

    let url_addc = `sections/comment`;
    let url_ap = `sections/approve?sectionId=${params.params?.id}`;
    let url_can = `sections/comment/status?sectionId=${params.params?.id}&canComment=${canComment === true ? 1 : 0}`;
    console.log(canComment)

    try {
      if (comment !== null && comment !== '') {
        const rs = await request(url_addc, 'POST', false, data_c);
        setComment('');
        console.log(rs, 'add comment')

      }
      if (isApprove === true) {
        const rs = await request(url_ap, 'GET', false);
        console.log(rs, 'approve')

      }
      if (canComment === true) {
        const rs = await request(url_can, 'GET', false);
        console.log(rs, 'cmment')

      }

      showToast('success', 'Successfully Saved');
    } catch (err) {
      if (err.message === 'comment blocked by admin') {
        showToast('error', err.message);

      } else {
        showToast('error', 'Failed to fetch, kindly try again later');

      }
      console.log(err);
    }
  }

  const fetchIncident = useCallback(async () => {
    let url = `sections/admin?pageId=4&id=${params.params?.id}`;
    try {
      const rs = await request(url, 'GET', false);
      if (rs.success === true) {
        setIsApprove(rs.result.isApproved);
        setCanComment(rs.result.canComment);
        setIncident(rs.result);
        setEvidence(rs.result.media[0].link)
      }
    } catch (err) {
      showToast('error', 'Failed to fetch, kindly try again later');
      console.log(err);
    }
  }, [params.params?.id]);


  useEffect(() => {
    fetchIncident();
  }, [fetchIncident])
  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Post" breadcrumbItem="View Post" />

        <Container>
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <div className="invoice-title">
                    <h4 className="float-end font-size-16">
                      Post #{incident?.id}
                      <span className="badge bg-success font-size-12 ms-2">{incident?.isApproved === true ? 'Approved' : 'Awaiting Approval'}</span>
                    </h4>
                    <div className="mb-4">
                      <img src={logo} alt="logo" height="20" />
                    </div>

                  </div>
                  <hr className="my-4" />
                  <Row>
                    <Col sm="6">
                      <div className="text-muted">
                        <h5 className="font-size-16 mb-3 ">Post Content:</h5>
                        <p className="mb-2" style={{ fontWeight: '700' }}>Title: {incident?.title || '--'}</p>
                        <p className="mb-1" style={{ fontWeight: '700' }}>Description: <span style={{ fontWeight: '400' }}>{incident?.content || '--'}</span></p>
                        <p className="mb-1" style={{ fontWeight: '700' }}>Tags: <span style={{ fontWeight: '400' }}>{incident?.tags || '--'}</span></p>
                        <p className="mb-1" style={{ fontWeight: '700' }}>Category: <span style={{ fontWeight: '400' }}>{incident?.category?.name || '--'}</span></p>
                        <p className="mb-1" style={{ fontWeight: '700' }}>IsApproved: <span style={{ fontWeight: '400' }}>{incident?.isApproved === true ? 'True' : 'False'}</span></p>
                        <p className="mb-1" style={{ fontWeight: '700' }}>CanComment: <span style={{ fontWeight: '400' }}>{incident?.canComment === true ? 'True' : 'False'}</span></p>
                        <p className="mb-1" style={{ fontWeight: '700' }}>Date Posted: <span style={{ fontWeight: '400' }}>{new Date(incident?.createdAt).toDateString() || '--'}</span></p>
                      </div>
                    </Col>

                  </Row>
                  <div className="py-2">
                    <h5 className="font-size-15 mt-3">Uploaded Documents And Images</h5>

                    {incident?.media?.length >= 1 ? <Row>
                      <Col xl={12}>

                        <div className="d-flex">
                          <div>
                            {incident?.media.map(e => {
                              return (
                                <div style={{ cursor: 'pointer' }} onMouseEnter={() => setEvidence(e.link)}>
                                  <img src={e.link} className='img-thumbnail' width='100' alt="reported incident" />
                                </div>
                              )
                            })}
                          </div>
                          <div className="mx-4 w-100">
                            {incident?.media[0].type === 'video' ? <div className="embed-responsive">
                              <iframe
                                width='1090px'
                                height='400px'
                                title={incident?.media[0].name}
                                className="embed-responsive-item"
                                src={incident?.media[0].link}
                              />
                            </div> : <div className="embed-responsive">
                              <img src={evidence} style={{ objectFit: 'contain' }} width='100%' height='300px' alt="reported incident" />
                            </div>}
                          </div>
                        </div>
                      </Col>
                    </Row>
                      : <h5>No Evidence</h5>}

                    <Row className="mt-2">
                      <h5 className="font-size-15">Comments</h5>

                      {incident?.comments?.length >= 1 ? <Table className="table-nowrap table-centered mb-0">
                        <thead>
                          <tr>
                            <th style={{ width: "70px" }}>#</th>
                            <th style={{ width: "70px" }}>Date</th>
                            <th>Comment</th>
                          </tr>
                        </thead>
                        <tbody>

                          {incident?.comments?.map(e => {
                            return (
                              <tr key={e.id}>
                                <td>
                                  {e.id}
                                </td>
                                <td>
                                  {new Date(e.createdAt).toDateString()}
                                </td>
                                <td>
                                  {e.comment}
                                </td>
                              </tr>
                            )
                          })}

                        </tbody>
                      </Table> : <h5>No Comments kindly add comment</h5>}
                    </Row>
                    <Row>
                      <Col xl={12} className='mb-2'>
                        <Input type="textarea" height='100px' placeholder="Enter comment" value={comment} onChange={e => setComment(e.target.value)} />
                      </Col>

                    </Row>
                    <div className="d-flex">
                      <FormGroup className="mb-3">
                        <div className="form-check">
                          <Input
                            type="checkbox"
                            className="form-check-input"
                            id="comment"
                            checked={canComment}
                            onClick={() => setCanComment(!canComment)}
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="comment"
                          >
                            {" "}
                            Allow Comments
                          </Label>
                        </div>
                      </FormGroup>

                      <FormGroup className="mb-3 mx-2">
                        <div className="form-check">
                          <Input
                            type="checkbox"
                            className="form-check-input"
                            id="approve"
                            checked={isApprove}
                            onClick={() => setIsApprove(!isApprove)}
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="approve"
                          >
                            {" "}
                            Approve Post
                          </Label>
                        </div>
                      </FormGroup>
                    </div>

                    <div className="d-print-none mt-4">
                      <div className="float-end">
                        {/* <Link to="#" className="btn btn-success waves-effect waves-light me-1"><i className="fa fa-print"></i></Link>{" "} */}
                        <Button className="btn btn-success w-md waves-effect waves-light" onClick={onSave}>Save</Button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
export default withRouter(ViewPost);
