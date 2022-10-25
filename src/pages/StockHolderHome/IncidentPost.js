import React from 'react'
import { Card, CardBody, Table, CardTitle, Col, UncontrolledTooltip } from 'reactstrap'

function IncidentPost() {
    return (
        <React.Fragment>
            <Col lg={6}>
                <Card>
                    <CardBody>
                        <CardTitle className="h4">Post Approval</CardTitle>

                        <div className="table-responsive">
                            <Table className="table mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th>Date</th>
                                        <th>Title</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">22-2-2022</th>
                                        <td>Mark</td>
                                        <td>
                                            <i className='uil-circle text-danger font-size-18' id='edittooltip' style={{ cursor: 'pointer' }}></i>
                                            <UncontrolledTooltip placement="top" target="edittooltip">
                                                Unapproved
                                            </UncontrolledTooltip>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>
                                            <i className='uil-circle text-success font-size-18' id='edittooltip2' style={{ cursor: 'pointer' }}></i>
                                            <UncontrolledTooltip placement="top" target="edittooltip2">
                                                Approved
                                            </UncontrolledTooltip>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={6}>
                <Card>
                    <CardBody>
                        <CardTitle className="h4">Incident Reported</CardTitle>

                        <div className="table-responsive">
                            <Table className="table mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">20-9-2022</th>
                                        <td>Mark</td>
                                        <td>News</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">20-9-2022</th>
                                        <td>Mark</td>
                                        <td>News</td>
                                        <td>@mdo</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    )
}

export default IncidentPost