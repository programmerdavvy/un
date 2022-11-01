import React from 'react'
import { Card, Modal, ModalHeader, ModalBody, Form, Row, Col, CardBody, CardTitle, Table, UncontrolledTooltip, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Categories() {

    const [modal, setmodal] = useState(false);
    const isSuperAdmin = false
    return (
        <React.Fragment>
            <Modal
                size="sm"
                className=""
                isOpen={modal}
                toggle={() => {
                    setmodal(!modal)
                }}
                centered={true} >
                <ModalHeader
                    className=""
                    toggle={() => {
                        setmodal(!modal)
                    }}
                >
                    Add New Category
                </ModalHeader>
                <ModalBody>

                </ModalBody>
            </Modal>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle className='d-flex justify-content-between'>
                                <div>
                                    <h4>Categories</h4>
                                </div>
                            </CardTitle>

                            <div className="table-responsive">
                                <Table bordered>
                                    <thead className="table-light">
                                        <tr>
                                            <th>Id</th>
                                            <th> Name</th>
                                            <th>Count</th>
                                            <th style={{ width: '10rem' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td>Mark</td>
                                            <td>30</td>
                                            <td>
                                                <div className="d-flex gap-3 users">
                                                    <ul className="list-inline font-size-20 contact-links mb-0">

                                                        <li className="list-inline-item">
                                                            <Link
                                                                to="/edit-post/1"
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
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col xl={4}>
                    <Card>
                        <CardBody>
                            <Form>
                                <Row>
                                    <Col>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="name">Category</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Enter category"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <div className="text-end">
                                            <button type="button" className="btn btn-success">
                                                Save
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>

                </Col>


            </Row>

        </React.Fragment>)
}

export default Categories;