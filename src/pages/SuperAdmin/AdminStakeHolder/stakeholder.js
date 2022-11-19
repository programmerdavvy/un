import React, { useState } from "react";
import {
    Card, CardBody, Table, CardTitle, Label, Input, Row, Col, Button, UncontrolledTooltip, FormFeedback, FormGroup, Pagination, PaginationItem, PaginationLink,
    Modal, ModalHeader, ModalBody, Form,
} from "reactstrap";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import ReactPaginate from "react-paginate";
import { request } from "../../../services/utilities";
import { useDispatch } from 'react-redux'
import { updateLoader } from "../../../store/actions";


const StakeHolder = (props) => {
    const dispatch = useDispatch();
    const [modal, setmodal] = useState(false);
    const [organization, setOrganization] = useState(null)
    const [id, setId] = useState(null);
    const [isEdit, setIsedit] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPosition] = useState(null);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(null);



    const updateStakeholder = async () => {
        dispatch(updateLoader(''))
        const data = { firstName, lastName, email, position, stakeholderId: organization, phone };
        console.log(data);
        try {
            const url = `users?id=${id}`;
            const rs = await request(url, 'PATCH', false, data);
            if (rs.success === true) {
                props.showToast('success', 'Updated successfully');
                props.fetchStakeholders();
                dispatch(updateLoader('none'))

                setIsedit(false);
                clearForm();
                setmodal(!modal);
            }
        } catch (err) {
            dispatch(updateLoader('none'))
            console.log(err);
            props.showToast('error', 'Failed to update');

        }
    }

    const onClickDelete = async (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(updateLoader('none'))
            try {
                const url = `users?id=${id}`;
                const rs = await request(url, 'DELETE', false);
                if (rs.success === true) {
                    props.showToast('success', 'Deleted successfully');
                    setIsedit(false);
                    props.fetchStakeholders();
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
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            firstname: firstName,
            lastname: lastName,
            email: email,
            phone: phone,
            position: position,
            // organization: '',
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
            // organization: Yup.string().required("Please Select Organization"),
            position: Yup.string().required("Please Enter Position"),

        }),
        onSubmit: async e => {
            if (isEdit === true) {
                updateStakeholder();
            } else {
                dispatch(updateLoader(''))

                const data = { firstName: e.firstname, lastname: e.lastname, email: e.email, phone: e.phone, position: e.position, stakeholderId: parseInt(organization) };
                try {
                    let url = `users/register`;
                    const rs = await request(url, 'POST', false, data);
                    if (rs.success === true) {
                        props.showToast('success', 'Registered successfully');
                        props.fetchStakeholders();
                        dispatch(updateLoader('none'))

                        setIsedit(false);
                        clearForm();
                        setmodal(!modal);
                    }

                } catch (err) {
                    dispatch(updateLoader('none'))
                    console.log(err);
                    props.showToast('error', 'Failed to register');
                }
            }

        }
    });

    const setEditValues = i => {
        const e = props.stakeholders[i];
        setFirstName(e.firstName);
        setLastName(e.lastname);
        setEmail(e.email)
        setPhone(e.phone);
        setPosition(e.position);
        setOrganization(e.stakeholderId);
        setId(e.id);
        setIsedit(true);
        setmodal(!modal);
    }

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('')
        setPhone('');
        setPosition('');
        setOrganization(null);
        setId(null);
    }

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
                        clearForm();
                        setIsedit(false);
                        setmodal(!modal);
                    }}
                >
                    {isEdit === true ? 'Edit StakeHolder' : 'Register StakeHolder'}
                </ModalHeader>
                <ModalBody className="p-2">
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
                                    <Col md="6">
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="validationCustom01">First name</Label>
                                            <Input
                                                name="firstname"
                                                placeholder="First name"
                                                type="text"
                                                className="form-control"
                                                id="validationCustom01"
                                                onChange={(e) => {
                                                    setFirstName(e.target.value);
                                                    // validation.handleChange();
                                                }}
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
                                                onChange={e => {
                                                    setLastName(e.target.value);
                                                    // validation.handleChange
                                                }}
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
                                                onChange={e =>
                                                    setEmail(e.target.value)
                                                    // validation.handleChange
                                                }
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
                                                type="number"
                                                className="form-control"
                                                id="validationCustom02"
                                                onChange={e =>
                                                    setPhone(e.target.value)
                                                    // validation.handleChange
                                                }
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
                                                onChange={e =>
                                                    setPosition(e.target.value)
                                                    // validation.handleChange
                                                }
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
                                            <div className=" mb-3">
                                                <select
                                                    className="form-select"
                                                    id="floatingSelectGrid"
                                                    // aria-label="Select Categories"
                                                    name="category"
                                                    style={{ height: '30px' }}
                                                    // id="validationCustom01"
                                                    onChange={e => setOrganization(e.target.value)}
                                                // onBlur={validation.handleBlur}
                                                // value={validation.values.organization || ""}
                                                // invalid={
                                                //     validation.touched.organization && validation.errors.organization ? true : false
                                                // }
                                                >
                                                    <option>Select Organization</option>
                                                    {props.organizations?.map(e => {
                                                        return (
                                                            <option key={e.id} value={e.id}>{e.name}</option>
                                                        )
                                                    })}

                                                </select>
                                                {/* {validation.touched.organization && validation.errors.organization ? (
                                                    <FormFeedback type="invalid">{validation.errors.organization}</FormFeedback>
                                                ) : null} */}
                                                
                                            </div>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Button color="success" className="float-end" type="submit">
                                    {isEdit === true ? 'Update' : 'Register'}
                                </Button>
                            </Form>
                        </CardBody>
                    </Card>
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
                                    {props.stakeholders.map((e, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{e.firstName} {e.lastname}</td>
                                                <td>
                                                    {e.stakeholder?.name}
                                                </td>
                                                <td>
                                                    {e.position}
                                                </td>
                                                <td>
                                                    {e.email}
                                                </td>
                                                <td>
                                                    {e.phone}
                                                </td>
                                                <td>
                                                    <div className="d-flex gap-3 users">
                                                        <ul className="list-inline font-size-20 contact-links mb-0">

                                                            <li className="list-inline-item">
                                                                <Link
                                                                    to="#"
                                                                    className="text-dark"
                                                                    onClick={() => {
                                                                        setEditValues(i);
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

export default StakeHolder;