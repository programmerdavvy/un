import React from 'react'
import PropTypes from 'prop-types';
import { Col, Card, CardBody } from "reactstrap";
import CountUp from 'react-countup';
import Knob from "../AllCharts/knob/knob";


function Statistics(props) {

    return (
        <React.Fragment>
            {props.reports.map((report, key) => (
                <Col md={6} xl={3} key={key}>
                    <Card>
                        <CardBody>
                            <div className="float-end mt-2">
                                <Knob
                                    value={report.rate}
                                    fgColor="#5b73e8"
                                    lineCap="round"
                                    height={180}
                                    step={1000}
                                    width={150}
                                />
                            </div>
                            <div>
                                <h4 className="mb-1 mt-1">
                                    <i className={report.icon + " me-1 fs-1 "}></i>
                                    {/* <span><CountUp end={report.value} separator="," prefix={report.prefix} suffix={report.suffix} decimals={report.decimal} /></span> */}
                                </h4>
                                <h1 className="mb-1 mt-1" style={{ fontWeight: '700', fontSize: '23px' }}>
                                    {report.title}
                                </h1>
                                <h1 className=" mb-1 mt-1" style={{ fontWeight: '700', fontSize: '23px' }}>{report.rate}</h1>
                            </div>
                            <p className="text-muted mt-5 mb-0">{report.desc}</p>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </React.Fragment>
    );
};

export default Statistics
Statistics.propTypes = {
    reports: PropTypes.array
};