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
import newImage1 from "../../assets/images/un/video1.png"
import newImage2 from "../../assets/images/un/video2.png"
import newImage3 from "../../assets/images/un/video3.png"
import { Translate } from "react-auto-translate"

const VideoCard = props => {
  return (
    <Row>
      <Col mg={12} xl={12}>
        <Card>
          <CardImg
            top
            className="img-fluid"
            src={newImage1}
            alt="Card image cap"
          />
          <CardBody>
            <CardText className="text-justify">
              <h4 className="text-dark font-weight-bold">
                <Translate>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam est mi, auctor eget
                </Translate>
              </h4>
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col mg={12} xl={12}>
        <Card>
          <CardImg
            top
            className="img-fluid"
            src={newImage2}
            alt="Card image cap"
          />
          <CardBody>
            <CardText className="text-justify">
              <h4 className="text-dark font-weight-bold">
                <Translate>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam est mi, auctor eget
                </Translate>
              </h4>
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col mg={12} xl={12}>
        <Card>
          <CardImg
            top
            className="img-fluid"
            src={newImage3}
            alt="Card image cap"
          />
          <CardBody>
            <CardText className="text-justify">
              <h4 className="text-dark font-weight-bold">
                <Translate>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam est mi, auctor eget
                </Translate>
              </h4>
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col xl={12}>
        <div className="d-flex p-2 justify-content-center">
          <Link
            to="#"
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
