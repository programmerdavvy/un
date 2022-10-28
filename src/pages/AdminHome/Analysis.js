import React from 'react'
import ReactApexChart from "react-apexcharts"
import { Row, Col, Card, CardBody } from 'reactstrap'



function Analysis() {
    const series = [1, 1]

    const options = {
        labels: ["Anambra State", "Imo State"],
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

    const optionsSmall = {
        labels: ["Ezinnhitte Mbaise", ""],
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
    const optionsLeft = {
        labels: ["", "Closed"],
        colors: ["#228e68", "#5b73e8", "#f95000"],
        legend: {
            show: !0,
            position: 'left',
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
            <div className='mt-5'>
                <h1 style={{ fontWeight: '700' }}>Analytics</h1>
            </div>
            <Row>
                <Col xl={5} className='mb-0 p-0'>
                    <Card className='p-4 mb-0'
                    // style={{ height: '220px' }}
                    >
                        <CardBody className='p-2'>
                            <h4 className="card-title mb-2 text-center">Individual submission aggregate by state</h4>
                            <p className='text-center fs-4'>By State</p>
                            <ReactApexChart
                                options={options}
                                series={series}
                                type="donut"
                                height="320"
                                className="apex-charts"
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={5} className='p-0 m-0'>
                    <Card className='p-4'
                    // style={{ height: '220px' }}
                    >
                        <CardBody className='p-2'>
                            <h4 className="card-title mb-2  text-center">Organization report by state of occ..</h4>
                            <p className='text-center fs-4'>State Segregate</p>
                            <ReactApexChart
                                options={options}
                                series={series}
                                type="donut"
                                height="320"
                                className="apex-charts"
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={5} className='p-0 mb-0'>
                    <Card className='p-4 h-100' style={{ backgroundColor: '#071619' }}>
                        {/* height: '220px */}
                        <CardBody className='p-2'>
                            <h4 className="card-title mb-4 text-center" style={{ color: '#f8f8f8' }}>Current Position of Case</h4>
                            <p style={{ color: '#f8f8f8' }} className='fs-4'>cpositionofcase</p>
                            <ReactApexChart
                                options={optionsLeft}
                                series={series}
                                type="donut"
                                height="150"
                                className="apex-charts"
                            // style={{ backgroundColor: '#071619' }}
                            />

                        </CardBody>
                    </Card>
                </Col>
                <Col xl={5} className='mb-0 p-0'>
                    <Card className='p-4 mb-0 h-100'  >
                        {/* style={{height:'220px'}} */}
                        <CardBody className='p-2'>
                            <h4 className="card-title mb-2 text-center">LGA in Imo State</h4>
                            <p className='text-center fs-4 '>Organization's Reports</p>
                            <ReactApexChart
                                options={optionsSmall}
                                series={series}
                                type="donut"
                                height="150"
                                className="apex-charts"
                            />
                        </CardBody>
                    </Card>
                </Col>
                {/* <Col xl={5} className='p-0'>
                    <Card className='p-4'>
                        <CardBody className='p-2'>
                            <h4 className="card-title   text-center">Organization report by state of occ..</h4>
                            <ReactApexChart
                                options={options}
                                series={series}
                                type="donut"
                                height="320"
                                className="apex-charts"

                            />
                        </CardBody>
                    </Card>
                </Col> */}
            </Row>

        </React.Fragment>
    )
}
export default Analysis