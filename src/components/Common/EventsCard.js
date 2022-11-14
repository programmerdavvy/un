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
import newImage1 from "../../assets/images/un/event1.png"
import newImage2 from "../../assets/images/un/event2.png"
import newImage3 from "../../assets/images/un/event3.png"
import { Translate } from "react-auto-translate"

const EventsCard = props => {
  return (
    <Row>
      <Col mg={12} xl={12}>
        <div>
          <CardImg
            top
            className="img-fluid"
            src={newImage1}
            alt="Card image cap"
          />
          <CardBody>
            <CardText className="text-justify card-img-overlay text-white mt-5 h-50 d-flex align-items-end">
              <Translate>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                est mi, auctor eget
              </Translate>
            </CardText>
          </CardBody>
        </div>
      </Col>
      <Col mg={12} xl={12}>
        <div>
          <CardImg
            top
            className="img-fluid"
            src={newImage2}
            alt="Card image cap"
          />
          <CardBody>
            <CardText className="text-justify card-img-overlay text-white mt-5 h-50 d-flex align-items-end">
              <Translate>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                est mi, auctor eget
              </Translate>
            </CardText>
          </CardBody>
        </div>
      </Col>
      <Col mg={12} xl={12}>
        <div>
          <CardImg
            top
            className="img-fluid"
            src={newImage3}
            alt="Card image cap"
          />
          <CardBody>
            <CardText className="text-justify card-img-overlay text-white mt-5 h-50 d-flex align-items-end">
              <Translate>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                est mi, auctor eget
              </Translate>
            </CardText>
          </CardBody>
        </div>
      </Col>
      <Col xl={12}>
        <div className="d-flex p-2 justify-content-center">
          <Link
            to="/footprints"
            className="btn btn-outline-success waves-effect waves-light w-25 text-dark font-weight-bold"
          >
            <Translate>View More</Translate>
          </Link>
        </div>
      </Col>
    </Row>
  )
}

EventsCard.propTypes = {
  title: PropTypes.string,
}

export default EventsCard
