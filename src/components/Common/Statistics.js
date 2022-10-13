import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap"
import newImage1 from '../../assets/images/un/barchart.png'
import newImage2 from '../../assets/images/un/piechart.png'

const Statistics = props => {
  return (
    <Row>
            <Col mg={6} xl={6}>
              <Card>
                <CardImg top className="img-fluid" src={newImage1} alt="Card image cap" />
              </Card>
            </Col>
            <Col mg={6} xl={6}>
              <Card>
                <CardImg top className="img-fluid" src={newImage2} alt="Card image cap" />
              </Card>
            </Col>
    </Row>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
}

export default Statistics
