import React, { useState, useEffect, useCallback } from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { request } from '../../../services/utilities';
import Gallery from './gallery';
import toastr from "toastr"
import "toastr/build/toastr.min.css"
import { useDispatch } from 'react-redux'
import { updateLoader } from "../../../store/actions";

function Index() {
    const dispatch = useDispatch();
    const [gallery, setGallery] = useState([]);
    const [rowsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
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
    const fetchGallery = useCallback(async page => {
        dispatch(updateLoader(''))
        const p = page || 1;
        let url = `sections/admin?pageId=3&page${p}&limit=10`;
        try {
            const rs = await request(url, 'GET', false);
            if (rs.success === true) {
                setGallery(rs.result);
                setCount(Math.ceil(rs.paging?.total / rowsPerPage));
                setMeta(rs.paging);
                dispatch(updateLoader('none'))

            }
        } catch (err) {
            dispatch(updateLoader('none'))
            console.log(err);
            showToast('error', 'Failed to fetch');

        }
    }, [rowsPerPage]);

    const handlePagination = page => {
        fetchGallery(page.selected + 1);
        setCurrentPage(page.selected + 1);
    }

    useEffect(() => {
        fetchGallery();
    }, [fetchGallery]);

    return (
        <React.Fragment>
            <div className='page-content'>
                <Container fluid>
                    <Breadcrumbs title="gallery" breadcrumbItem="Gallery" />
                    <Gallery gallery={gallery} showToast={showToast} handlePagination={handlePagination}
                        currentPage={currentPage} count={count} meta={meta} fetchGallery={fetchGallery} />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index