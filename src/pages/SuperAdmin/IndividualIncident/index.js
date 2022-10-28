import React, { useCallback, useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import IndividualSubmission from './individualSubmission';
import { request } from '../../../services/utilities'


function Index() {
    const [individualSubmission, setIndividualSubmission] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(1);


    const fetchSubmission = useCallback(async (page) => {
        const p = page || 1;
        try {
            let url = `incident/getall?page=${p}&limit=10`;
            const rs = await request(url, 'GET', false);
            let dataArray = rs.result.sort(x => x.userId !== null);
            setIndividualSubmission(dataArray);
            setCount(Math.ceil(rs.paging.total / rowsPerPage));
        } catch (err) {
            console.log(err);
        }
    }, [rowsPerPage]);

    const handlePagination = page => {
        fetchSubmission(page.selected + 1)
        setCurrentPage(page.selected + 1)
    }

    useEffect(() => {
        fetchSubmission();
    }, [fetchSubmission]);


    return (
        <React.Fragment>
            <div className='page-content'>
                <Container fluid>
                    <Breadcrumbs title="submission" breadcrumbItem="Individual Submission" />
                    <IndividualSubmission submission={individualSubmission} count={count} handlePagination={handlePagination} currentPage={currentPage} />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index