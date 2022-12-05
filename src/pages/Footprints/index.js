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
} from "reactstrap"
import { Link } from "react-router-dom"
import newImage1 from "../../assets/images/un/children.png"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import MiniWidget from "./mini-widget"
import SalesAnalyticsChart from "./salesanalytics-chart"
import TopProduct from "./topselling-product"
import TopUser from "./topuser"
import RecentActivity from "./recent-activity"
import SocialSource from "./socialsource"
import LatestTransaction from "./latest-transaction"

//Import Image
import setupanalytics from "../../assets/images/setup-analytics-amico.svg"
import ILOSlideWithControl from "../Ui/CarouselTypes/iloslidewithcontrol"
import Slidewithcontrol from "../Ui/CarouselTypes/iloslidewithcontrol"
import Title from "../../components/Common/Title"
import NewsCard from "../../components/Common/NewsCard"
import VideoCard from "../../components/Common/VideoCard"
import EventsCard from "../../components/Common/EventsCard"
import FootPrints from "../../components/Common/FootPrints"
import Resources from "../../components/Common/Resources"
import GoodPractices from "../../components/Common/GoodPractices"
import Podcast from "../../components/Common/Podcast"
import Statistics from "../../components/Common/Statistics"

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
            <Col xl={8}>
              <Col className="me-3">
               

                <Title title="FOOTPRINTS" />
                <Row>
                  <Col mg={6} xl={6}>
                    <Card>
                      <CardImg
                        top
                        className="img-fluid"
                        src={newImage1}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle className="h4 mt-0">Card title</CardTitle>
                        <CardText>
                          Some quick example text to build on the card title and
                          make up the bulk of the card&apos;s content.
                        </CardText>
                      </CardBody>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">
                          Dapibus ac facilisis in
                        </li>
                      </ul>
                      <CardBody>
                        <Link to="#" className="card-link">
                          Card link
                        </Link>{" "}
                        <Link to="#" className="card-link">
                          Another link
                        </Link>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col mg={6} xl={6}>
                    <Row className="g-0 align-items-center">
                      <Col md={4}>
                        <CardImg
                          className="img-fluid"
                          src={newImage1}
                          alt="Card image cap"
                        />
                      </Col>
                      <Col md={8}>
                        <CardBody>
                          <CardTitle className="h5">Card title</CardTitle>
                          <CardText>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content.ssssss
                          </CardText>
                          <CardText>
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </CardText>
                        </CardBody>
                      </Col>
                    </Row>
                    <Row className="g-0 align-items-center">
                      <Col md={4}>
                        <CardImg
                          className="img-fluid"
                          src={newImage1}
                          alt="Card image cap"
                        />
                      </Col>
                      <Col md={8}>
                        <CardBody>
                          <CardTitle className="h5">Card title</CardTitle>
                          <CardText>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content.ssssss
                          </CardText>
                          <CardText>
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </CardText>
                        </CardBody>
                      </Col>
                    </Row>
                    <Row className="g-0 align-items-center">
                      <Col md={4}>
                        <CardImg
                          className="img-fluid"
                          src={newImage1}
                          alt="Card image cap"
                        />
                      </Col>
                      <Col md={8}>
                        <CardBody>
                          <CardTitle className="h5">Card title</CardTitle>
                          <CardText>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content.ssssss
                          </CardText>
                          <CardText>
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </CardText>
                        </CardBody>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col mg={6} xl={6}>
                    <Card>
                      <CardImg
                        top
                        className="img-fluid"
                        src={newImage1}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle className="h4 mt-0">Card title</CardTitle>
                        <CardText>
                          Some quick example text to build on the card title and
                          make up the bulk of the card&apos;s content.
                        </CardText>
                      </CardBody>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">
                          Dapibus ac facilisis in
                        </li>
                      </ul>
                      <CardBody>
                        <Link to="#" className="card-link">
                          Card link
                        </Link>{" "}
                        <Link to="#" className="card-link">
                          Another link
                        </Link>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col mg={6} xl={6}>
                    <Row className="g-0 align-items-center">
                      <Col md={4}>
                        <CardImg
                          className="img-fluid"
                          src={newImage1}
                          alt="Card image cap"
                        />
                      </Col>
                      <Col md={8}>
                        <CardBody>
                          <CardTitle className="h5">Card title</CardTitle>
                          <CardText>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content.ssssss
                          </CardText>
                          <CardText>
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </CardText>
                        </CardBody>
                      </Col>
                    </Row>
                    <Row className="g-0 align-items-center">
                      <Col md={4}>
                        <CardImg
                          className="img-fluid"
                          src={newImage1}
                          alt="Card image cap"
                        />
                      </Col>
                      <Col md={8}>
                        <CardBody>
                          <CardTitle className="h5">Card title</CardTitle>
                          <CardText>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content.ssssss
                          </CardText>
                          <CardText>
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </CardText>
                        </CardBody>
                      </Col>
                    </Row>
                    <Row className="g-0 align-items-center">
                      <Col md={4}>
                        <CardImg
                          className="img-fluid"
                          src={newImage1}
                          alt="Card image cap"
                        />
                      </Col>
                      <Col md={8}>
                        <CardBody>
                          <CardTitle className="h5">Card title</CardTitle>
                          <CardText>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content.ssssss
                          </CardText>
                          <CardText>
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </CardText>
                        </CardBody>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                {/* <FootPrints /> */}
                
              </Col>
            </Col>
            <Col xl={4}>
              <Title title="VIDEO GALLERY" />
              <VideoCard />
              <Title title="EVENTS" />
              <EventsCard />
            </Col>
            
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
