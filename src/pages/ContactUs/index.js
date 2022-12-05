import React from "react"
import {
  Container,
  Row,
  Col,
  CardBody,
  Card,
  CardTitle,
  CardImg,
  CardText,
  Button,
  Input,
  Label,
  Form,
} from "reactstrap"


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Image

import Slidewithcontrol from "../Ui/CarouselTypes/iloslidewithcontrol"
import Title from "../../components/Common/Title"
import { Translate } from "react-auto-translate"

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Minible" breadcrumbItem="Home" />
          <Row>
            <Col xl={12}>
              <Slidewithcontrol />
            </Col>
          </Row>

          <Row>
            <Title title="Contact Us" />
            <div>
              <h1>
                <Translate>General Information</Translate>
              </h1>
              <p>
                <Translate>
                  You can contact the Public Inquiries team with general
                  questions about the FGN/ILO, or about the website, by using
                  the form below.
                </Translate>
              </p>
              <Row>
                <Col lg={12}>
                  <Card>
                    <CardBody>
                      <CardTitle className="mb-4">
                        <Translate>Please fill out this form</Translate>
                      </CardTitle>

                      <Form>
                        <Row>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label htmlFor="formrow-email-Input">
                                <Translate>Name</Translate>
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="formrow-email-Input"
                              />
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label htmlFor="formrow-password-Input">
                                <Translate>Email</Translate>
                              </Label>
                              <Input
                                type="email"
                                className="form-control"
                                id="formrow-password-Input"
                              />
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="mb-3">
                              <Label htmlFor="formrow-password-Input">
                                <Translate>Subject</Translate>
                              </Label>
                              <Input
                                type="email"
                                className="form-control"
                                id="formrow-password-Input"
                              />
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col lg={12}>
                            <div className="mt-3 mb-3">
                              <Label>
                                <Translate>Your Message</Translate>
                              </Label>

                              <Input
                                type="textarea"
                                id="textarea"
                                maxLength="225"
                                rows="3"
                                placeholder="Type Message Here"
                              />
                            </div>
                          </Col>
                        </Row>

                        <div>
                          <button
                            type="submit"
                            className="btn btn-success w-md"
                          >
                            Submit
                          </button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <p>
              <Translate>
                          
                Address: 4 route des Morillons, CH-1211, Genève 22, Switzerland
                          </Translate>
              </p>
              <p>
              <Translate>
                          
                E-mail: ilo@ilo.org , Switchboard: +41 (0) 22 799 6111 , Fax:
                +41 (0) 22 798 8685{" "}
                          </Translate>
              </p>
            </div>
            <Col xl={3}>
              <CardBody>
                <CardTitle>Public Information</CardTitle>
                <CardText>
                  ILO Library Tel: +41 22 799 8682 Fax: +41 22 799 6516 Website:
                  www.ilo.org/library Email:library@ilo.org
                </CardText>
              </CardBody>
            </Col>
            <Col xl={3}>
              <CardBody>
                <CardTitle>Media Enquiries</CardTitle>
                <CardText>
                  DCOMM Tel: +41 22 799 7912 Fax: +41 22 799 8577 Website:
                  ilo.org/newsroom Email:newsroom@ilo.org
                </CardText>
              </CardBody>
            </Col>
            <Col xl={3}>
              <CardBody>
                <CardTitle>Partnerships and Field Support</CardTitle>
                <CardText>
                  Partnerships and Development Cooperation Department Tel: +41
                  22 799 7239 Fax: +41 22 799 6872 Website: www.ilo.org/pardev
                  Email: PARDEV@ilo.org
                </CardText>
              </CardBody>
            </Col>
            <Col xl={3}>
              <CardBody>
                <CardTitle>
                  Helpdesk for Business on International standards
                </CardTitle>
                <CardText>
                  Tel: +41 22 799 6264 Fax: +41 22 799 6354 Website:
                  www.ilo.org/business Email: assistance@ilo.org
                </CardText>
              </CardBody>
            </Col>
            <Col xl={3}>
              <CardBody>
                <CardTitle>Bureau for Workers' Activities</CardTitle>
                <CardText>
                  Tel: +41 22 799 70 21 Fax: +41 22 799 65 70 Website:
                  www.ilo.org/actrav Email: actrav@ilo.org
                </CardText>
              </CardBody>
            </Col>
            <Col xl={3}>
              <CardBody>
                <CardTitle>Bureau for Employers' Activities</CardTitle>
                <CardText>
                  Tel: +41 22 799 77 48 Fax: +41 22 799 89 48 Website:
                  www.ilo.org/actemp Email: actemp@ilo.org
                </CardText>
              </CardBody>
            </Col>
            <Col xl={3}>
              <CardBody>
                <CardTitle>ILO Procurement</CardTitle>
                <CardText>
                  Tel: +41 22 799 7879 Fax: +41 22 799 8529 Website:
                  www.ilo.org/procurement Email: pcrt@ilo.org
                </CardText>
              </CardBody>
            </Col>
            <Col xl={3}>
              <CardBody>
                <CardTitle>
                  International Labour Organization Administrative Tribunal
                </CardTitle>
                <CardText>
                  Tel: +41 22 799 87 26 Fax: +41 22 799 87 37 Website:
                  www.ilo.org/tribunal Email: trib@ilo.org
                </CardText>
              </CardBody>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
