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

const series1 = [
  {
    data: [25, 66, 41, 89, 63, 25, 44, 20, 36, 40, 54],
  },
]

const options1 = {
  fill: {
    colors: ["#5b73e8"],
  },
  chart: {
    width: 70,
    sparkline: {
      enabled: !0,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: !1,
    },
    x: {
      show: !1,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ""
        },
      },
    },
    marker: {
      show: !1,
    },
  },
}

const series2 = [70]

const options2 = {
  fill: {
    colors: ["#34c38f"],
  },
  chart: {
    sparkline: {
      enabled: !0,
    },
  },
  dataLabels: {
    enabled: !1,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "60%",
      },
      track: {
        margin: 0,
      },
      dataLabels: {
        show: !1,
      },
    },
  },
}

const series3 = [55]

const options3 = {
  fill: {
    colors: ["#5b73e8"],
  },
  chart: {
    sparkline: {
      enabled: !0,
    },
  },
  dataLabels: {
    enabled: !1,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "60%",
      },
      track: {
        margin: 0,
      },
      dataLabels: {
        show: !1,
      },
    },
  },
}

const series4 = [
  {
    data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
  },
]

const options4 = {
  fill: {
    colors: ["#f1b44c"],
  },
  chart: {
    width: 70,
    sparkline: {
      enabled: !0,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: !1,
    },
    x: {
      show: !1,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ""
        },
      },
    },
    marker: {
      show: !1,
    },
  },
}

