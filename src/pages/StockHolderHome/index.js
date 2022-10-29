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
  const [incidents, setIncidents] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [count, setCount] = useState(1);
  const [totalreportedincident, setTotalreportedincident] = useState(0);
  const [meta, setMeta] = useState(null);


  const fetchIncident = useCallback(async page => {
    const p = page || 1;

    try {
      let url = `incident/getall?page=${p}&limit=5`;
      const rs = await request(url, 'GET', false);
      console.log(rs);
      if (rs.success === true) {
        setIncidents(rs.result);
        setTotalreportedincident(rs.paging?.total)
        setCount(Math.ceil(rs.paging?.total / rowsPerPage));
        setMeta(rs.paging);
      }
    } catch (err) {
      console.log(err)
    }
  }, [rowsPerPage]);

  const handlePagination = page => {
    fetchIncident(page.selected + 1)
    setCurrentPage(page.selected + 1)
  }

  useEffect(() => {
    fetchIncident();
  }, [fetchIncident])

  const reports = [
    {
      id: 1,
      icon: "uil-signal-alt-3",
      title: "Total Document Uploaded",
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
      title: "Total Approved Reports",
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
      title: "Total Reported Incident",
      rate: totalreportedincident,
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

          <Row>
            <Col xl={10}>
              <Row>
                <Statistics reports={reports} />
              </Row>
              {/* <Analysis /> */}

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
            <IncidentPost incidents={incidents} handlePagination={handlePagination} currentPage={currentPage} count={count} meta={meta} />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;