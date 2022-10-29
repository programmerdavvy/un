import React, { useState, useEffect, useCallback } from "react";
import { Card, CardBody, Table, CardTitle, Form, Label, Input, Row, FormGroup, FormFeedback, ModalHeader, Col, Button, UncontrolledTooltip, Modal, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
import { request } from "../../../services/utilities";
import * as Yup from "yup";
import { useFormik } from "formik";


const IndividualSubmission = (props) => {

    const [modal, setmodal] = useState(false);
    const [name, setName] = useState('');

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            title: '',
            link: '',
            categories: ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Please Enter Title"),
            link: Yup.string().required("Please Enter Embed Link"),
            categories: Yup.string().required("Please Select Categories")
        }),
        onSubmit: async (values) => {
            // console.log("values", values);
            let data = { title: values.title, link: values.link, categories: values.categories };
            let url = `category`;
            try {
                const rs = await request(url, 'POST', false, data);
                console.log(rs);
                if (rs.success === true) {
                    setmodal(!modal);
                    props.showToast('success', 'Saved successfully ');
                }

            } catch (err) {
                console.log(err);
                props.showToast('error', 'Failed to save')
            }
        }
    });

    return (
        <Row>
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
                            <Form className="needs-validation"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    validation.handleSubmit();
                                    return false;
                                }}
                            >
                                <Row>
                                    <Col>
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="validationCustom01">Title</Label>
                                            <Input
                                                name="title"
                                                placeholder="Enter Title"
                                                type="text"
                                                className="form-control"
                                                id="validationCustom01"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.title || ""}
                                                invalid={
                                                    validation.touched.title && validation.errors.title ? true : false
                                                }
                                            />
                                            {validation.touched.title && validation.errors.title ? (
                                                <FormFeedback type="invalid">{validation.errors.title}</FormFeedback>
                                            ) : null}
                                        </FormGroup>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="validationCustom01">Embed Link</Label>
                                            <Input
                                                name="link"
                                                placeholder="Enter link"
                                                type="text"
                                                className="form-control"
                                                id="validationCustom01"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.link || ""}
                                                invalid={
                                                    validation.touched.link && validation.errors.link ? true : false
                                                }
                                            />
                                            {validation.touched.link && validation.errors.link ? (
                                                <FormFeedback type="invalid">{validation.errors.link}</FormFeedback>
                                            ) : null}
                                        </FormGroup>
                                    </Col>

                                </Row>

                                <Row>
                                    <Col>
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="validationCustom01">Select Categories</Label>
                                            <div className="form-floating mb-3">
                                                <select
                                                    className="form-select"
                                                    id="floatingSelectGrid"
                                                    // aria-label="Select Categories"
                                                    name="category"
                                                    style={{ height: '30px' }}
                                                    // id="validationCustom01"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.categories || ""}
                                                    invalid={
                                                        validation.touched.categories && validation.errors.categories ? true : false
                                                    }
                                                >
                                                    <option>Select Categories</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                {validation.touched.categories && validation.errors.categories ? (
                                                    <FormFeedback type="invalid">{validation.errors.categories}</FormFeedback>
                                                ) : null}
                                                <label htmlFor="floatingSelectGrid">
                                                    Categories
                                                </label>
                                            </div>

                                        </FormGroup>
                                    </Col>
                                </Row>


                                <Button className='float-end' color="success" type="submit">
                                    Publish
                                </Button>

                            </Form>
                        </CardBody>
                    </Card>
                </ModalBody>
            </Modal>
            <Col lg={12}>
                <Card>
                    <CardBody>
                        <CardTitle className="d-flex justify-content-between mb-4">
                            <div>
                                <h4>Video's</h4>
                            </div>
                            <div>
                                <Button onClick={() => setmodal(!modal)} color="primary">Add New</Button>
                            </div>
                        </CardTitle>
                        <div className="table-responsive">
                            <Table className="table-centered table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>Embed Link</th>
                                        <th> Date Published</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>#rer444</td>
                                        <td>
                                            News Video
                                        </td>
                                        <td>
                                            video.mp4
                                        </td>
                                        <td>
                                            10 Oct, 2019
                                        </td>
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
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default IndividualSubmission;