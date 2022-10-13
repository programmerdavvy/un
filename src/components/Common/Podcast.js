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

const Podcast = props => {
  return (
    <Row>
      <Col xl={12} className="m-3">
        <Card className="bg-success">
          <CardBody>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </CardText>
            <Col xl={12} className='d-flex flex-row justify-content-center'>
              <div style={{width:'0px', height:'0px', borderTop:'10px solid transparent', borderBottom:'10px solid transparent', borderLeft:'10px solid white', margin:'8px'}}></div><hr className="pt-1 bg-white w-100" />
            </Col>
            <Col xl={12}>
        
      </Col>
          </CardBody>
          
        </Card>
        <div className="d-flex p-2 justify-content-center">
          <Link
            to="#"
            className="btn btn-outline-success waves-effect waves-light w-50 text-dark font-weight-bold"
          >
            View More
          </Link>
        </div>
      </Col>
    </Row>
  )
}

Podcast.propTypes = {
  title: PropTypes.string,
}

export default Podcast
