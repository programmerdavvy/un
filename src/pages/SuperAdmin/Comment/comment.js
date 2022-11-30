import React from "react";
import { Card, CardBody, Table, CardTitle, Label, Input, Row, Col, Button, UncontrolledTooltip, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { request } from "../../../services/utilities";
import { useDispatch } from 'react-redux'
import { updateLoader } from "../../../store/actions";

const Comment = (props) => {
    const dispatch = useDispatch();

    const approveComment = async id => {
        dispatch(updateLoader(''));
        const url = `comments/approve/?id=${id}`;
        try {
            const rs = await request(url, 'PATCH', false);
            if (rs.success === true) {
                dispatch(updateLoader('none'));
                props.showToast('success', 'Comment approved successfully');
            }
        } catch (err) {
            dispatch(updateLoader('none'));
            console.log(err);
            props.showToast('error', 'Failed to approve')
        }
    }
    const onClickDelete = async id => {
        const url = `comments/delete/?id=${id}`;
        if (window.confirm('Are you sure')) {
            dispatch(updateLoader(''));
            try {
                const rs = await request(url, 'DELETE', false);
                if (rs.success === true) {
                    props.fetchComment();
                dispatch(updateLoader('none'));
                    props.showToast('success', 'Deleted  successfully');
                }
            } catch (err) {
                dispatch(updateLoader('none'));
                console.log(err);
                props.showToast('error', 'Failed to delete')
            }
        }
    }
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
                                    {props.comments.map((e, i) => {
                                        return (
                                            <tr className="text-capitalize">
                                                <td>
                                                    <div>
                                                        <span>{e.name}</span>
                                                    </div>
                                                    {/* <div>
                                                        <span>james@gmail.com</span>
                                                    </div> */}
                                                </td>
                                                <td>
                                                    {e.comment}
                                                </td>
                                                <td>
                                                {e.section?.title}                                                </td>
                                                <td>
                                                    {new Date(e.createdAt).toDateString()}
                                                </td>
                                                <td>
                                                    <div className="d-flex gap-3 users">
                                                        <ul className="list-inline font-size-20 contact-links mb-0">
                                                            <li className="list-inline-item">
                                                                <Link
                                                                    to="#"
                                                                    className="text-dark"
                                                                    onClick={() => {
                                                                        approveComment(e.id);
                                                                    }}
                                                                >
                                                                    <i className="uil-check font-size-18" id="edittooltip1" />
                                                                    <UncontrolledTooltip placement="top" target="edittooltip1">
                                                                        approve
                                                                    </UncontrolledTooltip>
                                                                </Link>
                                                            </li>

                                                            {/* <li className="list-inline-item">
                                                                <Link
                                                                    to="#"
                                                                    className="text-dark"
                                                                // onClick={() => {
                                                                //   const users = cellProps.row.original
                                                                //   // handleUserClick(users)
                                                                // }}
                                                                >
                                                                    <i className="uil-edit-alt font-size-18" id="edittooltip2" />
                                                                    <UncontrolledTooltip placement="top" target="edittooltip2">
                                                                        Edit
                                                                    </UncontrolledTooltip>
                                                                </Link>
                                                            </li> */}
                                                            <li className="list-inline-item">
                                                                <Link
                                                                    to="#"
                                                                    onClick={() => {
                                                                        onClickDelete(e.id);
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
        </Row>
    );
};

export default Comment;