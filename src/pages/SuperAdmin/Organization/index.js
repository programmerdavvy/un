import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Breadcrumb from '../../../components/Common/Breadcrumb'
import Organization from './organization'

function Index() {
    return (
        <React.Fragment>
            <div className='page-content'>
                <Breadcrumb title="Organization" breadcrumbItem="All Organization" />
                <Container>
                    <Row>
                        <Col>
                            <Organization />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index