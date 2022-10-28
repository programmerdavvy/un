import React from 'react'
import { Card, Modal, ModalHeader, ModalBody, Form, Row, Col, CardBody, CardTitle, Table, UncontrolledTooltip, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { request } from '../../../services/utilities';
import toastr from "toastr"
import "toastr/build/toastr.min.css"


function Status(props) {
    const [name, setName] = useState('');

    const showToast = (error) => {
        let positionClass = "toast-top-right"
        let toastType
        let message = "Have fun storming the castle!"
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
        console.log(data);

        try {
            const url = `status`;
            const rs = await request(url, 'POST', false, data);
            console.log(rs);
            showToast('success', 'successfully saved');

        } catch (err) {
            console.log(err);
            showToast('error', 'Failed to save');

        }
    }
    return (
        <React.Fragment>

            <Row>
                <Col xl={8}>
                    <Card>
                        <CardBody>
                            <CardTitle className='d-flex justify-content-between'>
                                <div>
                                    <h4>Status</h4>
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

                                                                <li className="list-inline-item">
                                                                    <Link
                                                                        to="#"
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
                                        })}

                                    </tbody>
                                </Table>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
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
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <div className="text-end">
                                            <button type="button" onClick={saveStatus} className="btn btn-success">
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

export default Status;