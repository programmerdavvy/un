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
import newImage1 from "../../assets/images/un/footprint1.png"
import newImage2 from "../../assets/images/un/footprint2.png"
import moment from "moment"
import { Translate } from "react-auto-translate"


const SeeAlso = props => {
  const { news } = props
  console.log("sabi", news)
  return (
    <Row>
      {news?.map((news, index) => (
        <Col xl={12} className="m-3">
          <Row className="g-0 align-items-center">
            <Col md={4}>
              <CardImg
                className="img-fluid"
                src={news?.media[0].link}
                alt="Card image cap"
              />
            </Col>
            <Col md={8}>
              <CardBody>
                <CardTitle className="h5">
                  <Link
                    to={`/news/${news?.id}/${news?.title.split(" ").join("-")}`}
                    className="waves-effect waves-light w-100 text-dark font-weight-bold"
                  >
                    {news.title}
                  </Link>
                </CardTitle>
                <span className="blockquote-footer mt-3 font-size-12">
                  {moment(news.createdAt).format("DD-MM-YYYY")}{" "}
                </span>
                <CardText className="">
                  {news.content.slice(0, 300)}...
                </CardText>
                <div className="d-flex p-2 justify-content-start">
                  <Link
                    to={`/news/${news?.id}/${news?.title.split(" ").join("-")}`}
                    className="btn btn-outline-success waves-effect waves-light w-25 text-dark font-weight-bold"
                  >
                    <Translate>Read More</Translate>
                  </Link>
                </div>
              </CardBody>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  )
}

SeeAlso.propTypes = {
  title: PropTypes.string,
}

export default SeeAlso
