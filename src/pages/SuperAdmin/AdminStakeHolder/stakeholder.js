import React, { useState } from "react";
import {
    Card, CardBody, Table, CardTitle, Label, Input, Row, Col, Button, UncontrolledTooltip, FormFeedback, FormGroup, Pagination, PaginationItem, PaginationLink,
    Modal, ModalHeader, ModalBody, Form,
} from "reactstrap";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";


const StakeHolder = () => {
    const [modal, setmodal] = useState(false);

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            position: '',
            organization: '',
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("Please Enter Your First Name"),
            lastname: Yup.string().required("Please Enter Your Last Name"),
            email: Yup.string()
                .email("Must be a valid Email")
                .max(255)
                .required("Email is required"),
            phone: Yup.string()
                .max(12)
                .required("Phone number is required"),
            organization: Yup.string().required("Please Select Organization"),
            position: Yup.string().required("Please Enter Position"),

        }),
        onSubmit: (values) => {
            console.log("values", values);
        }
    });


    return (

        <Row>
            <Modal
                size="xl"
                className=""
                isOpen={modal}
                toggle={() => {
                    setmodal(!modal)
                }}
                centered={false} >
                <ModalHeader
                    className=""
                    toggle={() => {
                        setmodal(!modal)
                    }}
                >
                    Register StakeHolder
                </ModalHeader>
                <ModalBody className="p-2">
                    {/* <Card>
                        <CardBody> */}
                    <Form className="needs-validation"
                        onSubmit={(e) => {
                            e.preventDefault();
                            validation.handleSubmit();
                            return false;
                        }}
                    >
                        <Row>
                            <Col md="6">
                                <FormGroup className="mb-3">
                                    <Label htmlFor="validationCustom01">First name</Label>
                                    <Input
                                        name="firstname"
                                        placeholder="First name"
                                        type="text"
                                        className="form-control"
                                        id="validationCustom01"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.firstname || ""}
                                        invalid={
                                            validation.touched.firstname && validation.errors.firstname ? true : false
                                        }
                                    />
                                    {validation.touched.firstname && validation.errors.firstname ? (
                                        <FormFeedback type="invalid">{validation.errors.firstname}</FormFeedback>
                                    ) : null}
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup className="mb-3">
                                    <Label htmlFor="validationCustom02">Last name</Label>
                                    <Input
                                        name="lastname"
                                        placeholder="Last name"
                                        type="text"
                                        className="form-control"
                                        id="validationCustom02"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.lastname || ""}
                                        invalid={
                                            validation.touched.lastname && validation.errors.lastname ? true : false
                                        }
                                    />
                                    {validation.touched.lastname && validation.errors.lastname ? (
                                        <FormFeedback type="invalid">{validation.errors.lastname}</FormFeedback>
                                    ) : null}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <FormGroup className="mb-3">
                                    <Label htmlFor="validationCustom01">Email</Label>
                                    <Input
                                        name="email"
                                        placeholder="Email Address"
                                        type="email"
                                        className="form-control"
                                        id="validationCustom01"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.email || ""}
                                        invalid={
                                            validation.touched.email && validation.errors.email ? true : false
                                        }
                                    />
                                    {validation.touched.email && validation.errors.email ? (
                                        <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                    ) : null}
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup className="mb-3">
                                    <Label htmlFor="validationCustom02">Phone Number</Label>
                                    <Input
                                        name="phone"
                                        placeholder="Phone Numner"
                                        type="phone"
                                        className="form-control"
                                        id="validationCustom02"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.phone || ""}
                                        invalid={
                                            validation.touched.phone && validation.errors.phone ? true : false
                                        }
                                    />
                                    {validation.touched.phone && validation.errors.phone ? (
                                        <FormFeedback type="invalid">{validation.errors.phone}</FormFeedback>
                                    ) : null}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <FormGroup className="mb-3">
                                    <Label htmlFor="validationCustom01">Position</Label>
                                    <Input
                                        name="position"
                                        placeholder="Position"
                                        type="text"
                                        className="form-control"
                                        id="validationCustom01"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.position || ""}
                                        invalid={
                                            validation.touched.position && validation.errors.position ? true : false
                                        }
                                    />
                                    {validation.touched.position && validation.errors.position ? (
                                        <FormFeedback type="invalid">{validation.errors.position}</FormFeedback>
                                    ) : null}
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup className="mb-3">
                                    <Label htmlFor="validationCustom02">Select Organization</Label>
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
                                            value={validation.values.organization || ""}
                                            invalid={
                                                validation.touched.organization && validation.errors.organization ? true : false
                                            }
                                        >
                                            <option>Select Organization</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        {validation.touched.organization && validation.errors.organization ? (
                                            <FormFeedback type="invalid">{validation.errors.organization}</FormFeedback>
                                        ) : null}
                                        <label htmlFor="floatingSelectGrid">
                                            Organization
                                        </label>
                                    </div>
                                </FormGroup>
                            </Col>
                        </Row>

                        <Button color="success" className="float-end" type="submit">
                            Register
                        </Button>
                    </Form>
                    {/* </CardBody>
                    </Card> */}
                </ModalBody>
            </Modal>
            <Col lg={12}>
                <Card>
                    <CardBody>
                        <div className="d-flex justify-content-between">
                            <CardTitle className="h4 mb-4">Stakeholders</CardTitle>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <Input placeholder="search" />
                                </div>
                                <div>
                                    <Button className="mx-2" onClick={() => setmodal(!modal)} color="primary">
                                        Add New
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <Table className="table-centered table-nowrap mb-0" striped bordered>
                                <thead className="table-light">
                                    <tr>
                                        <th>Name</th>
                                        <th>Ministry</th>
                                        <th>Position</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>James John</td>
                                        <td>
                                            Ministry of health
                                        </td>
                                        <td>
                                            2nd level
                                        </td>
                                        <td>
                                            amamam@gmail.com
                                        </td>
                                        <td>
                                            0908833883
                                        </td>
                                        <td>
                                            <div className="d-flex gap-3 users">
                                                <ul className="list-inline font-size-20 contact-links mb-0">

                                                    <li className="list-inline-item">
                                                        <Link
                                                            to="/admin-edit-post/1"
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
                                    <tr>

                                        <td>James John</td>
                                        <td>
                                            Ministry of health
                                        </td>
                                        <td>
                                            2nd level
                                        </td>
                                        <td>
                                            amamam@gmail.com
                                        </td>
                                        <td>
                                            0908833883
                                        </td>
                                        <td>
                                            <div className="d-flex gap-3 users">
                                                <ul className="list-inline font-size-20 contact-links mb-0">

                                                    <li className="list-inline-item">
                                                        <Link
                                                            to="/admin-edit-post/1"
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
                                    </tr> <tr>

                                        <td>James John</td>
                                        <td>
                                            Ministry of health
                                        </td>
                                        <td>
                                            2nd level
                                        </td>
                                        <td>
                                            amamam@gmail.com
                                        </td>
                                        <td>
                                            0908833883
                                        </td>
                                        <td>
                                            <div className="d-flex gap-3 users">
                                                <ul className="list-inline font-size-20 contact-links mb-0">

                                                    <li className="list-inline-item">
                                                        <Link
                                                            to="/admin-edit-post/1"
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
                                    </tr> <tr>

                                        <td>James John</td>
                                        <td>
                                            Ministry of health
                                        </td>
                                        <td>
                                            2nd level
                                        </td>
                                        <td>
                                            amamam@gmail.com
                                        </td>
                                        <td>
                                            0908833883
                                        </td>
                                        <td>
                                            <div className="d-flex gap-3 users">
                                                <ul className="list-inline font-size-20 contact-links mb-0">

                                                    <li className="list-inline-item">
                                                        <Link
                                                            to="/admin-edit-post/1"
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
                                    </tr> <tr>

                                        <td>James John</td>
                                        <td>
                                            Ministry of health
                                        </td>
                                        <td>
                                            2nd level
                                        </td>
                                        <td>
                                            amamam@gmail.com
                                        </td>
                                        <td>
                                            0908833883
                                        </td>
                                        <td>
                                            <div className="d-flex gap-3 users">
                                                <ul className="list-inline font-size-20 contact-links mb-0">

                                                    <li className="list-inline-item">
                                                        <Link
                                                            to="/admin-edit-post/1"
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
                            <div className="d-flex justify-content-between mt-4">
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
    );
};

export default StakeHolder;