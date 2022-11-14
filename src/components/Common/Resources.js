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
import { Translate } from "react-auto-translate"

const Resources = props => {
  return (
    <Row>
      <Col xl={12} className="m-3">
        <Card>
          <CardBody>
            <CardText>
              <Translate>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </Translate>
            </CardText>
            <Col xl={12}>
              <hr className="pt-1 " />
            </Col>
            <CardText>
              <Translate>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </Translate>
            </CardText>
            <Col xl={12}>
              <hr className="pt-1 " />
            </Col>
            <Col xl={12}>
              <div className="d-flex p-2 justify-content-center">
                <Link
                  to="/resources"
                  className="btn btn-outline-success waves-effect waves-light w-50 text-dark font-weight-bold"
                >
                  <Translate>Read More</Translate>
                </Link>
              </div>
            </Col>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

Resources.propTypes = {
  title: PropTypes.string,
}

export default Resources
