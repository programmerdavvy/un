import React from 'react'
import { Card, Modal, ModalHeader, ModalBody, Form, Row, Col, CardBody, CardTitle, Table, UncontrolledTooltip, Button, Pagination, PaginationLink, PaginationItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { request } from '../../../services/utilities';

function Categories(props) {

    const [modal, setmodal] = useState(false);
    const [name, setName] = useState('');

    const isSuperAdmin = false

    const addCategory = async () => {
        let data = { name, type: 'Post' };
        let url = `category`;
        console.log(data);
        try {
            const rs = await request(url, 'POST', false, data);
            if (rs.success === true) {
                setmodal(!modal);
                props.showToast('success', 'Saved successfully ');
            }

        } catch (err) {
            console.log(err);
            props.showToast('error', 'Failed to save')
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
                        setmodal(!modal)
                    }}
                >
                    Add New Category
                </ModalHeader>
                <ModalBody>
                    <Card>
                        <CardBody>
                            <Form>
                                <Row>
                                    <Col>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="name">Category</label>
                                            <input
                                                type="text"
                                                onChange={e => setName(e.target.value)}
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
                                            <button type="button" onClick={addCategory} className="btn btn-success">
                                                Save
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
                            <CardTitle className='d-flex justify-content-between'>
                                <div>
                                    <h4>Categories</h4>
                                </div>
                                <div>
                                    <Button color='primary' onClick={() => setmodal(!modal)}>New Category</Button>
                                </div>
                            </CardTitle>

                            <div className="table-responsive">
                                <Table bordered striped>
                                    <thead className="table-light ">
                                        <tr>
                                            <th className='w-25'>Category Id</th>
                                            <th> Name</th>
                                            <th>Count</th>
                                            <th style={{ width: '10rem' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.categories.map((e, i) => {
                                            return (
                                                <tr className='text-capitalize' key={i}>
                                                    <th>{e.id}</th>
                                                    <td>{e.name}</td>
                                                    <td>30</td>
                                                    <td>
                                                            <div className="d-flex gap-3 users">
                                                                <ul className="list-inline font-size-20 contact-links mb-0">
                                                                    <li className="list-inline-item">
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
                                <div className="d-flex justify-content-between">
                                    <div>Showing 1 to 10 of 57 entries</div>
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
                                            <PaginationLink href="#">
                                                2
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem disabled>
                                            <PaginationLink href="#">
                                                3
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">
                                                4
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">
                                                5
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#"
                                                next
                                            />
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

export default Categories;