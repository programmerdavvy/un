import React, { useState, useCallback, useEffect } from "react";
import { Container, Row, Col, CardBody, Card } from "reactstrap";


//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import NewIncident from "./newIncident";
import toastr from "toastr"
import "toastr/build/toastr.min.css"
import { request } from "../../../services/utilities";

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
        let url = `category?type=incident`;
        try {
            const rs = await request(url, 'GET', false);
            setCategories(rs.result)
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid >
                    <Breadcrumbs title="report incident" breadcrumbItem="Report Incident" />
                    <Row>
                        <Col>
                            <NewIncident showToast={showToast} categories={categories} />
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index