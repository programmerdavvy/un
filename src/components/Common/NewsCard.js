import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap"
import newImage1 from '../../assets/images/un/news1.png'
import newImage2 from '../../assets/images/un/news2.png'
import newImage3 from '../../assets/images/un/news3.png'

const NewsCard = props => {
  return (
    <Row>
            <Col mg={4} xl={4}>
              <Card>
                <CardImg top className="img-fluid" src={newImage1} alt="Card image cap" />
                <CardBody>
                <CardText className="text-justify card-img-overlay text-white mt-5 h-50 d-flex align-items-end">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam est mi, auctor eget
                  </CardText>
                  <CardText className="text-justify">
                    Some quick example text to build on the card title and make
                    up the bulk of the card content.
                    Some quick example text to build on the card title and make
                    up the bulk of the card content.
                  </CardText>
                  <div className="d-flex p-2 justify-content-center">
                  <Link
                    to="#"
                    className="btn waves-effect waves-light"
                  >
                    Continue Reading
                  </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col mg={4} xl={4}>
              <Card>
                <CardImg top className="img-fluid" src={newImage2} alt="Card image cap" />
                <CardBody>
                <CardText className="text-justify card-img-overlay text-white mt-5 h-50 d-flex align-items-end">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam est mi, auctor eget
                  </CardText>
                  <CardText className="text-justify">
                    Some quick example text to build on the card title and make
                    up the bulk of the card content.
                    Some quick example text to build on the card title and make
                    up the bulk of the card content.
                  </CardText>
                  <div className="d-flex p-2 justify-content-center">
                  <Link
                    to="#"
                    className="btn waves-effect waves-light"
                  >
                    Continue Reading
                  </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col mg={4} xl={4}>
              <Card>
                <CardImg top className="img-fluid" src={newImage3} alt="Card image cap" />
                <CardBody>
                  <CardText className="text-justify card-img-overlay text-white mt-5 h-50 d-flex align-items-end">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam est mi, auctor eget
                  </CardText>
                  <CardText className="text-justify">
                    Some quick example text to build on the card title and make
                    up the bulk of the card content.
                    Some quick example text to build on the card title and make
                    up the bulk of the card content.
                  </CardText>
                  <div className="d-flex p-2 justify-content-center">
                  <Link
                    to="#"
                    className="btn waves-effect waves-light"
                  >
                    Continue Reading
                  </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={12}>
            <div className="d-flex p-2 justify-content-center">
                  <Link
                    to="#"
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
