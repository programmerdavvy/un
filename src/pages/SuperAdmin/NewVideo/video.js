import React, { useState } from 'react'
import { Card, CardBody, Col, Row, FormFeedback, Form, Input, Label, Button, FormGroup, InputGroup } from 'reactstrap'
import * as Yup from "yup";
import { useFormik } from "formik";
import Dropzone from "react-dropzone"
import { Link, } from 'react-router-dom'
import { request } from '../../../services/utilities';
import { useDispatch } from 'react-redux'
import { updateLoader } from "../../../store/actions";

const NewEvent = (props) => {
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState(null);
    
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
            // categories: Yup.string().required("Please Select Categories")
        }),
        onSubmit: async (values) => {
            dispatch(updateLoader(''))
            let data = {
                title: values.title,
                content: values.title,
                pageId: 11,
                media: [
                    { name: values.title, extension: 'mp4', link: values.link, type: 'video' }
                ],
                categoryId: parseInt(selectedCategory)
            };
            let url = `sections`;
            try {
                const rs = await request(url, 'POST', true, data);
                if (rs.success === true) {
                    dispatch(updateLoader('none'))
                    props.showToast('success', 'Saved successfully ');
                }

            } catch (err) {
                dispatch(updateLoader('none'))
                console.log(err);
                props.showToast('error', 'Failed to save')
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
                            <h5 className=''>Add Video</h5>
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
                                            <div className="mb-3">
                                                <select
                                                    className="form-select"
                                                    id="floatingSelectGrid"
                                                    // aria-label="Select Categories"
                                                    name="category"
                                                    style={{ height: '30px' }}
                                                    onChange={e => {
                                                        setSelectedCategory(e.target.value);
                                                    }}
                                                // id="validationCustom01"
                                                // onChange={validation.handleChange}
                                                // onBlur={validation.handleBlur}
                                                // value={validation.values.categories || ""}
                                                // invalid={
                                                //     validation.touched.categories && validation.errors.categories ? true : false
                                                // }
                                                >
                                                    <option>Select Categories</option>
                                                    {props.categories?.map(e => {
                                                        return (
                                                            <option key={e.id} value={e.id}>{e.name}</option>

                                                        )
                                                    })}
                                                </select>
                                                {/* {validation.touched.categories && validation.errors.categories ? (
                                                    <FormFeedback type="invalid">{validation.errors.categories}</FormFeedback>
                                                ) : null} */}
                                                {/* <label htmlFor="floatingSelectGrid">
                                                    Categories
                                                </label> */}
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
                </Col>
                {/* <Col xl={3} >

                </Col> */}
            </Row>
        </React.Fragment >
    )
}

export default NewEvent 