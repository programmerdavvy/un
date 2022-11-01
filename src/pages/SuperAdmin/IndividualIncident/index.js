import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import IndividualSubmission from './individualSubmission';


function index() {
    return (
        <React.Fragment>
            <div className='page-content'>
                <Container fluid>
                    <Breadcrumbs title="submission" breadcrumbItem="Individual Submission" />
                    <IndividualSubmission />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default index