import React, { useState, useEffect, useCallback } from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { request } from '../../../services/utilities';
import Gallery from './gallery';
import toastr from "toastr"
import "toastr/build/toastr.min.css"

function Index() {
    const [gallery, setGallery] = useState([])
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
    const fetchGallery = useCallback(async () => {
        let url = `gallery/media`;
        try {
            const rs = await request(url, 'GET', false);
            setGallery(rs.result);
            console.log(rs)
        } catch (err) {
            console.log(err);
            showToast('error', 'Failed to fetch');

        }
    }, []);

    useEffect(() => {
        fetchGallery();
    }, [fetchGallery]);
    return (
        <React.Fragment>
            <div className='page-content'>
                <Container fluid>
                    <Breadcrumbs title="gallery" breadcrumbItem="Gallery" />
                    <Gallery gallery={gallery} showToast={showToast} />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index