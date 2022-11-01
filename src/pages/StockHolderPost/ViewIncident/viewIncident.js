import React, { useCallback, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Card, CardBody, Col, Container, Row, Table } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

//Import Image
import logo from "../../../assets/images/logo-dark.png";
import { request } from "../../../services/utilities";

const ViewIncident = props => {
  const { match: params } = props
  const [incident, setIncident] = useState(null);

  const fetchIncident = useCallback(async () => {
    const data = { referenceId: params.params?.id }
    let url = `incident/get-incident`
    try {
      const rs = await request(url, 'GET', false);
      console.log(rs);
    } catch (err) {
      console.log(err);
    }
  }, [params.params?.id]);

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
                      Invoice # {'ViewIncident.invoiceID'}
                      <span className="badge bg-success font-size-12 ms-2">Paid</span>
                    </h4>
                    <div className="mb-4">
                      <img src={logo} alt="logo" height="20" />
                    </div>
                    <div className="text-muted">
                      <p className="mb-1">{'invoiceDetail.shippingAddress'}</p>
                      <p className="mb-1"><i className="uil uil-envelope-alt me-1"></i> {'invoiceDetail.shippingEmail'}</p>
                      <p><i className="uil uil-phone me-1"></i> {'invoiceDetail.shippingPhoneno'}</p>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <Row>
                    <Col sm="6">
                      <div className="text-muted">
                        <h5 className="font-size-16 mb-3">Billed To:</h5>
                        <h5 className="font-size-15 mb-2">{'invoiceDetail.billingName'}</h5>
                        <p className="mb-1">{'invoiceDetail.billingAddress'}</p>
                        <p className="mb-1">{'invoiceDetail.billingEmail'}</p>
                        <p>{'invoiceDetail.billingPhoneno'}</p>
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="text-muted text-sm-end">
                        <div>
                          <h5 className="font-size-16 mb-1">Invoice No:</h5>
                          <p>{'invoiceDetail.invoiceID'}</p>
                        </div>
                        <div className="mt-4">
                          <h5 className="font-size-16 mb-1">Invoice Date:</h5>
                          <p>{'invoiceDetail.date'}</p>
                        </div>
                        <div className="mt-4">
                          <h5 className="font-size-16 mb-1">Order No:</h5>
                          <p>#{'invoiceDetail.orderId'}</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="py-2">
                    <h5 className="font-size-15">Order summary</h5>

                    <Table className="table-nowrap table-centered mb-0">
                      <thead>
                        <tr>
                          <th style={{ width: "70px" }}>No.</th>
                          <th>Item</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th className="text-end" style={{ width: "120px" }}>Total</th>
                        </tr>
                      </thead>
                      <tbody>



                      </tbody>
                    </Table>

                    <div className="d-print-none mt-4">
                      <div className="float-end">
                        <Link to="#" className="btn btn-success waves-effect waves-light me-1"><i className="fa fa-print"></i></Link>{" "}
                        <Link to="#" className="btn btn-primary w-md waves-effect waves-light">Send</Link>
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
