import React, { useState } from 'react'
import { Card, CardBody, Col, Row, FormFeedback, Form, Input, Label, Button, FormGroup } from 'reactstrap'
import * as Yup from "yup";
import { useFormik } from "formik";
import Dropzone from "react-dropzone"
import { Link, } from 'react-router-dom'

const NewPost = () => {
    const id = ''
    const [selectedFiles, setselectedFiles] = useState([])

    function handleAcceptedFiles(files) {
        files.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            })
        )
        setselectedFiles(files)
    }
    /**
     * Formats the size
     */
    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return "0 Bytes"
        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
    }
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            title: '',
            description: '',
            city: '',
            state: '',
            housenumber: '',
            landmark: '',
            lga: '',
            rname: '',
            email: '',
            phone: '',
            categories: ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Please Enter Child Name"),
            description: Yup.string().required("Please Enter Description"),
            city: Yup.string().required("Please Enter Your City"),
            rname: Yup.string().required("Please Enter Name"),
            state: Yup.string().required("Please Enter Your State"),
            housenumber: Yup.string().required("Please Enter Your House Number"),
            landmark: Yup.string().required("Please Enter Your Landmark"),
            lga: Yup.string().required("Please Enter Your LGA"),
            categories: Yup.string().required("Please Select Categories"),
            email: Yup.string()
                .email("Must be a valid Email")
                .max(255)
                .required("Email is required"),
            phone: Yup.string()
                .max(12)
                .required("Phone number is required"),
        }),
        onSubmit: (values) => {
            console.log("values", values);
        }
    });
    return (
        <React.Fragment>

            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            {/* <h4 className="card-title"> Report Incident</h4> */}
                            <h5 className=''>Child Labour Adolescent Details</h5>
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
                                            <Label htmlFor="validationCustom01">Name of Child</Label>
                                            <Input
                                                name="title"
                                                placeholder="Name of Child"
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
                                    <Col>
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="validationCustom01"> Categories</Label>
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
                                <Row>
                                    <Col>
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="validationCustom02">Incident Description</Label>
                                            <Input
                                                name="description"
                                                placeholder="Incident Description"
                                                type="textarea"
                                                className="form-control"
                                                id="validationCustom02"
                                                rows="10"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.description || ""}
                                                invalid={
                                                    validation.touched.description && validation.errors.description ? true : false
                                                }
                                            />
                                            {validation.touched.description && validation.errors.description ? (
                                                <FormFeedback type="invalid">{validation.errors.description}</FormFeedback>
                                            ) : null}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {/* <Card>
                                                    <CardBody> */}
                                        <Form>
                                            <Dropzone
                                                onDrop={acceptedFiles => {
                                                    handleAcceptedFiles(acceptedFiles)
                                                }}
                                            >
                                                {({ getRootProps, getInputProps }) => (
                                                    <div className="dropzone">
                                                        <div
                                                            className="dz-message needsclick"
                                                            {...getRootProps()}
                                                        >
                                                            <input {...getInputProps()} />
                                                            <div className="mb-3">
                                                                <i className="display-4 text-muted uil uil-cloud-upload" />
                                                            </div>
                                                            <h4>Attache Media File.</h4>
                                                        </div>
                                                    </div>
                                                )}
                                            </Dropzone>
                                            <div className="dropzone-previews mt-3" id="file-previews">
                                                {selectedFiles.map((f, i) => {
                                                    return (
                                                        <Card
                                                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                            key={i + "-file"}
                                                        >
                                                            <div className="p-2">
                                                                <Row className="align-items-center">
                                                                    <Col className="col-auto">
                                                                        <img
                                                                            data-dz-thumbnail=""
                                                                            height="80"
                                                                            className="avatar-sm rounded bg-light"
                                                                            alt={f.name}
                                                                            src={f.preview}
                                                                        />
                                                                    </Col>
                                                                    <Col>
                                                                        <Link
                                                                            to="#"
                                                                            className="text-muted font-weight-bold"
                                                                        >
                                                                            {f.name}
                                                                        </Link>
                                                                        <p className="mb-0">
                                                                            <strong>{f.formattedSize}</strong>
                                                                        </p>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </Card>
                                                    )
                                                })}
                                            </div>
                                        </Form>

                                        {/* <div className="text-center mt-4">
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary waves-effect waves-light"
                                                            >
                                                                Upload Document
                                                            </button>
                                                        </div> */}
                                        {/* </CardBody>
                                                </Card> */}
                                    </Col>
                                </Row>
                                <h5>Address where child is found</h5>
                                <Row>
                                    <Col>
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="validationCustom01">House Number</Label>
                                            <Input
                                                name="housenumber"
                                                placeholder="House Number"
                                                type="text"
                                                className="form-control"
                                                id="validationCustom01"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.housenumber || ""}
                                                invalid={
                                                    validation.touched.housenumber && validation.errors.housenumber ? true : false
                                                }
                                            />
                                            {validation.touched.housenumber && validation.errors.housenumber ? (
                                                <FormFeedback type="invalid">{validation.errors.housenumber}</FormFeedback>
                                            ) : null}
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="validationCustom01">Landmark</Label>
                                            <Input
                                                name="landmark"
                                                placeholder="Landmark"
                                                type="text"
                                                className="form-control"
                                                id="validationCustom01"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.landmark || ""}
                                                invalid={
                                                    validation.touched.landmark && validation.errors.landmark ? true : false
                                                }
                                            />
                                            {validation.touched.landmark && validation.errors.landmark ? (
                                                <FormFeedback type="invalid">{validation.errors.landmark}</FormFeedback>
                                            ) : null}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="validationCustom01">City</Label>
                                            <Input
                                                name="city"
                                                placeholder="City"
                                                type="text"
                                                className="form-control"
                                                id="validationCustom01"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.city || ""}
                                                invalid={
                                                    validation.touched.city && validation.errors.city ? true : false
                                                }
                                            />
                                            {validation.touched.city && validation.errors.city ? (
                                                <FormFeedback type="invalid">{validation.errors.city}</FormFeedback>
                                            ) : null}
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="validationCustom01">State</Label>
                                            <Input
                                                name="state"
                                                placeholder="State"
                                                type="text"
                                                className="form-control"
                                                id="validationCustom01"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.state || ""}
                                                invalid={
                                                    validation.touched.state && validation.errors.state ? true : false
                                                }
                                            />
                                            {validation.touched.state && validation.errors.state ? (
                                                <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                                            ) : null}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="validationCustom01">Local Government Area</Label>
                                            <Input
                                                name="lga"
                                                placeholder="LGA"
                                                type="text"
                                                className="form-control"
                                                id="validationCustom01"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.lga || ""}
                                                invalid={
                                                    validation.touched.lga && validation.errors.lga ? true : false
                                                }
                                            />
                                            {validation.touched.lga && validation.errors.lga ? (
                                                <FormFeedback type="invalid">{validation.errors.lga}</FormFeedback>
                                            ) : null}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <h5>Report Details</h5>

                                <Row>
                                    <Col>
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="validationCustom01">Name</Label>
                                            <Input
                                                name="rname"
                                                placeholder="Name of Child"
                                                type="text"
                                                className="form-control"
                                                id="validationCustom01"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.rname || ""}
                                                invalid={
                                                    validation.touched.rname && validation.errors.rname ? true : false
                                                }
                                            />
                                            {validation.touched.rname && validation.errors.rname ? (
                                                <FormFeedback type="invalid">{validation.errors.rname}</FormFeedback>
                                            ) : null}
                                        </FormGroup>
                                    </Col>

                                </Row>

                                <Row>
                                    <Col>
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
                                    <Col>
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="validationCustom01">Phone Number</Label>
                                            <Input
                                                name="phone"
                                                placeholder="Phone Number"
                                                type="number"
                                                className="form-control"
                                                id="validationCustom01"
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
                                <Button className='float-end' color="success" type="submit">
                                    Submit
                                </Button>

                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                {/* <Col xl={3} >

                </Col> */}
            </Row>
        </React.Fragment >
    )
}

export default NewPost