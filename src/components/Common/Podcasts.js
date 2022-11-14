import React from "react"
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
  CardHeader,
} from "reactstrap"
import Socials from "./Socials"
import Tags from "./Tags"
import { useState } from "react"

const { Client } = require("podcast-api")
const client = Client({
  apiKey: process.env.LISTEN_API_KEY || null,
})

const Podcasts = props => {
  const [podCasts, setPodCasts] = useState(null)
  client
    .search({
      q: "elon musk",
    })
    .then(response => {
      setPodCasts(response.data.results)
    })
    .catch(error => {
      console.log("fetch Podcast error", error)
    })
  console.log("As Salam 2", podCasts)
  return (
    <Row>
      <Col xl={12} className="m-3">
        {podCasts?.map((podcast, i) => (
          <Card className="bg-success" key={i}>
            <CardBody>
              <CardText>{podcast.title_original}</CardText>
              <Col xl={12} className="d-flex flex-row justify-content-center">
                <audio
                  controls
                  data-theme="night"
                  data-src="https://changelog.com/jsparty/85/embed"
                  src={`${podcast.audio}`}
                  preload="none"
                  className="changelog-episode"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col xl={12}></Col>
            </CardBody>
          </Card>
        ))}
      </Col>
      <Socials />
      <Tags />
    </Row>
  )
}

Podcasts.propTypes = {
  title: PropTypes.string,
}

export default Podcasts
