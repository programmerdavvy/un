import React from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Breadcrumb from '../../../components/Common/Breadcrumb'
import { request } from '../../../services/utilities'
import Status from './status';


function Index() {

    const [status, setStatus] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(1);


    const fetchStatus = useCallback(async page => {
        const p = page || 1
        try {
            const url = `status`;
            const rs = await request(url, 'GET', false);
            console.log(rs)
            setStatus(rs.result);
            setCount(Math.ceil(rs.paging.total / rowsPerPage));
            console.log(rs);
        } catch (err) {
            console.log(err);
        }
    }, [rowsPerPage]);

    const handlePagination = page => {
        fetchStatus(page.selected + 1)
        setCurrentPage(page.selected + 1)
    }
    useEffect(() => {
        fetchStatus();
    }, [fetchStatus]);

    return (
        <React.Fragment>
            <div className='page-content'>
                <Container fluid>
                    <Breadcrumb title="Status" breadcrumbItem="All Status" />
                    <Row>
                        <Col>
                            <Status count={count} status={status} handlePagination={handlePagination} currentPage={currentPage}  />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index