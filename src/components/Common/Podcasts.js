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
  console.log('As Salam 2', Podcasts);
  return (
    <Row>
      <Col xl={12} className="m-3">
        <Card className="bg-success">
          <CardBody>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </CardText>
            <Col xl={12} className="d-flex flex-row justify-content-center">
              <audio
                controls
                data-theme="night"
                data-src="https://changelog.com/jsparty/85/embed"
                src="https://cdn.changelog.com/uploads/jsparty/85/js-party-85.mp3"
                preload="none"
                className="changelog-episode"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xl={12}></Col>
          </CardBody>
        </Card>

        <Card className="bg-success">
          <CardBody>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </CardText>
            <Col xl={12} className="d-flex flex-row justify-content-center">
              <div
                style={{
                  width: "0px",
                  height: "0px",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "10px solid white",
                  margin: "8px",
                }}
              ></div>
              <hr className="pt-1 bg-white w-100" />
            </Col>
            <Col xl={12}></Col>
          </CardBody>
        </Card>
        <Card className="bg-success">
          <CardBody>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </CardText>
            <Col xl={12} className="d-flex flex-row justify-content-center">
              <div
                style={{
                  width: "0px",
                  height: "0px",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "10px solid white",
                  margin: "8px",
                }}
              ></div>
              <hr className="pt-1 bg-white w-100" />
            </Col>
            <Col xl={12}></Col>
          </CardBody>
        </Card>
        <Card className="bg-success">
          <CardBody>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </CardText>
            <Col xl={12} className="d-flex flex-row justify-content-center">
              <div
                style={{
                  width: "0px",
                  height: "0px",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "10px solid white",
                  margin: "8px",
                }}
              ></div>
              <hr className="pt-1 bg-white w-100" />
            </Col>
            <Col xl={12}></Col>
          </CardBody>
        </Card>
        <Card className="bg-success">
          <CardBody>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </CardText>
            <Col xl={12} className="d-flex flex-row justify-content-center">
              <div
                style={{
                  width: "0px",
                  height: "0px",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "10px solid white",
                  margin: "8px",
                }}
              ></div>
              <hr className="pt-1 bg-white w-100" />
            </Col>
            <Col xl={12}></Col>
          </CardBody>
        </Card>
        <Card className="bg-success">
          <CardBody>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </CardText>
            <Col xl={12} className="d-flex flex-row justify-content-center">
              <div
                style={{
                  width: "0px",
                  height: "0px",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "10px solid white",
                  margin: "8px",
                }}
              ></div>
              <hr className="pt-1 bg-white w-100" />
            </Col>
            <Col xl={12}></Col>
          </CardBody>
        </Card>
        <Card className="bg-success">
          <CardBody>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </CardText>
            <Col xl={12} className="d-flex flex-row justify-content-center">
              <div
                style={{
                  width: "0px",
                  height: "0px",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "10px solid white",
                  margin: "8px",
                }}
              ></div>
              <hr className="pt-1 bg-white w-100" />
            </Col>
            <Col xl={12}></Col>
          </CardBody>
        </Card>
        <Card className="bg-success">
          <CardBody>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </CardText>
            <Col xl={12} className="d-flex flex-row justify-content-center">
              <div
                style={{
                  width: "0px",
                  height: "0px",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "10px solid white",
                  margin: "8px",
                }}
              ></div>
              <hr className="pt-1 bg-white w-100" />
            </Col>
            <Col xl={12}></Col>
          </CardBody>
        </Card>
        <Card className="bg-success">
          <CardBody>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </CardText>
            <Col xl={12} className="d-flex flex-row justify-content-center">
              <div
                style={{
                  width: "0px",
                  height: "0px",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "10px solid white",
                  margin: "8px",
                }}
              ></div>
              <hr className="pt-1 bg-white w-100" />
            </Col>
            <Col xl={12}></Col>
          </CardBody>
        </Card>
        <Card className="bg-success">
          <CardBody>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </CardText>
            <Col xl={12} className="d-flex flex-row justify-content-center">
              <div
                style={{
                  width: "0px",
                  height: "0px",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "10px solid white",
                  margin: "8px",
                }}
              ></div>
              <hr className="pt-1 bg-white w-100" />
            </Col>
            <Col xl={12}></Col>
          </CardBody>
        </Card>
        <Card className="bg-success">
          <CardBody>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </CardText>
            <Col xl={12} className="d-flex flex-row justify-content-center">
              <div
                style={{
                  width: "0px",
                  height: "0px",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "10px solid white",
                  margin: "8px",
                }}
              ></div>
              <hr className="pt-1 bg-white w-100" />
            </Col>
            <Col xl={12}></Col>
          </CardBody>
        </Card>
        <Card className="bg-success">
          <CardBody>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </CardText>
            <Col xl={12} className="d-flex flex-row justify-content-center">
              <div
                style={{
                  width: "0px",
                  height: "0px",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "10px solid white",
                  margin: "8px",
                }}
              ></div>
              <hr className="pt-1 bg-white w-100" />
            </Col>
            <Col xl={12}></Col>
          </CardBody>
        </Card>
        <Card className="bg-success">
          <CardBody>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </CardText>
            <Col xl={12} className="d-flex flex-row justify-content-center">
              <div
                style={{
                  width: "0px",
                  height: "0px",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "10px solid white",
                  margin: "8px",
                }}
              ></div>
              <hr className="pt-1 bg-white w-100" />
            </Col>
            <Col xl={12}></Col>
          </CardBody>
        </Card>
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
