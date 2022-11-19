import React from "react";
import { Card, CardBody, Table, CardTitle, Label, Input, Row, Col, Button, UncontrolledTooltip } from "reactstrap";
import { Link } from "react-router-dom";
import avatar7 from "../../../assets/images/users/avatar-3.jpg"
import ReactPaginate from "react-paginate";
import { request } from "../../../services/utilities";
import { useDispatch } from 'react-redux'
import { updateLoader } from "../../../store/actions";


const IndividualSubmission = (props) => {
    const dispatch = useDispatch();
    const onClickDelete = async id => {
        dispatch(updateLoader(''))
        try {
            const url = `sections?id=${id}`;
            const rs = await request(url, 'DELETE', false);
            dispatch(updateLoader('none'))

            if (rs.success === true) {
                props.showToast('success', 'Deleted successfully');
                props.fetchGallery();

            }
        } catch (err) {
            dispatch(updateLoader('none'))
            console.log(err);
            props.showToast('error', 'Failed to delete');
        }
    }
    const onApprovePost = async id => {
        dispatch(updateLoader(''))
        let url = `sections/approve?sectionId=${id}`
        try {
            const rs = await request(url, 'GET', false);
            if (rs.success === true) {
            dispatch(updateLoader('none'))
                props.showToast('success', 'Successfully Approved');
            }
        } catch (err) {
            dispatch(updateLoader('none'))
            console.log(err);
            props.showToast('error', 'Failed to Approve');
        }
    }
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <CardBody>
                        <CardTitle className="h4 mb-4">Gallery</CardTitle>
                        <div className="table-responsive">
                            <Table className="table-centered table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>Images</th>
                                        <th> Date Published</th>
                                        <th></th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.gallery?.map((e, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>#{e.id}</td>
                                                <td>
                                                    {e.title}
                                                </td>
                                                <td>
                                                    {e.media?.length}
                                                </td>
                                                <td>
                                                    {new Date(e.createdAt).toDateString()}
                                                </td>
                                                <td>
                                                    <img className='img-thumbnails' height='50' width='50' src={e.media[0]?.link} alt='top' />
                                                </td>
                                                <td>
                                                    <div className="d-flex gap-3 users">
                                                        <ul className="list-inline font-size-20 contact-links mb-0">
                                                            <li className="list-inline-item">
                                                                <Link
                                                                    to="#"
                                                                    className="text-dark"
                                                                    onClick={() => {
                                                                        onApprovePost(e.id)
                                                                    }}
                                                                >
                                                                    <i className="uil-check font-size-18" id="edittooltip" />
                                                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                                                        Approve
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
                                                                    <i className="uil-edit-alt font-size-18" id="edittooltip" />
                                                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                                                        Approve
                                                                    </UncontrolledTooltip>
                                                                </Link>
                                                            </li> */}
                                                            <li className="list-inline-item">
                                                                <Link
                                                                    to="#"
                                                                    onClick={() => onClickDelete(e.id)}
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

export default IndividualSubmission;