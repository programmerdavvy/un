import React, { useState } from "react"
import {
    Row, Col, Card, Modal, ModalBody, ModalHeader, Form, CardBody, CardTitle, Container,
    UncontrolledTooltip, Table, Input, Pagination, PaginationItem, PaginationLink, Button
} from "reactstrap"
import { Link } from "react-router-dom"
import Dropzone from "react-dropzone"
import Breadcrumbs from "../../components/Common/Breadcrumb"


function Index() {

    const [modal, setmodal] = useState(false);

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

    return (
        <React.Fragment>
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
                    Add New Document
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <Row>
                            <Col>
                                <div className="mb-3">
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
                                                        <h4>Add Feature Documents.</h4>
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



                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="text-end">
                                    <button type="button" className="btn btn-success">
                                        Upload
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
            </Modal>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs title="Documents" breadcrumbItem="Documents" />

                    <Row>
                        <Col className="col-12">
                            <Card>
                                <CardBody>
                                    <CardTitle>
                                        <div className="d-flex justify-content-between">
                                            <div className="w-50 d-flex">
                                                {/* <Input type="text" placeholder="search post" style={{ borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }} />
                                                <Button color="primary" style={{ borderRadius: '0px', borderTopRightRadius: '10px' }}> Search</Button> */}
                                            </div>
                                            <div>
                                                <button onClick={() => setmodal(!modal)} className="btn btn-success">
                                                    Add New
                                                </button>
                                            </div>
                                        </div>
                                    </CardTitle>
                                    <Table bordered>
                                        <thead>
                                            <tr>

                                                <th >
                                                    Title
                                                </th>
                                                <th style={{ width: '10rem' }}>
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td>
                                                    Passport
                                                </td>

                                                <td>
                                                    <div className="d-flex gap-3 users">
                                                        <ul className="list-inline font-size-20 contact-links mb-0">
                                                            <li className="list-inline-item">
                                                                <Link
                                                                    to="/view-post/1"
                                                                    className="text-primary"
                                                                // onClick={() => {
                                                                //   const users = cellProps.row.original
                                                                //   // handleUserClick(users)
                                                                // }}
                                                                >
                                                                    <i className="uil-eye font-size-18" id="edittooltip" />
                                                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                                                        View Details
                                                                    </UncontrolledTooltip>
                                                                </Link>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <Link
                                                                    to="/edit-post/1"
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
                                    <div className="float-end">
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
                                    {/* <MDBDataTable responsive bordered data={data} /> */}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index