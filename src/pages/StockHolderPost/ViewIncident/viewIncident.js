import React, { useCallback, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Input, Label, Row, Table } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

//Import Image
import logo from "../../../assets/images/logo-dark.png";
import { request } from "../../../services/utilities";
import { useEffect } from "react";
import toastr from "toastr"
import "toastr/build/toastr.min.css"

const ViewIncident = props => {
  const { match: params } = props
  const [incident, setIncident] = useState(null);
  const [comment, setComment] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [openorclose, setOpenorclose] = useState(null);

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
    const data_c = { comment, incidentId: incident?.id, statusId: selectedStatus };
    const data_s = { statusId: selectedStatus }

    try {
      let url_c = `incident/comment/add`;
      let url_s = `incident/change/status?id=${incident?.id}`
      const rs = await request(url_c, 'POST', false, data_c);
      if (selectedStatus !== null) {
        const rs_s = await request(url_s, 'PATCH', false, data_s);

      }
      if (rs.success === true) {
        setComment('');
        showToast('success', 'Successfully Saved');
      }
    } catch (err) {
      if (err.message === 'all fields are Required') {
        showToast('error', 'Status and comment is required');
      } else {
        showToast('error', 'Failed to save');

      }
      console.log(err);
    }
  }
  const fetchIncident = useCallback(async () => {
    const data = { referenceId: params.params?.id }
    let url = `incident/get-incident`;
    let url2 = `status`

    try {
      const rs = await request(url, 'POST', false, data);
      const rs2 = await request(url2, 'GET', false);
      console.log(rs)
      if (rs.success === true && rs2.success === true) {
        setIncident(rs.result);
        setStatus(rs2.result);
        // setSelectedStatus(rs.result?.status);
      }
    } catch (err) {

      console.log(err);
    }
  }, [params.params?.id]);


  useEffect(() => {
    fetchIncident();
  }, [fetchIncident])
  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Incidents" breadcrumbItem="View Incidents" />

        <Container>
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <div className="invoice-title">
                    <h4 className="float-end font-size-16">
                      Reported Incident #{incident?.referenceId}
                      <span className="badge bg-success font-size-12 ms-2">{incident?.status}</span>
                    </h4>
                    <div className="mb-4">
                      <img src={logo} alt="logo" height="20" />
                    </div>

                  </div>
                  <hr className="my-4" />
                  <Row>
                    <Col sm="6">
                      <div className="text-muted">
                        <h5 className="font-size-16 mb-3">Child Information:</h5>
                        <p className="mb-2">Full Name: {incident?.childname || '--'}</p>
                        <p className="mb-1">Address: {incident?.child_address || '--'}</p>
                        <p className="mb-1">Age: {incident?.age || '--'}</p>
                        <p className="mb-1">Sex: {incident?.sex || '--'}</p>
                        <p className="mb-1">City: {incident?.city || '--'}</p>
                        <p className="mb-1">State: {incident?.state || '--'}</p>
                        <p className="mb-1">LGA: {incident?.lga || '--'}</p>
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="text-muted">
                        <h5 className="font-size-16 mb-3">Reporter Information:</h5>
                        <p className="mb-2">Full Name: {incident?.reporter_name || '--'}</p>
                        <p className="mb-1">Email: {incident?.reporter_mail || '--'}</p>
                        <p className="mb-1">reporter_phone: {incident?.phone || '--'}</p>
                      </div>
                    </Col>
                  </Row>
                  <div className="py-2">
                    <h5 className="font-size-15">Evidence</h5>

                    {incident?.media?.length >= 1 ? <Row>
                      <Col xl={12}>

                        {incident?.media[0].type === 'video' ? <div className="embed-responsive">
                          <iframe
                            width='1090px'
                            height='400px'
                            title={incident?.media[0].name}
                            className="embed-responsive-item"
                            src={incident?.media[0].link}
                          />
                        </div> : <div className="embed-responsive">
                          <img src={incident?.media[0].link} className='img-fluixzd' width='100%' height='300px' alt="reported incident" />
                        </div>}
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
                      <Col>
                        <Label htmlFor="validationCustom01"> Incident Status</Label>
                        <div className="mb-3">
                          <select
                            className="form-select"
                            id="floatingSelectGrid"
                            name="category"
                            style={{ height: '30px' }}
                            onChange={e => setSelectedStatus(e.target.value)}

                          >
                            <option>Select Status</option>
                            {status?.map(e => {
                              return (
                                <option key={e.id} value={e.id}>{e.name}</option>
                              )
                            })}
                          </select>

                        </div>

                      </Col>
                    </Row>


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
export default withRouter(ViewIncident);
