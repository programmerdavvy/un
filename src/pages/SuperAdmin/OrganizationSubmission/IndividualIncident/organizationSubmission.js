import React from "react";
import { Card, CardBody, Table, CardTitle, Row, Col, Button, UncontrolledTooltip } from "reactstrap";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";


const OrganizationSubmission = (props) => {
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
                                    {props.submission?.map((e, i) => {
                                        if (e.userId === null) {
                                            return (
                                                <tr key={i} className='text-capitalize'>
                                                    <td><Link to="#" className="text-body fw-bold">#{e.referenceId}</Link> </td>
                                                    <td>
                                                        {e.childname}
                                                    </td>
                                                    <td>{e.isMobile === true ? <><i className="uil-mobile-android-alt"></i> Mobile</> : <><i className="uil-desktop"></i> Desktop</>} </td>
                                                    <td>
                                                        {e.category}
                                                    </td>
                                                    <td>
                                                        {e.reporter_name}
                                                    </td>
                                                    <td>
                                                        {e.city}
                                                    </td>
                                                    <td>
                                                        {e.state}
                                                    </td>
                                                    <td>
                                                        {new Date(e.createdAt).toDateString()}
                                                    </td>
                                                    <td>
                                                        <img src={e.media_file} className='img-thumbnail' width='50' alt='evidence' />
                                                    </td>
                                                    <td>
                                                        {e.status}
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
                                            )
                                        }
                                    })}

                                </tbody>
                            </Table>
                            <div className="mt-3">
                                <ReactPaginate
                                    nextLabel='Next'
                                    breakLabel='...'
                                    previousLabel='Prev'
                                    pageCount={props.count}
                                    activeClassName='active'
                                    breakClassName='page-item'
                                    pageClassName={'page-item'}
                                    breakLinkClassName='page-link'
                                    nextLinkClassName={'page-link'}
                                    pageLinkClassName={'page-link'}
                                    nextClassName={'page-item next'}
                                    previousLinkClassName={'page-link'}
                                    previousClassName={'page-item prev'}
                                    onPageChange={page => props.handlePagination(page)}
                                    forcePage={props.currentPage !== 0 ? props.currentPage - 1 : 0}
                                    containerClassName={'pagination react-paginate justify-content-end p-1'}
                                />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default OrganizationSubmission;