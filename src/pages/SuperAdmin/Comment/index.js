import React, { useState, useCallback, useEffect } from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import Comment from './comment';
import toastr from "toastr"
import "toastr/build/toastr.min.css"
import { request } from '../../../services/utilities'

function Index() {

    const [comment, setComment] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(1);
    const [meta, setMeta] = useState(null);


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
    const fetchComment = useCallback(async page => {
        const p = page || 1;

        let url = `comments/all/?page=&${p}limit=10`;
        try {
            const rs = await request(url, 'GET', false);
            setComment(rs.result);
            setCount(Math.ceil(rs.paging?.total / rowsPerPage));
            setMeta(rs.paging)
        } catch (err) {
            console.log(err);
            showToast('error', 'Failed to fetch');

        }
    }, []);

    const handlePagination = page => {
        fetchComment(page.selected + 1);
        setCurrentPage(page.selected + 1);
    }
    useEffect(() => {
        fetchComment();
    }, [fetchComment]);

    return (
        <React.Fragment>
            <div className='page-content'>
                <Container fluid>
                    <Breadcrumbs title="comment" breadcrumbItem="Comments" />
                    <Comment comments={comment} currentPage={currentPage} count={count} meta={meta} handlePagination={handlePagination} showToast={showToast} fetchComment={fetchComment} />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index