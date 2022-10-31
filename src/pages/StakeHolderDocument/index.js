import React, { useCallback, useEffect, useState } from "react"
import {
    Row, Col, Card, Modal, ModalBody, ModalHeader, Form, CardBody, CardTitle, Container,
    UncontrolledTooltip, Table, Input, Pagination, PaginationItem, PaginationLink, Button
} from "reactstrap"
import { Link } from "react-router-dom"
import Dropzone from "react-dropzone"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { request } from "../../services/utilities"
import ReactPaginate from "react-paginate"
import toastr from "toastr"
import "toastr/build/toastr.min.css"


function Index() {

    const [modal, setmodal] = useState(false);

    const [selectedFiles, setselectedFiles] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(1);
    const [meta, setMeta] = useState(null);
    const [documents, setDocuments] = useState([]);

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
    const fetchDocuments = useCallback(async (page) => {
        let p = page || 1;

        let url = `media?pageId=&id=&page=${p}&limit=10`;
        try {
            const rs = await request(url, 'GET', false);
            // console.log(rs);
            setDocuments(rs.result);
            setCount(Math.ceil(rs.paging?.total / rowsPerPage));
            setMeta(rs.paging);
        } catch (err) {
            console.log(err);
        }
    }, [rowsPerPage])

    const handlePagination = page => {
        fetchDocuments(page.selected + 1)
        setCurrentPage(page.selected + 1)
    }
    const onClickDelete = async id => {
        if (window.confirm('Are you sure!')) {
            let url = `media?id=${id}`;
            try {
                const rs = await request(url, 'DELETE', false);
                // console.log(rs);
                if (rs.success === true) {
                    showToast('success', 'Deleted successfully');
                    fetchDocuments();
                }
            } catch (err) {
                showToast('success', 'Deleted successfully');
                console.log(err)
            }
        }
    }

    useEffect(() => {
        fetchDocuments();
    }, [fetchDocuments]);

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
                                            <div className="d-none">
                                                <button onClick={() => setmodal(!modal)} className="btn btn-primary">
                                                    Add New
                                                </button>
                                            </div>
                                        </div>
                                    </CardTitle>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>
                                                    Name
                                                </th>
                                                <th>
                                                    Type
                                                </th>
                                                <th>
                                                    Document
                                                </th>
                                                <th style={{ width: '10rem' }}>
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {documents.map((e, i) => {
                                                return (
                                                    <tr key={i} className="text-capitalize">
                                                        <td>
                                                            {e.name}
                                                        </td>
                                                        <td>
                                                            {e.type}
                                                        </td>
                                                        <td>
                                                            {e.type === 'image' ? <div>
                                                                <img src={e.link} className='img-thumbnails' alt='uploaded incident' />
                                                            </div> : e.type === 'video' ? <div>
                                                                <video>
                                                                    <source src={e.link} type="video/mp4" />
                                                                </video>
                                                            </div> : e.type === 'audio' ? <div>
                                                                <audio controls>
                                                                    <source src={e.link} type="audio/mpeg" />
                                                                </audio>
                                                            </div> : ''
                                                            }
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
                                                                            onClick={() => {
                                                                                onClickDelete(e.id);
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
                                        <div>Showing 1 to 10 of {meta?.total} entries</div>

                                        <div>
                                            <ReactPaginate
                                                nextLabel='Next'
                                                breakLabel='...'
                                                previousLabel='Prev'
                                                pageCount={count}
                                                activeClassName='active'
                                                breakClassName='page-item'
                                                pageClassName={'page-item'}
                                                breakLinkClassName='page-link'
                                                nextLinkClassName={'page-link'}
                                                pageLinkClassName={'page-link'}
                                                nextClassName={'page-item next'}
                                                previousLinkClassName={'page-link'}
                                                previousClassName={'page-item prev'}
                                                onPageChange={page => handlePagination(page)}
                                                forcePage={currentPage !== 0 ? currentPage - 1 : 0}
                                                containerClassName={'pagination react-paginate justify-content-end p-1'}
                                            />
                                        </div>

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