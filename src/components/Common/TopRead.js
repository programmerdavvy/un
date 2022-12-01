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

const TopRead = props => {
  return (
    <>
      <Row>
        <Col lg={6}>
          <Card>
            <Row className="g-0 align-items-center">
              <Col md={4}>
                <CardImg
                  className="img-fluid"
                  src=''
                  alt="Card image cap"
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
              <Col md={8}>
                <CardBody>
                  <CardTitle className="h5">Card title</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.bbbbb
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </CardText>
                </CardBody>
              </Col>
              <Col md={4}>
                <CardImg
                  className="img-fluid"
                  src=''
                  alt="Card image cap"
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={12} className="m-3">
          <Card>
            <CardBody>
              <Row>
                <Col xl={6}>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </CardText>
                </Col>
                <Col xl={6}>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </CardText>
                </Col>
              </Row>

              <Col xl={12}>
                <hr className="pt-1 " />
              </Col>

              <Row>
                <Col xl={6}>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </CardText>
                </Col>
                <Col xl={6}>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </CardText>
                </Col>
              </Row>

              <Col xl={12}>
                <hr className="pt-1 " />
              </Col>

              <Row>
                <Col xl={6}>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </CardText>
                </Col>
                <Col xl={6}>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </CardText>
                </Col>
              </Row>
              <Col xl={12}>
                <hr className="pt-1 " />
              </Col>

              <Row>
                <Col xl={6}>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </CardText>
                </Col>
                <Col xl={6}>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </CardText>
                </Col>
              </Row>
              <Col xl={12}>
                <hr className="pt-1 " />
              </Col>

              <Row>
                <Col xl={6}>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </CardText>
                </Col>
                <Col xl={6}>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </CardText>
                </Col>
              </Row>
            </CardBody>
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
