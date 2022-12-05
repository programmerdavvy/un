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
import newImage1 from "../../assets/images/un/event1.png"
import newImage2 from "../../assets/images/un/event2.png"
import newImage3 from "../../assets/images/un/event3.png"
import { Translate } from "react-auto-translate"
import axios from "axios"
import moment from "moment"

const EventsCard = props => {
  const [event, setEvent] = useState()
  useEffect(() => {
    try {
      const fetchAllEvent = async () => {
        const response = await axios.get(
          "https://unirp.herokuapp.com/sections/?pageId=2&language=&events=&commentPage=&commentLimit=20"
        )
        setEvent(response?.data?.result.slice(0, 3))
      }
      fetchAllEvent()
    } catch (error) {
      console.log("Fetch All Event Error", error)
    }
  }, [])

  console.log("hello", event)
  return (
    <Row>
      {event?.map((event, i) => (
        <Col mg={12} xl={12}>
          <div>
            <CardImg
              top
              className="img-fluid"
              src={event?.media[0]?.link}
              alt="Card image cap"
            />
            <CardBody>
              <CardText className="text-justify  text-white  d-flex align-items-end">
                <Translate>
                  <h4>{event.title}</h4>
                </Translate>
              </CardText>
              <p>Event Date: {moment(event.startDate).format("DD-MM-YYYY")}</p>
              <CardText className="text-justify  text-dark h-50 d-flex align-items-end">
                <Translate>{event.content.slice(0, 100)}....</Translate>
              </CardText>
            </CardBody>
            <div className="d-flex p-2 justify-content-start">
              <Link
                to={`/event/${event?.id}/${event?.title.split(" ").join("-")}`}
                className="btn btn-outline-success waves-effect waves-light w-50 text-dark"
              >
                <Translate>Read More</Translate>
              </Link>
            </div>
          </div>
        </Col>
      ))}

      <Col xl={12}>
        <div className="d-flex p-2 justify-content-center">
          <Link
            to="/event"
            className="btn btn-outline-success waves-effect waves-light w-25 text-dark font-weight-bold"
          >
            <Translate>View More</Translate>
          </Link>
        </div>
      </Col>
    </Row>
  )
}

EventsCard.propTypes = {
  title: PropTypes.string,
}

export default EventsCard
