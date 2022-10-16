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
  )
}

TopRead.propTypes = {
  title: PropTypes.string,
}

export default TopRead