const Dashboard = () => {
  const [selectedFiles, setselectedFiles] = useState([])
  const [displayForm, setDisplayForm] = useState(true)
  const [displaySuccessIcon, setDisplaySuccessIcon] = useState(false)

  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    setselectedFiles(files)
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  const reports = [
    {
      id: 1,
      icon: "mdi mdi-arrow-up-bold",
      title: "Total Revenue",
      value: 34152,
      prefix: "$",
      suffix: "",
      badgeValue: "2.65%",
      decimal: 0,
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "success",
      desc: "since last week",
      series: series1,
      options: options1,
    },
    {
      id: 2,
      icon: "mdi mdi-arrow-down-bold",
      title: "Orders",
      value: 5643,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      prefix: "",
      suffix: "",
      badgeValue: "0.82%",
      color: "danger",
      desc: "since last week",
      series: series2,
      options: options2,
    },
    {
      id: 3,
      icon: "mdi mdi-arrow-down-bold",
      title: "Customers",
      value: 45254,
      decimal: 0,
      prefix: "",
      suffix: "",
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      badgeValue: "6.24%",
      color: "danger",
      desc: "since last week",
      series: series3,
      options: options3,
    },
    {
      id: 4,
      icon: "mdi mdi-arrow-up-bold",
      title: "Growth",
      value: 12.58,
      decimal: 2,
      prefix: "+",
      suffix: "%",
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      badgeValue: "10.51%",
      color: "success",
      desc: "since last week",
      series: series4,
      options: options4,
    },
  ]

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
            {displayForm && (
              <Col xl={12}>
              <div className="d-flex p-2 justify-content-center">
                <Col lg={6}>
                  <CardBody>
                    <CardTitle className="mb-4 d-flex p-2 justify-content-center">
                      *Use the form below to report a Child Abuse Incident
                    </CardTitle>
                    <CardTitle className="mb-4 font-weight-bold">
                      Child Labour/Adolescent Details
                    </CardTitle>
                    <div className="mb-3">
                      <Label htmlFor="formrow-firstname-Input">
                        Name of the Child
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="formrow-firstname-Input"
                      />
                    </div>

                    <div className="col-sm-auto mb-3">
                      <label
                        className="visually-hidden"
                        htmlFor="autoSizingSelect"
                      >
                        Category
                      </label>
                      <select className="form-select" id="autoSizingSelect">
                        <option selected>Select Category</option>
                        <option value="Labour Exploitation">
                          Labour Exploitation
                        </option>
                        <option value="Sexual Exploitation">
                          Sexual Exploitation
                        </option>
                        <option value="Child Trafficking">
                          Child Trafficking
                        </option>
                        <option value="Domestic Servitude">
                          Domestic Servitude
                        </option>
                        <option value="Forced Criminality">
                          Forced Criminality
                        </option>
                        <option value="Forced Marriage">Forced Marriage</option>
                        <option value="Other">Other</option>
                        <option value="Unknown">Unknown</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <Label>Incident Description</Label>
                      <Input
                        type="textarea"
                        id="textarea"
                        // onChange={e => {
                        //   textareachange(e)
                        // }}
                        maxLength="225"
                        rows="3"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <Dropzone
                        onDrop={acceptedFiles => {
                          handleAcceptedFiles(acceptedFiles)
                        }}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div className="dropzone">
                            <div
                              className="dz-message needsclick"
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />
                              <div className="d-flex p-2 justify-content-center">
                                <i className="fas fa-paperclip"></i>
                                <h4>Attach media file</h4>
                              </div>
                            </div>
                          </div>
                        )}
                      </Dropzone>
                      <div
                        className="dropzone-previews mt-3"
                        id="file-previews"
                      >
                        {selectedFiles.map((f, i) => {
                          return (
                            <Card
                              className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                              key={i + "-file"}
                            >
                              <div className="p-2">
                                <Row className="align-items-center">
                                  <Col className="col-auto">
                                    <img
                                      data-dz-thumbnail=""
                                      height="80"
                                      className="avatar-sm rounded bg-light"
                                      alt={f.name}
                                      src={f.preview}
                                    />
                                  </Col>
                                  <Col>
                                    <Link
                                      to="#"
                                      className="text-muted font-weight-bold"
                                    >
                                      {f.name}
                                    </Link>
                                    <p className="mb-0">
                                      <strong>{f.formattedSize}</strong>
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            </Card>
                          )
                        })}
                      </div>
                    </div>

                    <CardTitle className="mb-4 font-weight-bold">
                      Address where child if found
                    </CardTitle>
                    <div className="mb-3">
                      <Label htmlFor="formrow-firstname-Input">
                        House Number
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="formrow-firstname-Input"
                      />
                    </div>
                    <div className="mb-3">
                      <Label htmlFor="formrow-firstname-Input">Landmark</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="formrow-firstname-Input"
                      />
                    </div>
                    <div className="mb-3">
                      <Label htmlFor="formrow-firstname-Input">City</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="formrow-firstname-Input"
                      />
                    </div>
                    <div className="mb-3">
                      <Label htmlFor="formrow-firstname-Input">State</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="formrow-firstname-Input"
                      />
                    </div>
                    <div className="mb-3">
                      <Label htmlFor="formrow-firstname-Input">
                        Local Government Area
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="formrow-firstname-Input"
                      />
                    </div>

                    <CardTitle className="mb-4 font-weight-bold">
                      Reports's Details
                    </CardTitle>
                    <div className="mb-3">
                      <Label htmlFor="formrow-firstname-Input">Name</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="formrow-firstname-Input"
                      />
                    </div>
                    <div className="mb-3">
                      <Label htmlFor="formrow-firstname-Input">
                        Phone Number
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="formrow-firstname-Input"
                      />
                    </div>
                    <div className="mb-3">
                      <Label htmlFor="formrow-firstname-Input">Email</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="formrow-firstname-Input"
                      />
                    </div>
                    <Col xl={12}>
                      <div className="d-flex p-2 justify-content-center">
                        <button className="btn btn-outline-success waves-effect waves-light w-25 text-dark font-weight-bold">
                          Submit
                        </button>
                      </div>
                    </Col>
                  </CardBody>
                </Col>
              </div>
            </Col>
            )}
            
            {displaySuccessIcon && (
              <Col xl={12}>
              <div className="d-flex p-2 justify-content-center">
                <Col lg={6}>
                  <Col xl={12}>
                    <CardImg
                      top
                      className="img-fluid"
                      src={newImage1}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <div className="d-flex p-2 justify-content-center">
                        <h6 className="text-dark font-weight-bold">
                          Thank you for reporting this incident. Your complaint
                          ID is 000-000-00000
                        </h6>
                      </div>
                      <div className="d-flex justify-content-center">
                        <h6 className="text-dark font-weight-bold">
                        We will take the necessary actions immediately
                        </h6>
                      </div>
                    </CardBody>
                  </Col>
                </Col>
              </div>
            </Col>
            )}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
