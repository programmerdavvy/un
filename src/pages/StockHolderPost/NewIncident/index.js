import React from "react";
import { Container, Row, Col, CardBody, Card } from "reactstrap";


//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import NewIncident from "./newIncident";


function Index() {
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid >
                    <Breadcrumbs title="report incident" breadcrumbItem="Report Incident" />
                    <Row>
                        <Col>
                            <NewIncident />
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index