import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Breadcrumb from '../../../components/Common/Breadcrumb'
import Status from './status'

function Index() {
    return (
        <React.Fragment>
            <div className='page-content'>
                <Container fluid>
                    <Breadcrumb title="Status" breadcrumbItem="All Status" />
                    <Row>
                        <Col>
                            <Status />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index