import React from 'react'
import { Card, Modal, ModalHeader, ModalBody, Form, Row, Col, CardBody, CardTitle, Table, UncontrolledTooltip, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { request } from '../../../services/utilities';
import { useDispatch } from 'react-redux'
import { updateLoader } from "../../../store/actions";


function Organization(props) {
    const dispatch = useDispatch();
    const [modal, setmodal] = useState(false);
    const [name, setName] = useState('');
    const [id, setId] = useState(null);
    const [isEdit, setIsedit] = useState(false);

    const updateOrganization = async () => {
        dispatch(updateLoader(''))

        const data = { name };
        try {
            const url = `stakeholders?id=${id}`;
            const rs = await request(url, 'PATCH', false, data);
            if (rs.success === true) {
                props.showToast('success', 'Updated successfully');
                props.fetchOrganization();
                dispatch(updateLoader('none'))
                setIsedit(false);
                setName('');
                setmodal(!modal);
            }
        } catch (err) {
            dispatch(updateLoader('none'))
            console.log(err);
            props.showToast('error', 'Failed to update');

        }
    }
    const saveOrganization = async () => {
        dispatch(updateLoader(''))
        const data = { name };
        try {
            const url = `stakeholders`;
            const rs = await request(url, 'POST', false, data);
            if (rs.success === true) {
                props.showToast('success', 'Saved successfully');
                props.fetchOrganization();
                dispatch(updateLoader('none'))
                setIsedit(false);
                setName('');
                setmodal(!modal);

            }
        } catch (err) {
            dispatch(updateLoader('none'))
            console.log(err);
            props.showToast('error', 'Failed to save');

        }
    }
    const onClickDelete = async (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(updateLoader(''))

            try {
                const url = `stakeholders?id=${id}`;
                const rs = await request(url, 'DELETE', false);
                if (rs.success === true) {
                    props.showToast('success', 'Deleted successfully');
                    setIsedit(false);
                    props.fetchOrganization();
                    dispatch(updateLoader('none'))
                    setmodal(false);

                }
            } catch (err) {
                dispatch(updateLoader('none'))
                console.log(err);
                props.showToast('error', 'Failed to delete');

            }
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
                centered={false} >
                <ModalHeader
                    className=""
                    toggle={() => {
                        setIsedit(false);
                        setName('');
                        setmodal(!modal);
                    }}
                >

                    {isEdit === true ? 'Edit Organization' : 'Add New Organization'}

                </ModalHeader>
                <ModalBody className="p-2">
                    <Col>
                        <Card>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col>
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="name">Organization</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    onChange={e => setName(e.target.value)} value={name}
                                                    placeholder="Enter Organization"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <div className="text-end">
                                                <button type="button" onClick={isEdit === true ? updateOrganization : saveOrganization} className="btn btn-success">
                                                    {isEdit === true ? 'Update' : 'Save'}
                                                </button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </ModalBody>
            </Modal>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle className='d-flex justify-content-between'>
                                <div>
                                    <h4>Organization</h4>
                                </div>
                                <div>
                                    <Button color='primary' onClick={() => setmodal(!modal)}> New Entry</Button>
                                </div>
                            </CardTitle>

                            <div className="table-responsive">
                                <Table bordered striped>
                                    <thead className="table-light">
                                        <tr>
                                            <th>Id</th>
                                            <th> Name</th>
                                            <th style={{ width: '10rem' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.organization?.map((e, i) => {
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
                                                                        className="text-dark"
                                                                        onClick={() => {
                                                                            setName(e.name);
                                                                            setId(e.id);
                                                                            setIsedit(true);
                                                                            setmodal(!modal)
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
                                                                            onClickDelete(e.id)
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
                                <div className="d-flex justify-content-between">
                                    <div>Showing 1 to 10 of {props.organization?.length} entries</div>
                                    <Pagination aria-label="Page navigation example">
                                        <PaginationItem disabled>
                                            <PaginationLink
                                                first
                                                href="#"
                                            />
                                        </PaginationItem>
                                        <PaginationItem disabled>
                                            <PaginationLink
                                                href="#"
                                                previous
                                            />
                                        </PaginationItem>
                                        <PaginationItem active>
                                            <PaginationLink href="#">
                                                1
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#"
                                                last
                                            />
                                        </PaginationItem>
                                    </Pagination>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

            </Row>

        </React.Fragment>)
}

export default Organization;