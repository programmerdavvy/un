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
import TagsNoComment from "../../components/Common/TagsNoComment"
import TopRead from "../../components/Common/TopRead"
import YoutubeEmbed from "../../components/Common/YoutubeEmbed"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

const Dashboard = () => {
  const [videos, setVideos] = useState()
  useEffect(() => {
    try {
      const fetchAllVideos = async () => {
        const response = await axios.get(
          "https://unirp.herokuapp.com/sections/?pageId=11&id=&language=&events=&commentPage=1&commentLimit=20"
        )
        setVideos(response?.data?.result)
      }
      fetchAllVideos()
    } catch (error) {
      console.log("Fetch All Video Error", error)
    }
  }, [])

  console.log("Malik=======", videos)

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
            <Title title="VIDEO GALLERY" />
            {videos?.map((video, i) => (
              <Col xl={4} key={i}>
                <Card>
                  <CardBody>
                    {/* <YoutubeEmbed embedId="HJEue9-lTgg" /> */}
                    <YoutubeEmbed
                      embedId={`${video.media[0].link.split("=")[1]}`}
                    />
                  </CardBody>
                  <CardBody>
                    <CardText className="text-justify">
                      <h4 className="text-dark font-weight-bold">
                        {video.content}
                      </h4>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}

            <Col xl={12}>
              <div className="d-flex p-2 justify-content-center">
                <Link
                  to="#"
                  className="btn btn-outline-success waves-effect waves-light w-50 text-dark font-weight-bold"
                >
                  Load More
                </Link>
              </div>
            </Col>
            <TagsNoComment />
            <Title title="TOP READ" />
            <TopRead />
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
