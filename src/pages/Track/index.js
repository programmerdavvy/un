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
            
              <Col xl={12}>
              <div className="d-flex p-2 justify-content-center">
                <Col lg={6}>
                  <CardBody>
                    <CardTitle className="mb-4 d-flex p-2 justify-content-center">
                     Track status of your complain here
                    </CardTitle>
                    <div className="mb-3">
                      <Label htmlFor="formrow-firstname-Input">Complaint ID</Label>
                      <Input
                        type="text"
                        className="form-control btn-outline-dark"
                        id="formrow-firstname-Input"
                      />
                    </div>
                    <div className="mb-3">
                      <Label htmlFor="formrow-firstname-Input">
                        Registered Phone Number
                      </Label>
                      <Input
                        type="text"
                        className="form-control btn-outline-dark"
                        id="formrow-firstname-Input"
                      />
                    </div>
                    <Col xl={12}>
                      <Row>
                      <Col xl={6}>
                      <div className="d-flex p-2 justify-content-center">
                        <button className="btn btn-outline-success waves-effect waves-light w-75 text-dark font-weight-bold">
                          Submit
                        </button>
                      </div>
                      </Col>
                      <Col xl={6}>
                      <div className="d-flex p-2 justify-content-center">
                        <button className="btn btn-outline-success waves-effect waves-light w-75 text-dark font-weight-bold">
                          Reset
                        </button>
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
