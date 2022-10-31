import React, { useCallback, useEffect, useState } from "react";
import { Container, Row, Col, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";
import ReactApexChart from "react-apexcharts"


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
//Import Image
import setupanalytics from "../../assets/images/setup-analytics-amico.svg";
import Statistics from "./Statistics";
import CaseAnalysis from "./CaseAnalysis";
import Analysis from "./Analysis";
import AwaitingApproval from "./Post/awaitingapproval";
import TopUsers from './topuser';
import PostTable from './latest-transaction';
import { request } from "../../services/utilities";

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
  const [mobileCount, setMobileCount] = useState(0);
  const [individualCount, setIndividualCount] = useState(0);
  const [organizationCount, setOrganizationCount] = useState(0);

  const [totalSubmission, setTotalSubmission] = useState(0);


  const fetchMobileCount = useCallback(async () => {
    try {
      const url = `incident/get/count/?action=mobile`;
      const url_individual_sub = `incident/all/specific/?action=individual`;
      const url_organization_sub = `incident/all/specific/?action=individual`;

      const rs = await request(url, 'GET', false);
      const rs_individual = await request(url_individual_sub, 'GET', false);
      const rs_organization = await request(url_organization_sub, 'GET', false);
      setOrganizationCount(rs_organization.paging.total);
      setIndividualCount(rs_individual.paging.total);
      const total = rs_individual.paging.total + rs_organization.paging.total;
      setTotalSubmission(total);
      setMobileCount(rs.result.totalCount);
    } catch (err) {
      console.log(err);
    }
  }, []);

  // const fetchSubmission = useCallback(async (page) => {
  //   const p = page || 1;
  //   try {
  //     let url = `incident/all/specific/?action=individual`;
  //     const rs = await request(url, 'GET', false);
  //     // let dataArray = rs.result.sort(x => x.userId !== null);
  //     setIndividualSubmission(rs.result);
  //     setCount(Math.ceil(rs.paging?.total / rowsPerPage));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [rowsPerPage]);

  useEffect(() => {
    fetchMobileCount()
  }, [fetchMobileCount])
  const reports = [
    {
      id: 1,
      icon: "uil-signal-alt-3",
      title: "Total Submissions",
      rate: totalSubmission,
      value: totalSubmission,
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
      rate: individualCount,
      value: individualCount,
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
      rate: organizationCount,
      value: organizationCount,
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
      rate: mobileCount,
      value: mobileCount,
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
  const series = [1, 1]

  const options = {
    labels: ["Closed", "Open"],
    colors: ["#228e68", "#5b73e8", "#f95000"],
    legend: {
      show: !0,
      position: 'right',
      horizontalAlign: 'center',
      verticalAlign: 'middle',
      floating: !1,
      fontSize: '14px',
      offsetX: 0
    },
    responsive: [{
      breakpoint: 600,
      options: {
        chart: {
          height: 240
        },
        legend: {
          show: !1
        },
      }
    }]
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* <Breadcrumbs title="Minible" breadcrumbItem="Dashboard" /> */}


          <Row>
            <Col xl={12}>
              <Row>
                <Col>
                  <Row>
                    <Statistics reports={reports} />
                    <Col xl={3}>
                      <Card
                      // style={{ height: '220px' }}
                      >
                        <CardBody className='p-2'>
                          <h4 className="card-title mb-2 text-center">Current Position Of Case </h4>
                          {/* <p className='text-center fs-4'></p> */}
                          <ReactApexChart
                            options={options}
                            series={series}
                            type="donut"
                            height="180"
                            className="apex-charts"
                          />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col>
                      <PostTable />
                    </Col>
                    <Col xl={3}>
                      <TopUsers />
                    </Col>
                  </Row>
                </Col>
                <Col xl={3} className="d-none">
                  <Card >
                    <CardBody>
                      <h2 style={{ fontWeight: '700' }}> Recent Updates Case Analytics by State</h2>
                    </CardBody>
                  </Card>

                </Col>
              </Row>

              {/* <Row>
                <AwaitingApproval />
              </Row> */}
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