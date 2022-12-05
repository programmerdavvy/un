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
import MiniWidget from "./mini-widget";
import { useDispatch } from "react-redux";
import { updateLoader } from "../../store/actions";

const options2 = {
  fill: {
    colors: ['#5b73e8']
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
  const dispatch = useDispatch();
  const [mobileCount, setMobileCount] = useState(0);
  const [individualCount, setIndividualCount] = useState(0);
  const [organizationCount, setOrganizationCount] = useState(0);

  const [totalSubmission, setTotalSubmission] = useState(0);
  const [openincidentotal, setopenincidenttotal] = useState(0);
  const [closeincidentotal, setcloseincidenttotal] = useState(0);


  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [count, setCount] = useState(1);
  const [posts, setPosts] = useState([]);
  const [meta, setMeta] = useState(null);
  const [percentage, setPercentage] = useState([]);
  const [mobileP, setMobileP] = useState(null)

  const fetchMobileCount = useCallback(async () => {
    dispatch(updateLoader(''))
    try {
      const url = `incident/get/count/?action=mobile`;
      const url_individual_sub = `incident/all/specific/?action=individual`;
      const url_organization_sub = `incident/all/specific/?action=stakeholder`;
      const url_open = `incident/openclose/count/?action=open`
      const url_close = `incident/openclose/count/?action=close`


      const rs = await request(url, 'GET', false);
      const rs_individual = await request(url_individual_sub, 'GET', false);
      const rs_organization = await request(url_organization_sub, 'GET', false);
      const rs_open = await request(url_open, 'GET', false);
      const rs_close = await request(url_close, 'GET', false);
      if (rs_close.success === true) {
        setopenincidenttotal(rs_open.result?.totalCount);
        setcloseincidenttotal(rs_close.result?.totalCount);
        setOrganizationCount(rs_organization.paging.total);
        setIndividualCount(rs_individual.paging.total);
        const total = rs_individual.paging.total + rs_organization.paging.total;
        setTotalSubmission(total);
        setMobileCount(rs.result.totalCount);

        let mobilePercent = rs.result.totalCount * 30 / 100;
        let openIncidentCountPercent = rs_open.result?.totalCount * 30 / 100;
        let closeincidentPercent = rs_close.result?.totalCount * 30 / 100;
        let organizationPercent = rs_organization.paging.total * 30 / 100;
        let individualPercent = rs_individual.paging.total * 30 / 100;
        let totalSubmissionPercent = total * 30 / 100;
        let array = [{
          name: 'mobile count',
          value: mobilePercent
        },
        {
          name: 'open incident count',
          value: openIncidentCountPercent
        }, {
          name: 'close incident count',
          value: closeincidentPercent
        },
        {
          name: 'organization incident count',
          value: organizationPercent
        }, {
          name: 'individual incident count',
          value: individualPercent
        },
        {
          name: 'total incident count',
          value: totalSubmissionPercent
        },


        ]
        // console.log(array)
        setPercentage(array);
        dispatch(updateLoader('none'))

      }

    } catch (err) {
      dispatch(updateLoader('none'))
      console.log(err);
    }
  }, []);

  const fetchAwaitingPosts = useCallback(async page => {
    // dispatch(updateLoader(''));
    const p = page || 1;
    try {
      const url = `sections/admin?pageId=&page=${p}&limit=5`;
      const rs = await request(url, 'GET', true);
      setPosts(rs.result);
      setCount(Math.ceil(rs.paging?.total / rowsPerPage));
      setMeta(rs.paging);
      // dispatch(updateLoader('none'))
    } catch (err) {
      // dispatch(updateLoader('none'))
      console.log(err);
    }
  }, [rowsPerPage]);

  const handlePagination = page => {
    fetchAwaitingPosts(page.selected + 1);
    setCurrentPage(page.selected + 1);
  }
  useEffect(() => {
    fetchAwaitingPosts();
    fetchMobileCount();
  }, [fetchAwaitingPosts, fetchMobileCount]);


  const series2 = [percentage[5]?.value];
  const seriesInd = [percentage[4]?.value];
  const seriesOrg = [percentage[3]?.value];
  const seriesMob = [percentage[0]?.value];
  const seriesOp = [percentage[1]?.value];
  const seriesC = [percentage[2]?.value];

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
      badgeValue: `${percentage[5]?.value}%`,
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
      badgeValue: `${percentage[4]?.value}%`,
      color: "danger",
      desc: "Last 30 days",
      series: seriesInd,
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
      badgeValue: `${percentage[3]?.value}%`,
      color: "danger",
      desc: "Last 30 days",
      series: seriesOrg,
      options: options2,
    },
    {
      id: 4,
      icon: "uil-coins",
      title: "Mobile submissions",
      rate: mobileCount,
      value: mobileCount,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 75,
      chartwidth: 75,
      prefix: "",
      suffix: "",
      badgeValue: `${percentage[0]?.value}%`,
      color: "danger",
      desc: "Last 30 days",
      series: seriesMob,
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

  const openClose = [
    {
      id: 1,
      icon: "uil-coins",
      title: "Opened  Incidents",
      rate: mobileCount,
      value: openincidentotal,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 75,
      chartwidth: 75,
      prefix: "",
      suffix: "",
      badgeValue: `${percentage[1]?.value}%`,
      color: "danger",
      desc: "Last 30 days",
      series: seriesOp,
      options: options2,
    }, {
      id: 2,
      icon: "uil-coins",
      title: "Closed  Incidents",
      rate: mobileCount,
      value: closeincidentotal,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 75,
      chartwidth: 75,
      prefix: "",
      suffix: "",
      badgeValue: `${percentage[2]?.value}%`,
      color: "danger",
      desc: "Last 30 days",
      series: seriesC,
      options: options2,
    }
  ]
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xl={12}>
              <Row>
                <Col xl={12}>
                  <Row>
                    <MiniWidget reports={reports} />
                    {openClose.map(e => {
                      return (
                        <Col md={6} xl={4} key={e.id} >
                          <Card>
                            <CardBody>
                              <div className="float-end mt-2">
                                <ReactApexChart
                                  options={e.options}
                                  series={e.series}
                                  type={'radialBar'}
                                  height={75}
                                  width={75}
                                />
                              </div>
                              <div>
                                <h4 className="mb-1 mt-1"><span> {e.value}</span></h4>
                                <p className="text-muted mb-0">{e.title}</p>
                              </div>
                              <p className="text-muted mt-3 mb-0"><span className={"text-" + e.color + " me-1"}><i className={e.icon + " me-1"}></i>{e.badgeValue}</span>{" "}{e.desc}
                              </p>
                            </CardBody>
                          </Card>
                        </Col>
                      )
                    })}
                  </Row>
                  <Row className="mt-4">
                    <Col>
                      <PostTable posts={posts} currentPage={currentPage} handlePagination={handlePagination} count={count} meta={meta} />
                    </Col>
                    <Col xl={3}>
                      <TopUsers />
                    </Col>
                  </Row>
                </Col>
                {/* <Col xl={3} className="d-none">
                  <Card >
                    <CardBody>
                      <h2 style={{ fontWeight: '700' }}> Recent Updates Case Analytics by State</h2>
                    </CardBody>
                  </Card>

                </Col> */}
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