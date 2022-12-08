import React, { useCallback, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Input, Spinner, Label, Row, UncontrolledTooltip, Table, FormGroup } from "reactstrap";
import FileImg from '../../../assets/images/trans_file_img.png';
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import ReactPaginate from "react-paginate"

//Import Image
import logo from "../../../assets/images/logo-dark.png";
import { request } from "../../../services/utilities";
import { useEffect } from "react";
import toastr from "toastr"
import "toastr/build/toastr.min.css"
import { Editor } from "react-draft-wysiwyg"
import { updateLoader } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { EditorState, convertFromRaw } from "draft-js";

const ViewPost = props => {
  const { match: params } = props
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => ({
    loader: state.visibility.show
  }));
  const [incident, setIncident] = useState(null);
  const [comment, setComment] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [openorclose, setOpenorclose] = useState(null);
  const [canComment, setCanComment] = useState(false);
  const [isApprove, setIsApprove] = useState(false);
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty(),);
  const [evidence, setEvidence] = useState('');
  const [audio, setAudio] = useState('')
  const [status, setStatus] = useState([]);
  const [media, setMedia] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [fileLink, setFileLink] = useState('');
  const [documentName, setDocumentName] = useState('');

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
    dispatch(updateLoader(''));
    const data_c = { comment, sectionId: params.params?.id };

    let url_addc = `sections/comment`;
    let url_ap = `sections/approve?sectionId=${params.params?.id}`;
    let url_can = `sections/comment/status?sectionId=${params.params?.id}&canComment=${canComment === true ? 1 : 0}`;
    console.log(canComment)

    try {
      if (comment !== null && comment !== '') {
        const rs = await request(url_addc, 'POST', true, data_c);
        setComment('');
        console.log(rs, 'add comment')

      }
      // if (isApprove === true) {
      //   const rs = await request(url_ap, 'GET', true);
      //   console.log(rs, 'approve')

      // }
      // if (canComment === true) {
      //   const rs = await request(url_can, 'GET', true);
      //   console.log(rs, 'cmment')

      // }
      dispatch(updateLoader('none'));


      showToast('success', 'Successfully Saved');
    } catch (err) {
      if (err.message === 'comment blocked by admin') {
        showToast('error', err.message);

      } else {
        showToast('error', 'Failed to fetch, kindly try again later');

      }
      dispatch(updateLoader('none'));

      console.log(err);
    }
  }

  const downloadFile = () => {
    const linkSource = fileLink;
    const downloadLink = document.createElement('a');
    const fileName = 'test';
    downloadLink.href = linkSource;
    downloadLink.setAttribute('target', '_blank')
    downloadLink.setAttribute('ref', 'noreferrer noopene')
    downloadLink.download = fileName;
    downloadLink.click();
  }

  const fetchIncident = useCallback(async () => {
    dispatch(updateLoader(''));
    let url = `sections/admin?&id=${params.params?.id}`;
    try {
      const rs = await request(url, 'GET', true);
      // console.log(rs);
      if (rs.success === true) {
        setIsApprove(rs.result.isApproved);
        setCanComment(rs.result.canComment);
        setIncident(rs.result);
        setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(rs.result?.content))))
        let medias = rs.result.media.filter(e => e.type !== 'document');
        let image = rs.result.media.filter(e => e.type === 'image');
        let documents = rs.result.media.filter(e => e.type === 'document');
        setMedia(medias);
        setEvidence(image[0]?.link);
        setDocumentName(documents[0]?.name);
        setDocuments(documents);
        setFileLink(documents[0]?.link);
      }
      dispatch(updateLoader('none'));

    } catch (err) {
      showToast('error', 'Failed to fetch, kindly try again later');
      console.log(err);
      dispatch(updateLoader('none'));
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
                    <Col sm="6" xl='12'>
                      <div className="text-muted">
                        <h5 className="font-size-16 mb-3 ">Post Content:</h5>
                        <p className="mb-2" style={{ fontWeight: '700' }}>Title: {incident?.title || '--'}</p>
                        <p className="mb-1" style={{ fontWeight: '700' }}>Description: <span style={{ fontWeight: '400' }}>
                          {/* {incident?.content || '--'} */}
                          <Editor
                            style={{ border: 'none' }}
                            editorState={editorState}
                            toolbarHidden
                            readOnly
                          />
                        </span></p>
                        <p className="mb-1" style={{ fontWeight: '700' }}>Tags: <span style={{ fontWeight: '400' }}>{incident?.tags || '--'}</span></p>
                        <p className="mb-1" style={{ fontWeight: '700' }}>Category: <span style={{ fontWeight: '400' }}>{incident?.page?.name || '--'}</span></p>
                        <p className="mb-1" style={{ fontWeight: '700' }}>IsApproved: <span style={{ fontWeight: '400' }}>{incident?.isApproved === true ? 'True' : 'False'}</span></p>
                        <p className="mb-1" style={{ fontWeight: '700' }}>CanComment: <span style={{ fontWeight: '400' }}>{incident?.canComment === true ? 'True' : 'False'}</span></p>
                        <p className="mb-1" style={{ fontWeight: '700' }}>Date Posted: <span style={{ fontWeight: '400' }}>{new Date(incident?.createdAt).toDateString() || '--'}</span></p>
                      </div>
                    </Col>

                  </Row>
                  <div className="py-2">
                    <h5 className="font-size-15 mt-3">Uploaded  Images</h5>

                    {media?.length >= 1 ? <Row>
                      <Col xl={12}>

                        <div className="d-flex">
                          <div>
                            {media?.map(e => {
                              if (e.type === 'image') {
                                return (
                                  <div key={e.id} style={{ cursor: 'pointer' }} onMouseEnter={() => setEvidence(e.link)}>
                                    <img src={e.link} className='img-thumbnail' width='100' alt="reported incident" />
                                  </div>
                                )
                              }
                              if (e.type === 'video' || e.type === 'audio') {
                                return (
                                  <div className="embed-responsive" key={e.id}>
                                    <iframe
                                      width='1090px'
                                      height='400px'
                                      title={e.name}
                                      className="embed-responsive-item"
                                      src={e.link}
                                      onMouseEnter={() => setAudio(e.link)}
                                    />
                                  </div>
                                )
                              }

                            })}
                          </div>
                          <div className="mx-4 w-100">
                            {media?.type === 'audio' || media?.type === 'video' ?
                              <div className="embed-responsive">
                                <iframe
                                  width='1090px'
                                  height='400px'
                                  title={'evidence'}
                                  className="embed-responsive-item"
                                  src={audio}
                                />
                              </div> : <div className="embed-responsive">
                                <img src={evidence} style={{ objectFit: 'contain' }} width='100%' height='300px' alt="reported incident" />
                              </div>}
                          </div>
                        </div>
                        {documents?.length >= 1 ? <>
                          <h5 className="font-size-15 mt-3">Uploaded Documents</h5>
                          <div className="">
                            <Table bordered striped>
                              <thead>
                                <tr>
                                  <th>
                                    #
                                  </th>
                                  <th>
                                    Name
                                  </th>
                                  <th>
                                    Actions
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {documents?.map((e, i) => {
                                  return (
                                    <tr key={i} className='text-capitalize'>

                                      <td>
                                        {i + 1}
                                      </td>
                                      <td>
                                        {e.name}
                                      </td>

                                      <td>
                                        <div className="d-flex gap-3 users">
                                          <ul className="list-inline font-size-20 contact-links mb-0">

                                            <li className="list-inline-item">
                                              <Button
                                                to='#'
                                                onClick={() => {
                                                  downloadFile(e.link);
                                                }}
                                              >
                                                <i className="uil-expand-arrows-alt font-size-18" id="edittooltip2" />
                                                <UncontrolledTooltip placement="top" target="edittooltip2">
                                                  View Details
                                                </UncontrolledTooltip>
                                              </Button>
                                            </li>
                                          </ul>
                                        </div>
                                      </td>
                                    </tr>
                                  )
                                })}
                              </tbody>
                            </Table>
                            <div className="mt-3 d-flex align-items-center justify-content-between">
                              <div>Showing 1 to 10 of {documents?.length} entries</div>

                              <div>
                                <ReactPaginate
                                  nextLabel='Next'
                                  breakLabel='...'
                                  previousLabel='Prev'
                                  pageCount={1}
                                  activeClassName='active'
                                  breakClassName='page-item'
                                  pageClassName={'page-item'}
                                  breakLinkClassName='page-link'
                                  nextLinkClassName={'page-link'}
                                  pageLinkClassName={'page-link'}
                                  nextClassName={'page-item next'}
                                  previousLinkClassName={'page-link'}
                                  previousClassName={'page-item prev'}
                                  // onPageChange={page => props.handlePagination(page)}
                                  forcePage={1}
                                  containerClassName={'pagination react-paginate justify-content-end p-1'}
                                />
                              </div>

                            </div>
                          </div></> : ''}
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
                    {/* <div className="d-flex">
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
                    </div> */}

                    <div className="d-print-none mt-4">
                      <div className="float-start">
                        <Spinner className="fs-5 float-end mx-2" style={{ display: loader }} color="primary" />
                      </div>
                      <div className="float-end">
                        <Link to={`/stakeholder-edit-post/${params.params?.id}`} className="btn btn-success waves-effect waves-light me-1">Edit</Link>{" "}
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
