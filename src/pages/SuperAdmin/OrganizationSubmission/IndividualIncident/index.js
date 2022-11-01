import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from "../../../../components/Common/Breadcrumb";
import OrganizationSubmission from './organizationSubmission';


function index() {
    return (
        <React.Fragment>
            <div className='page-content'>
                <Container fluid>
                    <Breadcrumbs title="submission" breadcrumbItem="Organization Submission" />
                    <OrganizationSubmission />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default index