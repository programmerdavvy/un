import React, { useState, useEffect, useCallback } from "react";
import { Card, CardBody, Table, CardTitle, Form, Label, Input, Row, FormGroup, FormFeedback, ModalHeader, Col, Button, UncontrolledTooltip, Modal, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
import { request } from "../../../services/utilities";
import * as Yup from "yup";
import { useFormik } from "formik";
import ReactPaginate from "react-paginate";

const IndividualSubmission = (props) => {

    const [modal, setmodal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [id, setId] = useState(null);
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [videoId, setVideoId] = useState(null);


    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            title: title,
            link: link,
            categories: ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Please Enter Title"),
            link: Yup.string().required("Please Enter Embed Link"),
            // categories: Yup.string().required("Please Select Categories")
        }),
        onSubmit: async (values) => {
            if (id === null) {
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
                    const rs = await request(url, 'POST', false, data);
                    if (rs.success === true) {
                        setId(null);
                        clearForm();
                        props.fetchVideos()
                        props.showToast('success', 'Saved successfully ');
                        setmodal(!modal);
                    }

                } catch (err) {
                    console.log(err);
                    props.showToast('error', 'Failed to save')
                }
            } else {
                updateVideo();
            }

        }
    });
    const clearForm = () => {
        setTitle('');
        setLink('');
        setSelectedCategory(null);
        setVideoId(null);
    }

    const onClickDelete = async id => {
        let url = `sections?id=${id}`
        try {
            const rs = await request(url, 'DELETE', false);
            if (rs.success === true) {
                setId(null);
                clearForm();
                props.fetchVideos();
                props.showToast('success', 'Deleted Successfully');
            }
        } catch (err) {
            console.log(err);
            props.showToast('error', 'Failed to delete');

        }
    }
    const updateVideo = async () => {
        let data = { title, categoryId: selectedCategory }
        let data2 = { link }

        let url = `sections?id=${id}`
        let url2 = `media?id=${videoId}`

        try {
            const rs = await request(url, 'PATCH', false, data);
            const rs_media = await request(url2, 'PATCH', false, data2);
            if (rs.success === true && rs_media.success === true) {
                setId(null);
                clearForm();
                setmodal(!modal);
                props.fetchVideos();
                props.showToast('success', 'Deleted Successfully');
            }
        } catch (err) {
            console.log(err);
            props.showToast('error', 'Failed to delete');

        }
    }
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
                        setId(null)
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
                                                onChange={e => setTitle(e.target.value)}
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
                                                onChange={e => setLink(e.target.value)}
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
                                    {id === null ? 'Publish' : 'Update'}
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
                                    {props.videos?.map((e, i) => {
                                        return (
                                            <tr key={e.id}>
                                                <td>#{e.id}</td>
                                                <td>
                                                    {e.title}
                                                </td>
                                                <td>
                                                    <a href={e.media[0]?.link} target="_blank" rel="noopener noreferrer"> {e.media[0]?.link}</a>
                                                </td>
                                                <td>
                                                    {new Date(e.createdAt).toDateString()}
                                                </td>
                                                <td>
                                                    <div className="d-flex gap-3 users">
                                                        <ul className="list-inline font-size-20 contact-links mb-0">
                                                            <li className="list-inline-item">
                                                                <Link
                                                                    to="#"
                                                                    className="text-dark"
                                                                    onClick={() => {
                                                                        setId(e.id);
                                                                        setTitle(e.title);
                                                                        setSelectedCategory(e.categoryId);
                                                                        setLink(e.media[0]?.link);
                                                                        setVideoId(e.media[0]?.id);
                                                                        setmodal(!modal);
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

export default IndividualSubmission;