import React from "react";
import { Container, Row, Col, CardBody, Card } from "reactstrap";


//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import NewPost from "./newPost";
function Index() {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs title="new post" breadcrumbItem="New Post" />
                    <Row>
                        <Col>
                            <NewPost />
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index