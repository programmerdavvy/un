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
} from "reactstrap"
import newImage1 from "../../assets/images/un/footprint1.png"
import newImage2 from "../../assets/images/un/footprint2.png"

const FootPrints = props => {
  return (
    <Row>
      <Col xl={12} className="m-3">
        <Row className="g-0 align-items-center">
          <Col md={4}>
            <CardImg
              className="img-fluid"
              src={newImage1}
              alt="Card image cap"
            />
          </Col>
          <Col md={8}>
            <CardBody>
              <CardTitle className="h5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                est mi, auctor eget
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                est mi, auctor eget vestibulum eget, rutrum et justo. Vivamus
                euismod bibendum ipsum ac scelerisque. Phasellus tellus nisi,
                ullamcorper vitae massa vel, malesuada fringilla neque.
              </CardText>
            </CardBody>
          </Col>
        </Row>
      </Col>
      <Col xl={12} className="m-3">
        <Row className="g-0 align-items-center">
          <Col md={4}>
            <CardImg
              className="img-fluid"
              src={newImage2}
              alt="Card image cap"
            />
          </Col>
          <Col md={8}>
            <CardBody>
              <CardTitle className="h5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                est mi, auctor eget
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                est mi, auctor eget vestibulum eget, rutrum et justo. Vivamus
                euismod bibendum ipsum ac scelerisque. Phasellus tellus nisi,
                ullamcorper vitae massa vel, malesuada fringilla neque.
              </CardText>
            </CardBody>
          </Col>
        </Row>
      </Col>
      <Col xl={12}>
        <div className="d-flex p-2 justify-content-center">
          <Link
            to="#"
            className="btn btn-outline-success waves-effect waves-light w-50 text-dark font-weight-bold"
          >
            Read More
          </Link>
        </div>
      </Col>
    </Row>
  )
}

FootPrints.propTypes = {
  title: PropTypes.string,
}

export default FootPrints
