import React from "react";
import { Container, Row, Col, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
//Import Image
import setupanalytics from "../../assets/images/setup-analytics-amico.svg";
import Statistics from "./Statistics";
import CaseAnalysis from "./CaseAnalysis";
import Analysis from "./Analysis";
import AwaitingApproval from "./Post/awaitingapproval";


const series2 = [10];

const options2 = {
  fill: {
    colors: ['#34c38f']
  },
  chart: {
    sparkline: {
      enabled: !0
    }
  },
  dataLabels: {
    enabled: !1
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '60%'
      },
      track: {
        margin: 0
      },
      dataLabels: {
        show: !1
      }
    }
  }
};



const Dashboard = () => {

  const reports = [
    {
      id: 1,
      icon: "uil-signal-alt-3",
      title: "Total Submissions",
      rate: 88,
      value: 5643,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 75,
      chartwidth: 75,
      prefix: "",
      suffix: "",
      badgeValue: "0.82%",
      color: "danger",
      desc: "Last 30 days",
      series: series2,
      options: options2,
    },
    {
      id: 2,
      icon: "uil-file-info-alt",
      title: "Individual Submissions",
      rate: 34,
      value: 5643,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 75,
      chartwidth: 75,
      prefix: "",
      suffix: "",
      badgeValue: "0.82%",
      color: "danger",
      desc: "Last 30 days",
      series: series2,
      options: options2,
    }, {
      id: 3,
      icon: "uil-coins",
      title: "Organization Submissions",
      rate: 54,
      value: 5643,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 75,
      chartwidth: 75,
      prefix: "",
      suffix: "",
      badgeValue: "0.82%",
      color: "danger",
      desc: "Last 30 days",
      series: series2,
      options: options2,
    },
    {
      id: 3,
      icon: "uil-phone",
      title: "Mobile submissions",
      rate: 37,
      value: 5643,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 75,
      chartwidth: 75,
      prefix: "",
      suffix: "",
      badgeValue: "0.82%",
      color: "danger",
      desc: "Last 30 days",
      series: series2,
      options: options2,
    }
  ];
  const caseAnalysis = [
    {
      icon: 'uil-file-plus-alt',
      name: 'Imo State',
      casereported: 1
    },
    {
      icon: 'uil-file-plus-alt',
      name: 'Ebonyi State',
      casereported: 0
    },
    {
      icon: 'uil-file-plus-alt',
      name: 'Anambra State',
      casereported: 2
    },
    {
      icon: 'uil-file-plus-alt',
      name: 'Abia State',
      casereported: 1
    },
    {
      icon: 'uil-file-plus-alt',
      name: 'Enugu State',
      casereported: 2
    }
  ]
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* <Breadcrumbs title="Minible" breadcrumbItem="Dashboard" /> */}


          <Row>
            <Col xl={12}>
              <Row>
                <Statistics reports={reports} />
              </Row>
              <Row>
                <AwaitingApproval />
              </Row>
              <div className="d-none">
                <Analysis />

              </div>

            </Col>
            <Col xl={3} className='d-none'>
              <Card>
                <CardBody>
                  <h2 style={{ fontWeight: '700' }}> Recent Updates Case Analytics by State</h2>
                </CardBody>
              </Card>
              <CaseAnalysis caseAnalysis={caseAnalysis} />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;