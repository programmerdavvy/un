import React, { useState, useEffect, useCallback } from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from "../../../../components/Common/Breadcrumb";
import OrganizationSubmission from './organizationSubmission';
import { request } from '../../../../services/utilities';
import { useDispatch } from 'react-redux'
import { updateLoader } from "../../../../store/actions";


function Index() {
    const dispatch = useDispatch();
    const [organizationSubmission, setOrganizationSubmission] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(1);
    const [meta, setMeta] = useState(null);


    const fetchSubmission = useCallback(async (page) => {
        dispatch(updateLoader(''))
        const p = page || 1;
        try {
            let url = `incident/all/specific/?action=stakeholder`;
            const rs = await request(url, 'GET', false);
            // console.log(rs)
            setMeta(rs.paging);
            setOrganizationSubmission(rs.result);
            setCount(Math.ceil(rs.paging?.total / rowsPerPage));
            dispatch(updateLoader('none'))

        } catch (err) {
            dispatch(updateLoader('none'))
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
                    <Breadcrumbs title="submission" breadcrumbItem="Organization Submission" />
                    <OrganizationSubmission count={count} currentPage={currentPage} handlePagination={handlePagination} submission={organizationSubmission} />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index