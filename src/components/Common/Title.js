import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Row, Col } from "reactstrap"

const Title = props => {
  return (
    <Row >
      <Col xl={1} className="d-flex flex-row-reverse pt-1">
        <div
          className="p-2 mt-2"
          style={{ width: "13px", height: "18px", backgroundColor: "#65C843" }}
        ></div>
      </Col>
      <Col xl={1}>
        <h4 className="p-2">{props.title}</h4>
      </Col>
      <Col xl={10}>
        <hr className="pt-1 "  />
      </Col>
    </Row>
  )
}

Title.propTypes = {
  title: PropTypes.string,
}

export default Title
