import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import Comment from './comment';


function index() {
    return (
        <React.Fragment>
            <div className='page-content'>
                <Container fluid>
                    <Breadcrumbs title="comment" breadcrumbItem="Comments" />
                    <Comment />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default index