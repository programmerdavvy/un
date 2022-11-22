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
  CardHeader,
  Modal,
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
  const [otp, setOTP] = useState("")
  const [loading, setLoading] = useState(false)
  const [trackComplain, setTrackComplain] = useState(null)
  const [displayForm, setDisplayForm] = useState(true)
  const [displayResult, setDisplayResult] = useState(false)
  const [displayModal, setDisplayModal] = useState(false)
  const [modal_center, setmodal_center] = useState(false)

  function tog_center() {
    setmodal_center(!modal_center)
    removeBodyCss()
  }

  function removeBodyCss() {
    document.body.classList.add("no_padding")
  }

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
      setLoading(false)
      console.log("Length", response)
      if (response?.data?.message && phoneNumber.length == 11) {
        tog_center()
      }
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

  const handleConfirmOTP = async () => {
    const payLoad = {
      phone: phoneNumber,
      code: otp,
    }
    try {
      setLoading(true)
      const response = await axios.post(
        "https://unirp.herokuapp.com/incident/verify-otp",
        payLoad
      )
      setLoading(false)
      if (response?.data?.success) {
        setTrackComplain(response?.data?.result)
        setmodal_center(false)
      }
    } catch (error) {
      console.log("Send OTP Error", error)
    }
  }

  console.log("Doctor", trackComplain)

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
                                  color="primary"
                                  style={{ height: "20px", width: "20px" }}
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
                    <Col lg={6}>
                      <Modal
                        isOpen={modal_center}
                        toggle={() => {
                          tog_center()
                        }}
                        centered={true}
                      >
                        <div className="modal-header">
                          <h5 className="modal-title mt-0">
                            Confirm your Phone Number
                          </h5>
                          <button
                            type="button"
                            onClick={() => {
                              setmodal_center(false)
                            }}
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="mb-3">
                            <label
                              htmlFor="recipient-name"
                              className="col-form-label"
                            >
                              Enter OTP:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="recipient-name"
                              onChange={e => setOTP(e.target.value)}
                            />
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={handleConfirmOTP}
                            >
                              {loading ? (
                                <Spinner
                                  color="primary"
                                  style={{ height: "20px", width: "20px" }}
                                />
                              ) : (
                                <Translate>Confirm</Translate>
                              )}
                            </button>
                          </div>
                        </div>
                      </Modal>
                    </Col>
                    <Col xl={12}>
                      <Row>
                        <Col xl={12}>
                          <div className="d-flex p-2 justify-content-center">
                            <Col lg={12}>
                              <Card>
                                <CardHeader>
                                  Reference ID: {trackComplain?.referenceId}
                                </CardHeader>
                                <CardBody>
                                  <blockquote className="card-blockquote mb-0">
                                    <CardText>
                                      <span>Child Name : </span>
                                      <span className="fw-bold">
                                        {trackComplain?.childname}
                                      </span>
                                      <br />
                                      <span>Category : </span>
                                      <span className="fw-bold">
                                        {trackComplain?.category}
                                      </span>
                                      <br />
                                      <span>Description : </span>
                                      <span className="fw-bold">
                                        {trackComplain?.description}
                                      </span>
                                      <br />
                                      <span>
                                        Comments :{" "}
                                        {trackComplain?.comments?.map(
                                          (comment, i) => (
                                            <div>
                                              {i + 1}. {"  "}
                                              <span className="fw-bold">
                                                {comment.comment}
                                              </span>
                                              <br />
                                            </div>
                                          )
                                        )}
                                      </span>
                                    </CardText>
                                    <footer className="blockquote-footer mt-3 font-size-12">
                                      {" "}
                                      Status :
                                      <cite title="Source Title">
                                        {" "}
                                        {trackComplain?.status}
                                      </cite>
                                    </footer>
                                  </blockquote>
                                </CardBody>
                              </Card>
                            </Col>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </CardBody>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
