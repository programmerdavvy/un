import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import StakeHolder from './stakeholder';


function index() {
    return (
        <React.Fragment>
            <div className='page-content'>
                <Container fluid>
                    <Breadcrumbs title="StakeHolders" breadcrumbItem="StakeHolders" />
                    <StakeHolder />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default index