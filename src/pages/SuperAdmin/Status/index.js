import React from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Breadcrumb from '../../../components/Common/Breadcrumb'
import { request } from '../../../services/utilities'
import Status from './status';
import { useDispatch } from 'react-redux'
import { updateLoader } from "../../../store/actions";


function Index() {
    const dispatch = useDispatch();
    const [status, setStatus] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(1);
    const [meta, setMeta] = useState(null);


    const fetchStatus = useCallback(async page => {
        dispatch(updateLoader(''));
        const p = page || 1
        try {
            const url = `status`;
            const rs = await request(url, 'GET', false);
            setStatus(rs.result);
            setMeta(rs.paging)
            setCount(Math.ceil(rs.paging?.total / rowsPerPage));
            dispatch(updateLoader('none'));

        } catch (err) {
            dispatch(updateLoader('none'));
            console.log(err);
        }
    }, [rowsPerPage]);

    const handlePagination = page => {
        fetchStatus(page.selected + 1);
        setCurrentPage(page.selected + 1);
    }
    useEffect(() => {
        fetchStatus();
    }, [fetchStatus]);

    return (
        <React.Fragment>
            <div className='page-content'>
                <Breadcrumb title="Status" breadcrumbItem="All Status" />
                <Container>
                    <Row>
                        <Col>
                            <Status count={count} status={status} fetchStatus={fetchStatus} meta={meta} handlePagination={handlePagination} currentPage={currentPage} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index