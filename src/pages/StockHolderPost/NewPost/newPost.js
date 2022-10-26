import React, { useState } from 'react'
import { Card, CardBody, Col, Row, FormFeedback, Form, Input, Label, Button, FormGroup } from 'reactstrap'
import * as Yup from "yup";
import { useFormik } from "formik";
import Dropzone from "react-dropzone"
import { Link, } from 'react-router-dom'
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"


const NewIncident = () => {
    const id = '';
    const [selectedFiles, setselectedFiles] = useState([]);

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
            zip: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Please Enter Title"),
            description: Yup.string().required("Please Enter Paragraph"),
            city: Yup.string().required("Please Enter Your City"),
            state: Yup.string().required("Please Enter Your State"),
            zip: Yup.string().required("Please Enter Your Zip"),
        }),
        onSubmit: (values) => {
            console.log("values", values);
        }
    });
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <h4 className="card-title">{id.id ? 'Edit' : 'Add'} Post</h4>

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
                                                        placeholder="Title"
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
                                                    <Label htmlFor="validationCustom02">Paragraph</Label>
                                                    {/* <Input
                                                        name="description"
                                                        placeholder="Paragraph"
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
                                                    /> */}
                                                    <Editor
                                                        toolbarClassName="toolbarClassName"
                                                        wrapperClassName="wrapperClassName"
                                                        editorClassName="editorClassName"
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
                                                                    <h4>Add Documents.</h4>
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

                                        <div className='d-flex justify-content-between'>
                                            <Row>
                                                <Col lg="12">
                                                    <FormGroup className="mb-3">
                                                        <div className="form-check">
                                                            <Input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                id="invalidCheck"
                                                            />
                                                            <Label
                                                                className="form-check-label"
                                                                htmlFor="invalidCheck"
                                                            >
                                                                {" "}
                                                                Allow Comments
                                                            </Label>
                                                        </div>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <div>
                                                <Button color="primary" type="submit">
                                                    Publish
                                                </Button>
                                            </div>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={3} >
                            <Card className='mb-2'>
                                <CardBody>
                                    <h4 className="card-title">Categories</h4>
                                    <Row>
                                        <Col lg="12">
                                            <FormGroup className="mb-3">
                                                <div className="form-check">
                                                    <Input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="invalidCheck"
                                                    />
                                                    <Label
                                                        className="form-check-label"
                                                        htmlFor="invalidCheck"
                                                    >
                                                        {" "}
                                                        Resources
                                                    </Label>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12">
                                            <FormGroup className="mb-3">
                                                <div className="form-check">
                                                    <Input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="invalidCheck"
                                                    />
                                                    <Label
                                                        className="form-check-label"
                                                        htmlFor="invalidCheck"
                                                    >
                                                        {" "}
                                                        Article
                                                    </Label>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="12">
                                            <FormGroup className="mb-3">
                                                <div className="form-check">
                                                    <Input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="invalidCheck"
                                                    />
                                                    <Label
                                                        className="form-check-label"
                                                        htmlFor="invalidCheck"
                                                    >
                                                        {" "}
                                                        News
                                                    </Label>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
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
                                                        <h4>Add Feature Image.</h4>
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

                                    <div className="text-center mt-4">
                                        <button
                                            type="button"
                                            className="btn btn-primary waves-effect waves-light"
                                        >
                                            Upload Image
                                        </button>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <div>
                                        <FormGroup className="mb-3">
                                            <Label htmlFor="validationCustom01">Tags</Label>
                                            <Input
                                                name="tag"
                                                placeholder="Tags"
                                                type="text"
                                                className="form-control"
                                                id="validationCustom01"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.tag || ""}
                                                invalid={
                                                    validation.touched.tag && validation.errors.tag ? true : false
                                                }
                                            />
                                            {validation.touched.tag && validation.errors.tag ? (
                                                <FormFeedback type="invalid">{validation.errors.tag}</FormFeedback>
                                            ) : null}
                                        </FormGroup>
                                    </div>
                                    <button className='btn btn-primary float-end'>
                                        Save
                                    </button>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                </CardBody>
            </Card>

        </React.Fragment>
    )
}

export default NewIncident