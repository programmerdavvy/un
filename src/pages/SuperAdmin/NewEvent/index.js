import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import Event from './event';


function index() {
    return (
        <React.Fragment>
            <div className='page-content'>
                <Container fluid>
                    <Breadcrumbs title="event" breadcrumbItem="Events" />
                    <Event />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default index