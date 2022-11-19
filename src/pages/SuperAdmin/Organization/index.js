import React, { useState, useCallback, useEffect } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Breadcrumb from '../../../components/Common/Breadcrumb'
import Organization from './organization'
import toastr from "toastr"
import "toastr/build/toastr.min.css"
import { useDispatch } from 'react-redux'
import { updateLoader } from "../../../store/actions";
import { request } from '../../../services/utilities'

function Index() {
    const dispatch = useDispatch();
    const [organization, setOrganization] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(1);
    const [meta, setMeta] = useState(null);
    const [rowsPerPage, setRowsPerPage] = useState(10);

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

    const fetchOrganization = useCallback(async page => {
        dispatch(updateLoader(''))
        let p = page || 1;
        let url = `stakeholders?page=${p}&limit=10`;
        try {
            const rs = await request(url, 'GET', false);
            setOrganization(rs.result);
            setCount(Math.ceil(rs.paging?.total / rowsPerPage));
            setMeta(rs.paging);
            dispatch(updateLoader('none'))

        } catch (err) {
            dispatch(updateLoader('none'))
            console.log(err);
        }
    }, [rowsPerPage]);

    const handlePagination = page => {
        fetchOrganization(page.selected + 1)
        setCurrentPage(page.selected + 1)
    }
    useEffect(() => {
        fetchOrganization();
    }, [fetchOrganization]);
    return (
        <React.Fragment>
            <div className='page-content'>
                <Breadcrumb title="Organization" breadcrumbItem="All Organization" />
                <Container>
                    <Row>
                        <Col>
                            <Organization count={count} currentPage={currentPage} showToast={showToast} organization={organization} handlePagination={handlePagination} meta={meta} fetchOrganization={fetchOrganization} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index