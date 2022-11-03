import React from 'react'
import { Card, Modal, ModalHeader, ModalBody, Form, Row, Col, CardBody, CardTitle, Table, UncontrolledTooltip, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { request } from '../../../services/utilities';


function VideoCategory(props) {

    const [modal, setmodal] = useState(false);
    const [name, setName] = useState('');
    const [id, setId] = useState(null);

    const addCategory = async () => {
        let data = { name, type: 'Video', pageId: 11 };
        let url = `category`;
        try {
            const rs = await request(url, 'POST', false, data);
            if (rs.success === true) {
                setName('');
                props.fetchCategories();
                setmodal(!modal);
                props.showToast('success', 'Saved successfully ');
            }

        } catch (err) {
            console.log(err);
            props.showToast('error', 'Failed to save')
        }
    }
    const updateCategory = async () => {
        let data = { name, id };
        let url = `category/edit`;
        try {
            const rs = await request(url, 'PATCH', false, data);
            if (rs.success === true) {
                setId(null);
                setName('');
                props.fetchCategories();
                setmodal(!modal);
                props.showToast('success', 'Updated successfully ');
            }

        } catch (err) {
            console.log(err);
            props.showToast('error', 'Failed to update')
        }
    }
    const onClickDelete = async (id) => {
        let url = `category/delete/?id=${id}`;
        try {
            const rs = await request(url, 'DELETE', false);
            console.log(rs);
            if (rs.success === true) {
                props.fetchCategories();
                props.showToast('success', 'Deleted successfully ');
            }

        } catch (err) {
            console.log(err);
            props.showToast('error', 'Failed to delete')
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
                        setId(null);
                        setName('');
                        setmodal(!modal);
                    }}
                >
                    {id === null ? 'Add New Category' : 'Edit Category'}
                </ModalHeader>
                <ModalBody>
                    <Card>
                        <CardBody>
                            <Form>
                                <Row>
                                    <Col>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="name">Video Category</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={e => setName(e.target.value)}
                                                value={name}
                                                id="name"
                                                placeholder="Enter Video Category"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12}>
                                        <div className="text-end">
                                            <button type="button" onClick={id === null ? addCategory : updateCategory} className="btn btn-success">
                                                {id === null ? 'Save' : 'Update'}
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
                                    <h4>Video Category</h4>
                                </div>
                                <div>
                                    <Button color='primary' onClick={() => setmodal(!modal)}>Add New</Button>
                                </div>
                            </CardTitle>

                            <div className="table-responsive">
                                <Table bordered>
                                    <thead className="table-light">
                                        <tr>
                                            <th>Id</th>
                                            <th> Name</th>
                                            <th style={{ width: '10rem' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.categories?.map((e, i) => {
                                            return (
                                                <tr>
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
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </React.Fragment>)
}

export default VideoCategory;