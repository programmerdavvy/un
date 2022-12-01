import React, { useState } from "react";
import {
    Card, CardBody, Table, CardTitle, Label, Input, Row, Col, Button, UncontrolledTooltip, FormFeedback, FormGroup,
    Modal, ModalHeader, ModalBody, Form,
} from "reactstrap";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from 'react-redux'
import { updateLoader } from "../../../store/actions";
import toastr from "toastr"
import "toastr/build/toastr.min.css"
import { request } from "../../../services/utilities";
import { useEffect, useCallback } from "react";

const StakeHolder = () => {
    const dispatch = useDispatch();
    const [organization, setOrganization] = useState(null);
    const [organizations, setOrganizations] = useState(null);

    const fetchOrganizations = useCallback(async (page) => {
        dispatch(updateLoader(''));
        const p = page || 1;
        try {
            let url_org = `stakeholders`;
            const rs_org = await request(url_org, 'GET', false);
            setOrganizations(rs_org.result);
            dispatch(updateLoader('none'));

        } catch (err) {
            dispatch(updateLoader('none'));
            console.log(err);
        }
    }, []);
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
    const clearForm = () => {
        validation.values.firstname = '';
        validation.values.lastname = ''
        validation.values.email = ''
        validation.values.phone = ''
        validation.values.position = ''
        setOrganization(null);
    }

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            position: ''
                },
        validationSchema: Yup.object({
            firstname: Yup.string().required("Please Enter Your First Name"),
            lastname: Yup.string().required("Please Enter Your Last Name"),
            email: Yup.string()
                .email("Must be a valid Email")
                .max(255)
                .required("Email is required"),
            phone: Yup.number()
                // .max(12)
                .required("Please Enter Phone Number"),
            // organization: Yup.string().required("Please Select Organization"),
            position: Yup.string().required("Please Enter Position")

        }),
        onSubmit: async (e) => {
            if (organization === null) {
                return showToast('error', 'Kindly select an organization');
            }
            dispatch(updateLoader(''))

            const data = { firstName: e.firstname, lastname: e.lastname, email: e.email, phone: e.phone, position: e.position, stakeholderId: parseInt(organization) };
            try {
                let url = `users/register`;
                const rs = await request(url, 'POST', false, data);
                if (rs.success === true) {
                    showToast('success', 'Registered successfully');
                    dispatch(updateLoader('none'))
                    clearForm();
                }

            } catch (err) {
                dispatch(updateLoader('none'))
                console.log(err);
                showToast('error', 'Failed to register');
            }
        }
    });
    useEffect(() => {
        fetchOrganizations()
    }, [fetchOrganizations])

    return (

        <Card>
            <CardBody>
                <Form
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
                                    type="number"
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
                                <div className="mb-3">
                                    <select
                                        className="form-select"
                                        id="floatingSelectGrids"
                                        // aria-label="Select Categories"
                                        name="category"
                                        // style={{ height: '33px' }}
                                        onChange={e => setOrganization(e.target.value)}
                                    >
                                        <option>Select Organization</option>
                                        {organizations?.map(e => {
                                            return (
                                                <option key={e.id} value={e.id}>{e.name}</option>
                                            )
                                        })}

                                    </select>
                                </div>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button color="success" className="float-end" type="submit">
                        Register
                    </Button>
                </Form >
            </CardBody>
        </Card>
    );
};

export default StakeHolder;