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
            <Title title="NEWS" />
            <NewsCard />
          </Row>

          <Row>
            <Col xl={8}>
              <Col className="me-3">
                <Title title="DANGERS" />
                <Card>
                  <CardImg
                    top
                    className="img-fluid h-100"
                    src={newImage1}
                    alt="children labour"
                  />
                  <CardBody>
                    <CardText className="text-justify card-img-overlay h-100 d-flex align-items-end">
                      <h4 className="text-white font-weight-bold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam est mi, auctor eget
                      </h4>
                    </CardText>
                  </CardBody>
                </Card>

                <Title title="FOOTPRINTS" />
                <FootPrints />
                <Title title="RESOURCES" />
                <Resources />
                <Title title="GOOD PRACTICES" />
                <GoodPractices />
                <Title title="PODCAST" />
                <Podcast />
              </Col>
            </Col>
            <Col xl={4}>
              <Title title="VIDEO GALLERY" />
              <VideoCard />
              <Title title="EVENTS" />
              <EventsCard />
            </Col>
            <Col xl={12}>
              <Title title="STATISTICS" />
              <Statistics />
            </Col>
          </Row>

          {/* <Row>
            <MiniWidget reports={reports} />
          </Row> */}

          {/* <Row>
            <Col xl={8}>
              <SalesAnalyticsChart />
            </Col>
            <Col xl={4}>
              <Card className="bg-primary">
                <CardBody>
                  <Row className="align-items-center">
                    <Col sm={8}>
                      <p className="text-white font-size-18">
                        Enhance your <b>Campaign</b> for better outreach{" "}
                        <i className="mdi mdi-arrow-right"></i>
                      </p>
                      <div className="mt-4">
                        <Link
                          to="#"
                          className="btn btn-success waves-effect waves-light"
                        >
                          Upgrade Account!
                        </Link>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="mt-4 mt-sm-0">
                        <img
                          src={setupanalytics}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <TopProduct />
            </Col>
          </Row> */}
          {/* <Row>
            <Col xl={4}>
              <TopUser />
            </Col>
            <Col xl={4}>
              <RecentActivity />
            </Col>
            <Col xl={4}>
              <SocialSource />
            </Col>
          </Row> */}
          {/* <LatestTransaction /> */}
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
