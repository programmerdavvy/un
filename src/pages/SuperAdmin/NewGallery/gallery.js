import React, { useState } from 'react'
import { Card, CardBody, Col, Row, FormFeedback, Form, Input, Label, Button, FormGroup, InputGroup } from 'reactstrap'
import * as Yup from "yup";
import { useFormik } from "formik";
import Dropzone from "react-dropzone"
import { Link, } from 'react-router-dom'
import Flatpickr from "react-flatpickr"
import { request } from '../../../services/utilities';


const NewEvent = () => {
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
            startdate: '',
            enddate: '',
            starttime: '',
            endtime: '',
            venue: '',
            categories: ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Please Enter Child Name"),
            description: Yup.string().required("Please Enter Description"),
            startdate: Yup.string().required("Please Enter Date"),
            enddate: Yup.string().required("Please Enter Date"),
            starttime: Yup.string().required("Please Enter Time"),
            endtime: Yup.string().required("Please Enter Time"),
            venue: Yup.string().required("Please Enter Venue"),
            categories: Yup.string().required("Please Select Categories")
        }),
        onSubmit: async (values) => {
            const data = {}
            try {
                let url = ``;
                const rs = await request(url, 'POST', false, data)
            } catch (err) {

            }
        }
    });

    return (
        <React.Fragment>

            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            {/* <h4 className="card-title"> Report Incident</h4> */}
                            <h5 className=''>Add Event</h5>
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

                                {/* image */}

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
                                                            <h4>Attache Featured Image.</h4>
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

                                {/* end of image */}

                                <Button className='float-end' color="success" type="submit">
                                    Publish
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

export default NewEvent 