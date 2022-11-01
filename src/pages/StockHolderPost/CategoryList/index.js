import React from 'react'
import { useState } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Breadcrumb from '../../../components/Common/Breadcrumb'
import Categories from './categories'
import toastr from "toastr"
import "toastr/build/toastr.min.css"
import { request } from '../../../services/utilities'
import { useCallback } from 'react'
import { useEffect } from 'react'


function Index() {
    const [categories, setCategories] = useState([]);

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
    const fetchCategories = useCallback(async () => {
        let url = `category?type=post`;
        try {
            const rs = await request(url, 'GET', false);
            setCategories(rs.result);
        } catch (err) {
            console.log(err);
            showToast('error', 'Failed to fetch');

        }
    }, []);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);


    return (
        <React.Fragment>
            <div className='page-content'>
                <Breadcrumb title="Categories" breadcrumbItem="All Categories" />
                <Container>
                    <Row>
                        <Col>
                            <Categories categories={categories} fetchCategories={fetchCategories} showToast={showToast} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index