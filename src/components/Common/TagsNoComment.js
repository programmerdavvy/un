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
        <Button
          color="secondary"
          className="btn-soft-secondary waves-effect waves-light me-3"
        >
          Tags
        </Button>
        <Button
          color="secondary"
          className="btn-soft-secondary waves-effect waves-light"
        >
          Keywords
        </Button>
      </div>
      
    </div>
  )
}

TagsNoComment.propTypes = {
  title: PropTypes.string,
}

export default TagsNoComment
