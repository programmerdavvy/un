import React from "react";
import { Container, Row, Col, CardBody, Card } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

//Import Components
import PostLists from "./posts-list";



const Dashboard = () => {


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="posts" breadcrumbItem="All Posts" />
          <Row>
            <Col>
              <PostLists />
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;