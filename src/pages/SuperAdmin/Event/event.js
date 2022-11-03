import React from "react";
import { Card, CardBody, Table, CardTitle, Label, Input, Row, Col, Button, UncontrolledTooltip } from "reactstrap";
import { Link } from "react-router-dom";
import { request } from "../../../services/utilities";

const Events = (props) => {

    const onClickDelete = async id => {
        let url = `sections?id=${id}`
        try {
            const rs = await request(url, 'DELETE', false);
            if (rs.success === true) {

                props.fetchEvents();
                props.showToast('success', 'Deleted Successfully');
            }
        } catch (err) {
            console.log(err);
            props.showToast('error', 'Failed to delete');

        }
    }

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
                                    {props.events?.map((e, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{e.tile}</td>
                                                <td>
                                                    News
                                                </td>
                                                <td>
                                                    {new Date(e.startDate).toISOString()}
                                                </td>
                                                <td>
                                                {new Date(e.endDate).toISOString()}
                                                </td>
                                                <td>
                                                    <div className="d-flex gap-3 users">
                                                        <ul className="list-inline font-size-20 contact-links mb-0">
                                                            {/* <li className="list-inline-item">
                                                        <Link
                                                            to="#"
                                                            className="text-dark"
                                                        // onClick={() => {
                                                        //   const users = cellProps.row.original
                                                        //   // handleUserClick(users)
                                                        // }}
                                                        >
                                                            <i className="uil-check font-size-18" id="edittooltip" />
                                                            <UncontrolledTooltip placement="top" target="edittooltip">
                                                                approve
                                                            </UncontrolledTooltip>
                                                        </Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link
                                                            to="#"
                                                            className="text-dark"
                                                        // onClick={() => {
                                                        //   const users = cellProps.row.original
                                                        //   // handleUserClick(users)
                                                        // }}
                                                        >
                                                            <i className="uil-expand-arrows-alt font-size-18" id="edittooltip" />
                                                            <UncontrolledTooltip placement="top" target="edittooltip">
                                                                View Details
                                                            </UncontrolledTooltip>
                                                        </Link>
                                                    </li> */}
                                                            {/* <li className="list-inline-item">
                                                        <Link
                                                            to="#"
                                                            className="text-dark"
                                                        // onClick={() => {
                                                        //   const users = cellProps.row.original
                                                        //   // handleUserClick(users)
                                                        // }}
                                                        >
                                                            <i className="uil-edit-alt font-size-18" id="edittooltip" />
                                                            <UncontrolledTooltip placement="top" target="edittooltip">
                                                                Edit
                                                            </UncontrolledTooltip>
                                                        </Link>
                                                    </li> */}
                                                            <li className="list-inline-item">
                                                                <Link
                                                                    to="#"
                                                                    onClick={() => {
                                                                        onClickDelete(e.id)
                                                                    }}
                                                                    className="text-dark"

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
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Events;