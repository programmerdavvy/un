import React, { useState, useCallback, useEffect } from "react";
import { Container, Row, Col, CardBody, Card } from "reactstrap";
import { request } from "../../../services/utilities";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import NewPost from "./newPost";
function Index() {
    const [categories, setCategories] = useState([]);

    const fetchCategories = useCallback(async () => {
        let url = `category?type=post`;
        try {
            const rs = await request(url, 'GET', false);
            console.log(rs);
            setCategories(rs.result)
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);
    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumbs title="new post" breadcrumbItem="New Post" />
                <Container >
                    <Row>
                        <Col>
                            <NewPost categories={categories} />
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index