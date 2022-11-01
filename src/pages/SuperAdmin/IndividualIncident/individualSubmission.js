import React from "react";
import { Card, CardBody, Table, CardTitle, Label, Input, Row, Col, Button, UncontrolledTooltip } from "reactstrap";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";


const IndividualSubmission = (props) => {

    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <CardBody>
                        <CardTitle className="h4 mb-4">Individual Submission</CardTitle>
                        <div className="table-responsive">
                            <Table className="table-centered table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th>Case ID</th>
                                        <th>Name</th>
                                        <th>Device </th>
                                        <th>Category</th>
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
                                                    {e.city}
                                                </td>
                                                <td>
                                                    {e.state}
                                                </td>
                                                <td>
                                                    {new Date(e.createdAt).toDateString()}
                                                </td>
                                                <td>
                                                    <img src={e.media[0]?.link} className='img-thumbnail' width='50' alt='evidence' />
                                                    {e.media[0]?.type === 'image' ? <div>
                                                        <img src={e.link} className='img-thumbnail' width='100%' alt='uploaded incident' />
                                                    </div> : e.type === 'video' ? <div>
                                                        <video>
                                                            <source src={e.link} type="video/mp4" />
                                                        </video>
                                                    </div> : e.type === 'audio' ? <div>
                                                        <audio controls>
                                                            <source src={e.link} type="audio/mpeg" />
                                                        </audio>
                                                    </div> : ''
                                                    }
                                                </td>
                                                <td>
                                                    {e.status}
                                                </td>
                                                <td>
                                                    <div className="d-flex gap-3 users">
                                                        <ul className="list-inline font-size-20 contact-links mb-0">
                                                            <li className="list-inline-item">
                                                                <Link
                                                                    to={`/admin-view-incident/${e.referenceId}`}
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
                                                                    <i className="uil-edit-alt font-size-18" id="edittooltip" />
                                                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                                                        Edit
                                                                    </UncontrolledTooltip>
                                                                </Link>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <Link
                                                                    to="#"
                                                                    // onClick={() => {
                                                                    //   const users = cellProps.row.original
                                                                    //   onClickDelete(users)
                                                                    // }}
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
                            <div className="mt-3 d-flex align-items-center justify-content-between">
                                <div>Showing 1 to 10 of {props.meta?.total} entries</div>

                                <div>
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
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row >
    );
};

export default IndividualSubmission;