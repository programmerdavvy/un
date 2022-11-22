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
// import ILOSlideWithControl from "../Ui/CarouselTypes/iloslidewithcontrol"
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
import YoutubeEmbed from "../../components/Common/YoutubeEmbed"
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
            <Col xl={8}>
              <Col className="me-3">
                <Title title="About FGN UN ILO" />
                
                  <CardBody>
                    <CardText className=" h-100 d-flex align-items-end">
                      <h4 className="text-dark text-justify">
                        <Translate>

                        The only tripartite U.N. agency, since 1919 the ILO
                        brings together governments, employers and workers of
                        187 member States , to set labour standards, develop
                        policies and devise programmes promoting decent work for
                        all women and men. Origins and history
                        </Translate>
                      </h4>
                    </CardText>
                  </CardBody>
              
                
                  <CardBody>
                 <YoutubeEmbed embedId="HJEue9-lTgg"/>
                  </CardBody>
              

                <Title title="PODCAST" />
                <Podcast />
              </Col>
            </Col>
            <Col xl={4}>
              <Title title="VIDEO GALLERY" />
              <VideoCard />
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
