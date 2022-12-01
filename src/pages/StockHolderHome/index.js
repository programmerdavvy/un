import React, { useCallback, useEffect, useState } from "react";
import { Container, Row, Col, CardBody, Card } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Components
//Import Image
import setupanalytics from "../../assets/images/setup-analytics-amico.svg";
import Statistics from "./Statistics";
import CaseAnalysis from "./CaseAnalysis";
import Analysis from "./Analysis";
import IncidentPost from "./IncidentPost";
import { request } from "../../services/utilities";
import MiniWidget from "./mini-widget";
import {
  updateLoader
} from "../../store/actions";

import { useDispatch } from "react-redux";
import { USER_COOKIE } from "../../services/constants";
import SSRStorage from "../../services/storage";
const storage = new SSRStorage();

const Dashboard = () => {
  const dispatch = useDispatch();
  const [incidents, setIncidents] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [count, setCount] = useState(1);
  const [totalreportedincident, setTotalreportedincident] = useState(0);
  const [totalreportedpost, setTotalreportedpost] = useState(0);
  const [totalreportedincidentbypercent, setTotalreportedincidentbypercent] = useState(0);
  const [totalreportedpostbypercent, setTotalreportedpostbypercent] = useState(0);

  const [meta, setMeta] = useState(null);

  const [rowsPerPageP, setRowsPerPageP] = useState(5)
  const [currentPageP, setCurrentPageP] = useState(1)
  const [countP, setCountP] = useState(1);
  const [metaP, setMetaP] = useState(null);
  const [posts, setPosts] = useState([]);

  const [totaldocument, setTotaldocument] = useState(0);
  const [totaldocumentbypercent, setTotaldocumentbypercent] = useState(0);


  const fetchIncident = useCallback(async page => {
    dispatch(updateLoader(''));
    const p = page || 1;
    try {
      let url = `incident/getall?page=${p}&limit=5`;
      const rs = await request(url, 'GET', false);
      if (rs.success === true) {
        setIncidents(rs.result);
        setTotalreportedincident(rs.paging?.total);
        let x = rs.paging.total / 800;
        let z = x * 100;
        setTotalreportedincidentbypercent(z.toFixed(2))
        setCount(Math.ceil(rs.paging?.total / rowsPerPage));
        setMeta(rs.paging);
        dispatch(updateLoader('none'));

      }
    } catch (err) {
      console.log(err);
      dispatch(updateLoader('none'));

    }
  }, [rowsPerPage]);

  const fetchPosts = useCallback(async (page) => {
    const user = await storage.getItem(USER_COOKIE);
    dispatch(updateLoader(''));
    let p = page || 1;
    let url = `sections/?page=${p}&limit=5&stakeholderId=${user.payload.stakeholderId}`;

    try {
      const rs = await request(url, 'GET', true);
      if (rs.success === true) {
        setPosts(rs.result);
        setCountP(Math.ceil(rs.paging?.total / rowsPerPageP));
        setMetaP(rs.paging);
        dispatch(updateLoader('none'));
      }
    } catch (err) {
      dispatch(updateLoader('none'));

      console.log(err);
      // showToast('error', 'Failed to fetch')
    }
  }, [rowsPerPageP]);

  const fetchPostsMoApprove = useCallback(async (page) => {
    dispatch(updateLoader(''));
    let p = page || 1;
    let url = `sections/admin?page=${p}&limit=5&type=approved`;

    try {
      const rs = await request(url, 'GET', false);
      if (rs.success === true) {
        // setPosts(rs.result);
        setTotalreportedpost(rs.paging?.total);
        let x = rs.paging.total / 400;
        let z = x * 100;
        setTotalreportedpostbypercent(z.toFixed(2))
        // setCountP(Math.ceil(rs.paging?.total / rowsPerPageP));
        // setMetaP(rs.paging);
        dispatch(updateLoader('none'));

      }
    } catch (err) {
      dispatch(updateLoader('none'));

      console.log(err);
      // showToast('error', 'Failed to fetch')
    }
  }, []);

  const fetchDocuments = useCallback(async (page) => {
    dispatch(updateLoader(''));
    let p = page || 1;

    let url = `media?pageId=&id=&page=${p}&limit=5`;
    try {
      const rs = await request(url, 'GET', false);
      if (rs.success === true) {
        setTotaldocument(rs.paging?.total);
        let x = rs.paging?.total / 800;
        let z = x * 100;
        setTotaldocumentbypercent(z.toFixed(2))
        dispatch(updateLoader('none'));
      }
    } catch (err) {
      dispatch(updateLoader('none'));
      console.log(err);
    }
  }, [])

  const handlePagination = page => {
    fetchIncident(page.selected + 1);
    setCurrentPage(page.selected + 1);
  }
  const handlePaginationP = page => {
    fetchPosts(page.selected + 1);
    setCurrentPageP(page.selected + 1);
  }

  useEffect(() => {
    fetchIncident();
    fetchPostsMoApprove();
    fetchPosts();
    fetchDocuments();
  }, [fetchIncident, fetchPostsMoApprove, fetchPosts, fetchDocuments])

  const series2 = [`${totaldocumentbypercent}`];
  const seriesApp = [`${totalreportedpostbypercent}`];
  const seriesInci = [`${totalreportedincidentbypercent}`];


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
  const reports = [
    {
      id: 1,
      icon: "uil-signal-alt-3",
      title: "Total Document Uploaded",
      // rate: totaldocument,
      value: totaldocument,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 75,
      chartwidth: 75,
      prefix: "",
      suffix: "",
      badgeValue: `${totaldocumentbypercent}%`,
      color: "danger",
      desc: "Last 30 days",
      series: series2,
      options: options2,
    },
    {
      id: 2,
      icon: "uil-file-info-alt",
      title: "Total Approved Reports",
      // rate: totalreportedpostbypercent,
      value: totalreportedpost,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 75,
      chartwidth: 75,
      prefix: "",
      suffix: "",
      badgeValue: `${totalreportedpostbypercent}%`,
      color: "danger",
      desc: "Last 30 days",
      series: seriesApp,
      options: options2,
    }, {
      id: 3,
      icon: "uil-coins",
      title: "Total Reported Incident",
      rate: totalreportedincident,
      value: totalreportedincident,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 75,
      chartwidth: 75,
      prefix: "",
      suffix: "",
      badgeValue: `${totalreportedincidentbypercent}%`,
      color: "danger",
      desc: "Last 30 days",
      series: seriesInci,
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

          <Row>
            <Col xl={12}>
              <Row>
                {/* <Statistics reports={reports} /> */}
                <MiniWidget reports={reports} />
              </Row>

            </Col>
            <Col xl={3} className="d-none">
              <Card >
                <CardBody>
                  <h2 style={{ fontWeight: '700' }}> Recent Updates Case Analytics by State</h2>
                </CardBody>
              </Card>
              <CaseAnalysis caseAnalysis={caseAnalysis} />
            </Col>
          </Row>

          <Row className="mt-4">
            <IncidentPost incidents={incidents} handlePagination={handlePagination} currentPage={currentPage} count={count} meta={meta}
              posts={posts} currentPageP={currentPageP} handlePaginationP={handlePaginationP} countP={countP} metaP={metaP}
            />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;