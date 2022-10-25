import React from "react";
import { Card, CardBody, Table, CardTitle, Label, Input, Row, Col, Button, UncontrolledTooltip } from "reactstrap";
import { Link } from "react-router-dom";

const IndividualSubmission = () => {
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <CardBody>
                        <CardTitle className="h4 mb-4">Events</CardTitle>
                        <div className="table-responsive">
                            <Table className="table-centered table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>

                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>Birthday Party</td>
                                        <td>
                                            News
                                        </td>
                                        <td>
                                            07 Oct, 2019
                                        </td>
                                        <td>
                                            10 Oct, 2019
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

                                        <td>Birthday Party</td>
                                        <td>
                                            News
                                        </td>
                                        <td>
                                            07 Oct, 2019
                                        </td>
                                        <td>
                                            10 Oct, 2019
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
                                    </tr> <tr>

                                        <td>Birthday Party</td>
                                        <td>
                                            News
                                        </td>
                                        <td>
                                            07 Oct, 2019
                                        </td>
                                        <td>
                                            10 Oct, 2019
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
                                    </tr> <tr>

                                        <td>Birthday Party</td>
                                        <td>
                                            News
                                        </td>
                                        <td>
                                            07 Oct, 2019
                                        </td>
                                        <td>
                                            10 Oct, 2019
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
                                    </tr> <tr>

                                        <td>Birthday Party</td>
                                        <td>
                                            News
                                        </td>
                                        <td>
                                            07 Oct, 2019
                                        </td>
                                        <td>
                                            10 Oct, 2019
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

export default IndividualSubmission;