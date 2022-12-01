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
import newImage1 from "../../assets/images/un/children.png"

const GoodPractices = props => {
  return (
    <Row>
      <Col mg={6} xl={6}>
        <Card>
          <CardImg
            top
            className="img-fluid"
            src={newImage1}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle className="h4 mt-0">Quality Education</CardTitle>
            <CardText>
              By 2030, eliminate gender disparities in education and ensure
              equal access to all levels of education and vocational training
              for the vulnerable, including persons with disabilities,
              indigenous peoples and children in vulnerable situations
            </CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col mg={6} xl={6}>
        <Card>
          <CardImg
            top
            className="img-fluid"
            src={newImage1}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle className="h4 mt-0">No Poverty</CardTitle>
            <CardText>
              By 2030, ensure that all men and women, in particular the poor and
              the vulnerable, have equal rights to economic resources, as well
              as access to basic services, ownership and control over land and
              other forms of property
            </CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

GoodPractices.propTypes = {
  title: PropTypes.string,
}

export default GoodPractices
