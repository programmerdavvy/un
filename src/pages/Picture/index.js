import React, { useEffect } from "react"
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
import axios from 'axios'
import { useState } from "react"


const Dashboard = () => {
 
  const [allPictures, setAllPictures] = useState(null)
  useEffect(() => {
    try {
      const fetchAllPictures = async () => {
        const response = await axios.get(
          `https://unirp.herokuapp.com/sections/?pageId=3&language=&events=&commentPage=1&commentLimit=20`
          )
          console.log('Black', response)
          
          setAllPictures(response?.data?.result)
        }
        fetchAllPictures()
    } catch (error) {
      console.log('fetch AllPictures Error', error)
    }
    }, [])
    console.log('heyyyy', allPictures)

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
            <Title title="PICTURE GALLERY" />
            {allPictures?.map((picture, key) => (
              <Col xl={4}>
              <div>
                <CardImg
                  top
                  className="img-fluid"
                  src={picture?.media[0].link}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardText className="text-justify card-img-overlay text-white mt-5 h-50 d-flex align-items-end">
                    {picture.title}
                  </CardText>
                </CardBody>
              </div>
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
