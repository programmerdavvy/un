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

const Tags = props => {
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
      <div className="mt-3">
        <Input
          type="textarea"
          id="textarea"
          maxLength="225"
          rows="3"
          placeholder="Write comments here"
        />
      </div>
      <div className="d-flex p-2 justify-content-center">
          <Link
            to="#"
            className="btn btn-outline-success waves-effect waves-light w-25 text-dark font-weight-bold"
          >
            Post Comment
          </Link>
        </div>
    </div>
  )
}

Tags.propTypes = {
  title: PropTypes.string,
}

export default Tags
