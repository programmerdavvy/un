import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Breadcrumb from '../../../components/Common/Breadcrumb'
import GalleryCategory from './videocategory'

function Index() {
    return (
        <React.Fragment>
            <div className='page-content'>
                <Container fluid>
                    <Breadcrumb title="video category" breadcrumbItem="All Video Gallery" />
                    <Row>
                        <Col>
                            <GalleryCategory />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index