import React from "react";
import { Card, CardBody, Table, CardTitle, Label, Input, Row, Col, Button, UncontrolledTooltip, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Link } from "react-router-dom";

const Comment = () => {
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <CardBody>
                        <CardTitle className="h4 mb-4">
                            <div className="d-flex justify-content-between mb-2">
                                <div className="mx-2">
                                </div>
                                <div>
                                    <Input type="text" placeholder="search comment" style={{ borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }} />

                                </div>
                            </div>
                        </CardTitle>
                        <div className="table-responsive">
                            <Table className="table-centered table-nowrap mb-0" striped bordered>
                                <thead className="table-light">
                                    <tr>

                                        <th>Author</th>
                                        <th>Comment</th>
                                        <th>In Response To</th>
                                        <th>Submitted On</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>
                                            <div>
                                                <span>James John</span>
                                            </div>
                                            <div>
                                                <span>james@gmail.com</span>
                                            </div>
                                        </td>
                                        <td>
                                            comment
                                        </td>
                                        <td>
                                            Incident Reported
                                        </td>
                                        <td>
                                            07 Oct, 2019
                                        </td>
                                        <td>
                                            <div className="d-flex gap-3 users">
                                                <ul className="list-inline font-size-20 contact-links mb-0">
                                                    <li className="list-inline-item">
                                                        <Link
                                                            to="#"
                                                            className="text-primary"
                                                        // onClick={() => {
                                                        //   const users = cellProps.row.original
                                                        //   // handleUserClick(users)
                                                        // }}
                                                        >
                                                            <i className="uil-check font-size-18" id="edittooltip" />
                                                            <UncontrolledTooltip placement="top" target="edittooltip">
                                                                Approve
                                                            </UncontrolledTooltip>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link
                                                            to="#"
                                                            className="text-primary"
                                                        // onClick={() => {
                                                        //   const users = cellProps.row.original
                                                        //   // handleUserClick(users)
                                                        // }}
                                                        >
                                                            <i className="uil-eye font-size-18" id="edittooltip" />
                                                            <UncontrolledTooltip placement="top" target="edittooltip">
                                                                View Details
                                                            </UncontrolledTooltip>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link
                                                            to="/edit-comment/1"
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
                            <div className="d-flex justify-content-between mt-4">
                                <div>Showing 1 to 10 of 57 entries</div>
                                <Pagination aria-label="Page navigation example">
                                    <PaginationItem disabled>
                                        <PaginationLink
                                            first
                                            href="#"
                                        />
                                    </PaginationItem>
                                    <PaginationItem disabled>
                                        <PaginationLink
                                            href="#"
                                            previous
                                        />
                                    </PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink href="#">
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem disabled>
                                        <PaginationLink href="#">
                                            3
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            4
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            5
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#"
                                            next
                                        />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#"
                                            last
                                        />
                                    </PaginationItem>
                                </Pagination>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Comment;