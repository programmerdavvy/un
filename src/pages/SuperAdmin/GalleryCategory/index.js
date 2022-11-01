import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Breadcrumb from '../../../components/Common/Breadcrumb'
import GalleryCategory from './gallerycategory'

function Index() {
    return (
        <React.Fragment>
            <div className='page-content'>
                <Container fluid>
                    <Breadcrumb title="gallery category" breadcrumbItem="All Gallery Category" />
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