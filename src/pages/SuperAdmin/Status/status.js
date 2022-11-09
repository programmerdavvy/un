import React from 'react'
import { Card, Modal, ModalHeader, ModalBody, Form, Row, Col, CardBody, CardTitle, Table, UncontrolledTooltip, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { request } from '../../../services/utilities';
import toastr from "toastr"
import "toastr/build/toastr.min.css"
import ReactPaginate from 'react-paginate';


function Status(props) {
    const [name, setName] = useState('');
    const [modal, setmodal] = useState(false);
    const [isEdit, setIsedit] = useState(false);

    const showToast = (error, message) => {
        let positionClass = "toast-top-right"
        let toastType
        let showMethod = 'fadeIn'

        toastr.options = {
            positionClass: positionClass,
            timeOut: 5000,
            extendedTimeOut: 1000,
            closeButton: false,
            debug: false,
            progressBar: false,
            preventDuplicates: true,
            newestOnTop: true,
            showEasing: 'swing',
            hideEasing: 'linear',
            showMethod: showMethod,
            hideMethod: 'fadeOut',
            showDuration: 300,
            hideDuration: 1000
        }

        // setTimeout(() => toastr.success(`Settings updated `), 300)
        //Toaster Types
        // if (toastType === "info") toastr.info(message, title)
        // else if (toastType === "warning") toastr.warning(message, title)
        if (error === "error") toastr.error(message)
        else toastr.success(message)
    }

    const saveStatus = async () => {
        const data = { name };
        try {
            const url = `status`;
            const rs = await request(url, 'POST', false, data);
            props.fetchStatus();
            setName('');
            setmodal(!modal);
            showToast('success', 'successfully saved');

        } catch (err) {
            console.log(err);
            showToast('error', 'Failed to save');

        }
    }
    const onClickDelete = async (id) => {
        if (window.confirm('Are you sure')) {
            try {
                const url = `status/delete/?id=${id}`;
                const rs = await request(url, 'DELETE', false);
                if (rs.success === true) {
                    showToast('success', 'Deleted  successfully');
                    props.fetchStatus()
                }

            } catch (err) {
                console.log(err);
                showToast('error', 'Failed to delete');

            }
        }
    }
    const updateStatus = async () => {
        try {
            const url = `status?id=1`;
            const rs = await request(url, 'PATCH', false);
            if (rs.success === true) {
                props.fetchStatus();
                setName('');
                setmodal(!modal);
                showToast('success', 'Updated  successfully');

            }

        } catch (err) {
            console.log(err);
            showToast('error', 'Failed to update');

        }
    }
    return (
        <React.Fragment>
            <Modal
                size="md"
                className=""
                isOpen={modal}
                toggle={() => {
                    setmodal(!modal)
                }}
                centered={false}>
                <ModalHeader
                    className=""
                    toggle={() => {
                        setName('');
                        setIsedit(false);
                        setmodal(!modal);
                    }}
                >
                    {isEdit === true ? 'Edit Category' : ' Add New Category'}
                </ModalHeader>
                <ModalBody>
                    <Card>
                        <CardBody>
                            <Form>
                                <Row>
                                    <Col>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="name">Status</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Enter Status"
                                                onChange={e => setName(e.target.value)}
                                                value={name}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <div className="text-end">
                                            <button type="button" onClick={isEdit === false ? saveStatus : updateStatus} className="btn btn-success">
                                                {isEdit === true ? 'Update' : 'Save'}
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </ModalBody>
            </Modal>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle className=''>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <h4>Status</h4>
                                    </div>
                                    <div>
                                        <h4>
                                            <Button color='primary' onClick={() => setmodal(!modal)}>Add New</Button>
                                        </h4>
                                    </div>
                                </div>
                            </CardTitle>

                            <div className="table-responsive">
                                <Table bordered>
                                    <thead className="table-light">
                                        <tr>
                                            <th>Id</th>
                                            <th> Status</th>
                                            <th style={{ width: '10rem' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.status.map((e, i) => {
                                            return (
                                                <tr key={i}>
                                                    <th>{e.id}</th>
                                                    <td>{e.name}</td>
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
                                                                        <i className="uil-expand-arrows-alt font-size-18" id="edittooltip" />
                                                                        <UncontrolledTooltip placement="top" target="edittooltip">
                                                                            View Details
                                                                        </UncontrolledTooltip>
                                                                    </Link>
                                                                </li> */}
                                                                <li className="list-inline-item">
                                                                    <Link
                                                                        to="#"
                                                                        className="text-dark"
                                                                        onClick={() => {
                                                                            setName(e.name);
                                                                            setIsedit(true);
                                                                            setmodal(!modal)
                                                                            // handleUserClick(users)
                                                                        }}
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
                                    <div>Showing 1 to 10 of {props.meta?.total || '10'} entries</div>
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
                {/* <Col>
                    
                </Col> */}
            </Row>
        </React.Fragment >)
}

export default Status;