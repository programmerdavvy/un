import React from "react";
import { Card, CardBody, Table, CardTitle, Label, Input, Row, Col, Button, UncontrolledTooltip } from "reactstrap";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { request } from "../../../services/utilities";
import { useDispatch } from 'react-redux';
import { updateLoader } from "../../../store/actions";

const IncidentReported = (props) => {
    const dispatch = useDispatch();
    
    const onClickDelete = async id => {
        dispatch(updateLoader(''))
        if (window.confirm('Are you sure!')) {
            let url = ``;
            try {
                const rs = await request(url, 'DELETE', false);
                console.log(rs)
                if (rs.success === true) {
                    dispatch(updateLoader('none'))
                    props.fetchIncidents()
                    props.showToast('success', 'Deleted successfully ');
                }
            } catch (err) {
                dispatch(updateLoader('none'))
                console.log(err);
                props.showToast('error', 'Failed to delete ');

            }
        }
    }
    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <CardBody>
                        <CardTitle className="h4 mb-4">Incidents Reported</CardTitle>
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
                                    {props.incidents?.map((e, i) => {
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
                                                    <td style={{ width: '140px' }}>
                                                        {e.media[0]?.type !== 'image' ?
                                                            <iframe
                                                                width='50%'
                                                                // height='400px'
                                                                title={e?.media[0]?.name}
                                                                className="embed-responsive-item"
                                                                src={e?.media[0]?.link}
                                                            /> : <div> <img src={e.media[0]?.link} alt={e.media[0]?.name} className='img-thumbnail' width='100' /></div>
                                                        }

                                                    </td>
                                                </td>
                                                <td>
                                                    {e.status}
                                                </td>
                                                <td>
                                                    <div className="d-flex gap-3 users">
                                                        <ul className="list-inline font-size-20 contact-links mb-0">
                                                            <li className="list-inline-item">
                                                                <Link
                                                                    to={`/stakeholder-view-incident/${e.referenceId}`}
                                                                    className="text-dark"
                                                                // onClick={() => {
                                                                //   const users = cellProps.row.original
                                                                //   // handleUserClick(users)
                                                                // }}
                                                                >
                                                                    <i className="uil-expand-arrows-alt font-size-18" id="edittooltip1" />
                                                                    <UncontrolledTooltip placement="top" target="edittooltip1">
                                                                        View Details
                                                                    </UncontrolledTooltip>
                                                                </Link>
                                                            </li>
                                                            {/* <li className="list-inline-item">
                                                                <Link
                                                                    to="/edit-post/1"
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
                                                                        id="deletetooltip3"
                                                                    />
                                                                    <UncontrolledTooltip placement="top" target="deletetooltip3">
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

export default IncidentReported;