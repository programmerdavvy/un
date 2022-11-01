import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import Gallery from './video';


function index() {
    return (
        <React.Fragment>
            <div className='page-content'>
                <Container fluid>
                    <Breadcrumbs title="video" breadcrumbItem="Add Video" />
                    <Gallery />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default index