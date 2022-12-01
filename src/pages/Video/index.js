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
import ReactPaginate from "react-paginate"

const Dashboard = () => {
  const [videos, setVideos] = useState()
  const [meta, setMeta] = useState(null)

  const fetchAllVideos = async page => {
    const p = page || 1
    const response = await axios.get(
      `https://unirp.herokuapp.com/sections/?pageId=11&id=&language=&events=&commentPage=&commentLimit=&limit=9&page=${p}`
    )
    setVideos(response?.data?.result)
    setMeta(response?.data?.paging)
  }

  useEffect(() => {
    try {
      fetchAllVideos()
    } catch (error) {
      console.log("Fetch All Video Error", error)
    }
  }, [])

  console.log("Malik=======", meta)

  const handlePagination = page => {
    fetchAllVideos(page.selected + 1)
  }

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
                <Card className="h-100 d-inline-block w-100">
                  <CardBody>
                    {/* <YoutubeEmbed embedId="HJEue9-lTgg" /> */}
                    <YoutubeEmbed
                      embedId={`${video.media[0].link.split("=")[1]}`}
                    />
                  </CardBody>
                  <CardBody>
                    <CardText className="text-justify">
                      <h6 className="text-dark font-weight-bold">
                        {video.content}
                      </h6>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}

            <div className="mt-3 d-flex align-items-center justify-content-between">
              <div>Showing 1 to 10 of {meta?.total} entries</div>

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

            {/* <Col xl={12}>
              <div className="d-flex p-2 justify-content-center">
                <Link
                  to="#"
                  className="btn btn-outline-success waves-effect waves-light w-50 text-dark font-weight-bold"
                >
                  Load More
                </Link>
              </div>
            </Col> */}
            <TagsNoComment />
            
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
