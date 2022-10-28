import React from "react";
import { Card, CardBody, Table, CardTitle, Label, Input, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const LatestTransaction = () => {
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <CardBody>
                        <CardTitle className="h4 mb-4">Post Awaiting Approval </CardTitle>
                        <div className="table-responsive">
                            <Table className="table-centered table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        {/* <th style={{ width: "20px" }}>
                                            <div className="form-check font-size-16">
                                                <Input type="checkbox" className="form-check-input" id="customCheck1" />
                                                <Label className="form-check-label" for="customCheck1">&nbsp;</Label>
                                            </div>
                                        </th> */}
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>View Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                       
                                        <td>Incident Post</td>
                                        <td>
                                            James John
                                        </td>
                                        <td>

                                            <Button type="button" color="primary" className="btn-sm btn-rounded waves-effect waves-light">
                                                View Details
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default LatestTransaction;