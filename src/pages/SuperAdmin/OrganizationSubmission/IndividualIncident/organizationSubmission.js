import React from "react";
import { Card, CardBody, Table, CardTitle, Label, Input, Row, Col, Button, UncontrolledTooltip } from "reactstrap";
import { Link } from "react-router-dom";

const OrganizationSubmission = () => {
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <CardBody>
                        <CardTitle className="h4 mb-4">Organization Submission</CardTitle>
                        <div className="table-responsive">
                            <Table className="table-centered table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th>Case ID</th>
                                        <th> Name</th>
                                        <th>Device</th>
                                        <th>Category</th>
                                        <th>Organization Name</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>Date</th>
                                        <th>Evidence</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td><Link to="#" className="text-body fw-bold">#MB2540</Link> </td>
                                        <td>
                                            James John
                                        </td>
                                        <td><i className="uil-mobile-android-alt"></i></td>
                                        <td>
                                            Resources
                                        </td>
                                        <td>
                                            EFCC
                                        </td>
                                        <td>
                                            Zuba
                                        </td>
                                        <td>
                                            FCT
                                        </td>
                                        <td>
                                            07 Oct, 2019
                                        </td>
                                        <td>
                                            Video
                                        </td>
                                        <td>
                                            Pending
                                        </td>
                                        <td>
                                            <div className="d-flex gap-3 users">
                                                <ul className="list-inline font-size-20 contact-links mb-0">

                                                    <li className="list-inline-item">
                                                        <Link
                                                            to="/admin-edit-post/1"
                                                            className="text-primary"
                                                        // onClick={() => {
                                                        //   const users = cellProps.row.original
                                                        //   // handleUserClick(users)
                                                        // }}
                                                        >
                                                            <i className="uil uil-pen font-size-18" id="edittooltip" />
                                                            <UncontrolledTooltip placement="top" target="edittooltip">
                                                                Edit
                                                            </UncontrolledTooltip>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link
                                                            to="#"
                                                            className="text-danger"
                                                        // onClick={() => {
                                                        //   const users = cellProps.row.original
                                                        //   onClickDelete(users)
                                                        // }}
                                                        >
                                                            <i
                                                                className="uil uil-trash-alt font-size-18"
                                                                id="deletetooltip"
                                                            />
                                                            <UncontrolledTooltip placement="top" target="deletetooltip">
                                                                Delete
                                                            </UncontrolledTooltip>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>

                                        <td><Link to="#" className="text-body fw-bold">#MB2540</Link> </td>
                                        <td>
                                            James John
                                        </td>
                                        <td><i className="uil-desktop"></i></td>
                                        <td>
                                            News
                                        </td>
                                        <td>
                                            EFCC
                                        </td>
                                        <td>
                                            Zuba
                                        </td>
                                        <td>
                                            FCT
                                        </td>
                                        <td>
                                            07 Oct, 2019
                                        </td>
                                        <td>
                                            Audio
                                        </td>
                                        <td>
                                            Pending
                                        </td>
                                        <td>
                                            <div className="d-flex gap-3 users">
                                                <ul className="list-inline font-size-20 contact-links mb-0">

                                                    <li className="list-inline-item">
                                                        <Link
                                                            to="/admin-edit-post/1"
                                                            className="text-primary"
                                                        // onClick={() => {
                                                        //   const users = cellProps.row.original
                                                        //   // handleUserClick(users)
                                                        // }}
                                                        >
                                                            <i className="uil uil-pen font-size-18" id="edittooltip" />
                                                            <UncontrolledTooltip placement="top" target="edittooltip">
                                                                Edit
                                                            </UncontrolledTooltip>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link
                                                            to="#"
                                                            className="text-danger"
                                                        // onClick={() => {
                                                        //   const users = cellProps.row.original
                                                        //   onClickDelete(users)
                                                        // }}
                                                        >
                                                            <i
                                                                className="uil uil-trash-alt font-size-18"
                                                                id="deletetooltip"
                                                            />
                                                            <UncontrolledTooltip placement="top" target="deletetooltip">
                                                                Delete
                                                            </UncontrolledTooltip>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
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

export default OrganizationSubmission;