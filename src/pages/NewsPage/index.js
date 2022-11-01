import React, { useEffect, useState } from "react"
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
import { Link, useParams } from "react-router-dom"
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
import SeeAlso from "../../components/Common/SeeAlso"
import TopRead from "../../components/Common/TopRead"
import axios from "axios"

const Dashboard = () => {
  const param = useParams()
  const [individualNews, setIndividualNews] = useState()
  
  // console.log('aboki', param)
  useEffect(() => {
    const fetchAllNews = async () => {
      const response = await axios.get(
        "https://unirp.herokuapp.com/sections/?pageId=1&language=&events=&commentPage=1&commentLimit=20"
      )
      // setIndividualNews(response?.data?.result)
    }
    fetchAllNews()
  }, [])

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
                <Title title="NEWS" />
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
                      <Link
                        to="#"
                        className="btn btn-primary waves-effect waves-light"
                      >
                        Button
                      </Link>
                    </CardBody>
                  </Card>
            </Col>
            <Col xl={4}>
              <Title title="VIDEO GALLERY" />
              <VideoCard />
              <Title title="EVENTS" />
              <EventsCard />
            </Col>
            <Col xl={12}>
              <Title title="TOP READ" />
              <TopRead />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
