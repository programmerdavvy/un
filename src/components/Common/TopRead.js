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
import newImage1 from "../../assets/images/un/children.png"

const TopRead = props => {
  return (
    <>
      <Row>
        <Col lg={6}>
          <Card>
            <Row className="g-0 align-items-center">
              <Col md={4} className="d-flex justify-content-center">
                <img
                  src={newImage1}
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                  }}
                />
              </Col>
              <Col md={8}>
                <CardBody>
                  <CardTitle className="h5">Card title</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.ssssss
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Row className="g-0 align-items-center">
              <Col md={4} className="d-flex justify-content-center">
                <img
                  src={newImage1}
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                  }}
                />
              </Col>
              <Col md={8}>
                <CardBody>
                  <CardTitle className="h5">Card title</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.ssssss
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Row className="g-0 align-items-center">
              <Col md={4} className="d-flex justify-content-center">
                <img
                  src={newImage1}
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                  }}
                />
              </Col>
              <Col md={8}>
                <CardBody>
                  <CardTitle className="h5">Card title</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.ssssss
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Row className="g-0 align-items-center">
              <Col md={4} className="d-flex justify-content-center">
                <img
                  src={newImage1}
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                  }}
                />
              </Col>
              <Col md={8}>
                <CardBody>
                  <CardTitle className="h5">Card title</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.ssssss
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  )
}

TopRead.propTypes = {
  title: PropTypes.string,
}

export default TopRead
