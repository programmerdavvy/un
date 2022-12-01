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
  Button,
  Input,
  Label,
} from "reactstrap"

const TagsNoComment = props => {
  return (
    <div>
      <Label>Tags:</Label>
      <div className="d-flex p-2 justify-content-start">
        <span className="me-1">Tags</span>
        <span className="me-1">Keywords</span>
      </div>
    </div>
  )
}

TagsNoComment.propTypes = {
  title: PropTypes.string,
}

export default TagsNoComment
