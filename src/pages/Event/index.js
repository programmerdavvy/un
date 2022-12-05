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
import ReactPaginate from "react-paginate"

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
import moment from "moment"

const Dashboard = () => {
  const [event, setEvent] = useState()
  const [meta, setMeta] = useState(null)

  const fetchAllEvent = async page => {
    const p = page || 1
    const response = await axios.get(
      `https://unirp.herokuapp.com/sections/?pageId=2&language=&events=&commentPage=&commentLimit=20&limit=10&page=${p}`
    )
    setEvent(response?.data?.result)
    setMeta(response?.data?.paging)
  }

  useEffect(() => {
    try {
      fetchAllEvent()
    } catch (error) {
      console.log("Fetch All Event Error", error)
    }
  }, [])

  const handlePagination = page => {
    fetchAllEvent(page.selected + 1)
  }
  console.log("Malik", event)

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
                <Title title="ALL EVENTS" />
                {event?.map((event, id) => (
                  <Row className="mb-5">
                    <Col xl={2} className="">
                      {moment(event.startDate).format("DD-MM-YYYY")}
                    </Col>
                    <Col xl={10} className="">
                      <p>{event.title}</p>
                      <h3>{event.title}</h3>
                      <span className="mb-5">Venue: {event.location}</span>
                      <p>{event.content.slice(0, 200)}</p>
                    </Col>
                  </Row>
                ))}
              </Col>
              <div className="mt-3 d-flex align-items-center justify-content-between">
                <div>Showing 1 to 10 of {meta?.total} Events</div>

                <div>
                  <ReactPaginate
                    nextLabel="Next"
                    breakLabel="..."
                    previousLabel="Prev"
                    pageCount={meta?.pages}
                    // pageCount={props.count}
                    activeClassName="active"
                    breakClassName="page-item"
                    pageClassName={"page-item"}
                    breakLinkClassName="page-link"
                    nextLinkClassName={"page-link"}
                    pageLinkClassName={"page-link"}
                    nextClassName={"page-item next"}
                    previousLinkClassName={"page-link"}
                    previousClassName={"page-item prev"}
                    onPageChange={page => handlePagination(page)}
                    // forcePage={props.currentPage !== 0 ? props.currentPage - 1 : 0}
                    containerClassName={
                      "pagination react-paginate justify-content-end p-1"
                    }
                  />
                </div>
              </div>
            </Col>
            <Col xl={4}>
              <Title title="VIDEO GALLERY" />
              <VideoCard />
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
