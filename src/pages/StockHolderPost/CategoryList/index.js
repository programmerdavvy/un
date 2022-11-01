import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Breadcrumb from '../../../components/Common/Breadcrumb'
import Categories from './categories'

function Index() {
    return (
        <React.Fragment>
            <div className='page-content'>
                <Container fluid>
                    <Breadcrumb title="Categories" breadcrumbItem="All Categories" />
                    <Row>
                        <Col>
                            <Categories />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index