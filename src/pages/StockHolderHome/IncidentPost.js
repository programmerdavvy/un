import React from 'react'
import { Card, CardBody, Table, CardTitle, Col, UncontrolledTooltip } from 'reactstrap'
import ReactPaginate from "react-paginate";


function IncidentPost(props) {


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
                                            <i className='uil-circle text-danger font-size-12' id='edittooltip' style={{ cursor: 'pointer' }}></i>
                                            <UncontrolledTooltip placement="top" target="edittooltip">
                                                Unapproved
                                            </UncontrolledTooltip>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">23-4=2022</th>
                                        <td>Mark</td>
                                        <td>
                                            <i className='uil-circle text-success font-size-12' id='edittooltip2' style={{ cursor: 'pointer' }}></i>
                                            <UncontrolledTooltip placement="top" target="edittooltip2">
                                                Approved
                                            </UncontrolledTooltip>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className="mt-3 d-flex align-items-center justify-content-between">
                                <div>Showing {props.currentPage} to 5 of {props.meta?.total} entries</div>

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
                                    {props.incidents?.map(e => {
                                        return (
                                            <tr key={e.id}>
                                                <th scope="row">{new Date(e.createdAt).toDateString()}</th>
                                                <td>{e.reporter_name}</td>
                                                <td>{e.category}</td>
                                                <td>{e.status}</td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </Table>
                            <div className="mt-3 d-flex align-items-center justify-content-between">
                                <div>Showing {props.currentPage} to 5 of {props.meta?.total} entries</div>

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
        </React.Fragment>
    )
}

export default IncidentPost