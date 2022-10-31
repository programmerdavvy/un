import React from "react";
import { Card, CardBody, Table, CardTitle, Label, Input, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";


const LatestTransaction = (props) => {

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
                                    {props.posts?.map((e, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{e.title}</td>
                                                <td>
                                                    James John
                                                </td>
                                                <td>
                                                    <Button type="button" color="primary" className="btn-sm btn-rounded waves-effect waves-light">
                                                        View Details
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                            <div className="mt-3 d-flex align-items-center justify-content-between">
                                <div>Showing 1 to 5 of {props.meta?.total} entries</div>
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
        </Row>
    );
};

export default LatestTransaction;