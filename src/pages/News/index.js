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
import SeeAlso from "../../components/Common/SeeAlso"
import TopRead from "../../components/Common/TopRead"
import axios from "axios"


const Dashboard = () => {
  const [news, setNews] = useState()
  useEffect(() => {
    try {
      const fetchAllNews = async () => {
        const response = await axios.get(
          "https://unirp.herokuapp.com/sections/?pageId=1&language=&events=&commentPage=1&commentLimit=20"
        )
        setNews(response?.data?.result)
        
      }
      fetchAllNews()
    } catch (error) {
      console.log('Fetch All News Error', error)
    }
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
            <Title title="LATEST" />
            <NewsCard news={news}/>
          </Row>

          <Row>
            <Col xl={8}>
              <Col className="me-3">
                <Title title="SEE ALSO" />
                <SeeAlso news={news}/>
              </Col>
            </Col>
            <Col xl={4}>
              <Title title="VIDEO GALLERY" />
              <VideoCard />
              <Title title="EVENTS" />
              <EventsCard />
            </Col>
            <Col xl={12}>
            <Title title="TOP READ" />
            <TopRead/>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
