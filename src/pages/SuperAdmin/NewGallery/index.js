import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import Gallery from './gallery';


function index() {
    return (
        <React.Fragment>
            <div className='page-content'>
                <Container fluid>
                    <Breadcrumbs title="gallery" breadcrumbItem="Add Gallery" />
                    <Gallery />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default index