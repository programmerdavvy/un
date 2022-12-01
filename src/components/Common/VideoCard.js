import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap"
import newImage1 from "../../assets/images/un/video1.png"
import newImage2 from "../../assets/images/un/video2.png"
import newImage3 from "../../assets/images/un/video3.png"
import { Translate } from "react-auto-translate"
import axios from "axios"
import YoutubeEmbed from "./YoutubeEmbed"

const VideoCard = props => {
  const [videos, setVideos] = useState()
  useEffect(() => {
    try {
      const fetchAllVideos = async () => {
        const response = await axios.get(
          "https://unirp.herokuapp.com/sections/?pageId=11&id=&language=&events=&commentPage=1&commentLimit=20"
        )
        setVideos(response?.data?.result.slice(0, 3))
      }
      fetchAllVideos()
    } catch (error) {
      console.log("Fetch All Video Error", error)
    }
  }, [])

  return (
    <Row>
      {videos?.map((video, i) => (
        <Col xl={12} key={i}>
          <Card>
            <CardBody>
              <YoutubeEmbed embedId={`${video.media[0].link.split("=")[1]}`} />
            </CardBody>
            <CardBody>
              <CardText className="text-justify">
                <h4 className="text-dark font-weight-bold">{video.content}</h4>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      ))}

      <Col xl={12}>
        <div className="d-flex p-2 justify-content-center">
          <Link
            to="/videos"
            className="btn btn-outline-success waves-effect waves-light w-50 text-dark font-weight-bold"
          >
            <Translate>View More</Translate>
          </Link>
        </div>
      </Col>
    </Row>
  )
}

VideoCard.propTypes = {
  title: PropTypes.string,
}

export default VideoCard
