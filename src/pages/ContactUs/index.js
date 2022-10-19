import React from "react"
import {
  Container,
  Row,
  Col,
  CardBody,
  Card,
  CardTitle,
  CardImg,
  CardText,
} from "reactstrap"
import { Link } from "react-router-dom"
import newImage1 from "../../assets/images/un/children.png"

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
            <Title title="Contact Us" />
            <div>
              <h1>General Information</h1>
              <p>
                Address: 4 route des Morillons, CH-1211, Genève 22, Switzerland
              </p>
              <p>
                E-mail: ilo@ilo.org , Switchboard: +41 (0) 22 799 6111 , Fax:
                +41 (0) 22 798 8685{" "}
              </p>
            </div>
            <Col xl={3}>
              <CardBody>
                <CardTitle>Public Information</CardTitle>
                <CardText>
                  ILO Library Tel: +41 22 799 8682 Fax: +41 22 799 6516 Website:
                  www.ilo.org/library Email:library@ilo.org
                </CardText>
              </CardBody>
            </Col>
            <Col xl={3}>
              <CardBody>
                <CardTitle>Media Enquiries</CardTitle>
                <CardText>
                  DCOMM Tel: +41 22 799 7912 Fax: +41 22 799 8577 Website:
                  ilo.org/newsroom Email:newsroom@ilo.org
                </CardText>
              </CardBody>
            </Col>
            <Col xl={3}>
              <CardBody>
                <CardTitle>Partnerships and Field Support</CardTitle>
                <CardText>
                  Partnerships and Development Cooperation Department Tel: +41
                  22 799 7239 Fax: +41 22 799 6872 Website: www.ilo.org/pardev
                  Email: PARDEV@ilo.org
                </CardText>
              </CardBody>
            </Col>
            <Col xl={3}>
              <CardBody>
                <CardTitle>
                  Helpdesk for Business on International standards
                </CardTitle>
                <CardText>
                  Tel: +41 22 799 6264 Fax: +41 22 799 6354 Website:
                  www.ilo.org/business Email: assistance@ilo.org
                </CardText>
              </CardBody>
            </Col>
            <Col xl={3}>
              <CardBody>
                <CardTitle>Bureau for Workers' Activities</CardTitle>
                <CardText>
                  Tel: +41 22 799 70 21 Fax: +41 22 799 65 70 Website:
                  www.ilo.org/actrav Email: actrav@ilo.org
                </CardText>
              </CardBody>
            </Col>
            <Col xl={3}>
              <CardBody>
                <CardTitle>Bureau for Employers' Activities</CardTitle>
                <CardText>
                  Tel: +41 22 799 77 48 Fax: +41 22 799 89 48 Website:
                  www.ilo.org/actemp Email: actemp@ilo.org
                </CardText>
              </CardBody>
            </Col>
            <Col xl={3}>
              <CardBody>
                <CardTitle>ILO Procurement</CardTitle>
                <CardText>
                  Tel: +41 22 799 7879 Fax: +41 22 799 8529 Website:
                  www.ilo.org/procurement Email: pcrt@ilo.org
                </CardText>
              </CardBody>
            </Col>
            <Col xl={3}>
              <CardBody>
                <CardTitle>
                  International Labour Organization Administrative Tribunal
                </CardTitle>
                <CardText>
                  Tel: +41 22 799 87 26 Fax: +41 22 799 87 37 Website:
                  www.ilo.org/tribunal Email: trib@ilo.org
                </CardText>
              </CardBody>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
