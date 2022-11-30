import React, { useEffect, useState } from "react"
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
import newImage1 from "../../assets/images/un/news1.png"
import newImage2 from "../../assets/images/un/news2.png"
import newImage3 from "../../assets/images/un/news3.png"
import { Translate } from "react-auto-translate"
import axios from "axios"

const NewsCard = props => {
  const [news, setNews] = useState()
  useEffect(() => {
    try {
      const fetchAllNews = async () => {
        const response = await axios.get(
          "https://unirp.herokuapp.com/sections/?pageId=1&language=&events=&commentPage=1&commentLimit=20"
        )
        setNews(response?.data?.result.slice(0, 3))
      }
      fetchAllNews()
    } catch (error) {
      console.log("Fetch All News Error", error)
    }
  }, [])
  return (
    <Row>
      {news?.map((news, i) => (
        <Col mg={4} xl={4} key={i} >
          <Card className="h-100 d-inline-block">
            <CardImg
              top
              className="img-fluid"
              src={news?.media[0].link}
              alt="Card image cap"
            />
            <CardBody>
              <CardText className="text-justify card-img-overlay text-white mt-5 h-50 d-flex align-items-end"></CardText>
              <CardText className="text-justify">
                <h5>
                <Translate>
                  {news.title}
                </Translate>
                </h5>
                <Translate>
                {news.content.slice(0, 200)}...
                </Translate>
              </CardText>
              <div className="d-flex p-2 justify-content-start">
                <Link 
                to={`/news/${news?.id}/${news?.title.split(" ").join("-")}`} 
                className="btn waves-effect waves-light btn-outline-success">
                  <Translate>Continue Reading</Translate>
                </Link>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
      <Col xl={12}>
        <div className="d-flex p-2 justify-content-center">
          <Link
            to="/news"
            className="btn btn-outline-success waves-effect waves-light w-25 text-dark font-weight-bold"
          >
            Read More
          </Link>
        </div>
      </Col>
    </Row>
  )
}

NewsCard.propTypes = {
  title: PropTypes.string,
}

export default NewsCard
