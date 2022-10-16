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

const Socials = props => {
  return (
    <div className="d-flex p-2 justify-content-center">
         
            <i className="fas fa-link m-2"></i> 
            <i className="fab fa-whatsapp-square m-2"></i> 
            <i className="fab fa-facebook-square m-2"></i> 
            <i className="fab fa-twitter-square m-2"></i> 
        
        </div>
  )
}

Socials.propTypes = {
  title: PropTypes.string,
}

export default Socials
