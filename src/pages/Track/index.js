import React, { useState } from "react"
import {
  Container,
  Row,
  Col,
  CardBody,
  Card,
  CardTitle,
  CardImg,
  CardText,
  Form,
  Label,
  Input,
  Button,
  Spinner,
} from "reactstrap"
import { Link } from "react-router-dom"
import newImage1 from "../../assets/images/un/successicon.png"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import MiniWidget from "./mini-widget"
import SalesAnalyticsChart from "./salesanalytics-chart"
import TopProduct from "./topselling-product"
import TopUser from "./topuser"
import RecentActivity from "./recent-activity"
import SocialSource from "./socialsource"
import LatestTransaction from "./latest-transaction"

//Import Image
import setupanalytics from "../../assets/images/setup-analytics-amico.svg"
import ILOSlideWithControl from "../Ui/CarouselTypes/iloslidewithcontrol"
import Slidewithcontrol from "../Ui/CarouselTypes/iloslidewithcontrol"
import Title from "../../components/Common/Title"
import NewsCard from "../../components/Common/NewsCard"
import VideoCard from "../../components/Common/VideoCard"
import EventsCard from "../../components/Common/EventsCard"
import FootPrints from "../../components/Common/FootPrints"
import Resources from "../../components/Common/Resources"
import GoodPractices from "../../components/Common/GoodPractices"
import Podcast from "../../components/Common/Podcast"
import Statistics from "../../components/Common/Statistics"
import Dropzone from "react-dropzone"
import { Translator, Translate } from "react-auto-translate"
import axios from "axios"

const Dashboard = () => {
  const [selectedFiles, setselectedFiles] = useState([])
  const [complaintId, setComplaintId] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [loading, setLoading] = useState(false)
  const [trackComplain, setTrackComplain] = useState(null)
  const [displayForm, setDisplayForm] = useState(true)
  const [displayResult, setDisplayResult] = useState(false)

  const handleTrackComplain = async () => {
    const payLoad = {
      phone: phoneNumber,
      referenceId: complaintId,
    }
    try {
      setLoading(true)
      const response = await axios.post(
        "https://unirp.herokuapp.com/incident/get-incident",
        payLoad
      )
      console.log("api ans", response)
      setLoading(false)
      if (response?.data?.success) {
        setTrackComplain(response?.data?.result)
      }
    } catch (error) {
      console.log("track incident report error", error)
      setLoading(false)
    }
  }

  const handleReset = () => {
    setComplaintId("")
    setPhoneNumber("")
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Minible" breadcrumbItem="Home" />
          <Row>
            <Col xl={12}>
              <Slidewithcontrol />
            </Col>
          </Row>

          <Row>
            <Col xl={12}>
              <div className="d-flex p-2 justify-content-center">
                <Col lg={6}>
                  <CardBody>
                    <CardTitle className="mb-4 d-flex p-2 justify-content-center">
                      <Translate>Track status of your complain here</Translate>
                    </CardTitle>
                    <div className="mb-3">
                      <Label htmlFor="formrow-firstname-Input">
                        <Translate>Complaint ID</Translate>
                      </Label>
                      <Input
                        type="text"
                        className="form-control btn-outline-dark"
                        id="formrow-firstname-Input"
                        value={complaintId}
                        onChange={e => setComplaintId(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <Label htmlFor="formrow-firstname-Input">
                        <Translate>Registered Phone Number</Translate>
                      </Label>
                      <Input
                        type="text"
                        className="form-control btn-outline-dark"
                        value={phoneNumber}
                        id="formrow-firstname-Input"
                        onChange={e => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <Col xl={12}>
                      <Row>
                        <Col xl={6}>
                          <div className="d-flex p-2 justify-content-center">
                            <button
                              className="btn btn-outline-success waves-effect waves-light w-75 text-dark font-weight-bold"
                              onClick={handleTrackComplain}
                            >
                              {loading ? (
                                <Spinner
                                  type="grow"
                                  size="sm"
                                  color="success"
                                />
                              ) : (
                                <Translate>Submit</Translate>
                              )}
                            </button>
                          </div>
                        </Col>
                        <Col xl={6}>
                          <div className="d-flex p-2 justify-content-center">
                            <button
                              className="btn btn-outline-success waves-effect waves-light w-75 text-dark font-weight-bold"
                              onClick={handleReset}
                            >
                              <Translate>Reset</Translate>
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </CardBody>
                </Col>
              </div>
            </Col>
            <div>{JSON.stringify(trackComplain, null, 4)}</div>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
