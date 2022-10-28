import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import StakeHolder from './stakeholder';


function index() {
    return (
        <React.Fragment>
            <div className='page-content'>
                <Breadcrumbs title="StakeHolders" breadcrumbItem="StakeHolders" />
                <Container  >
                    <StakeHolder />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default index