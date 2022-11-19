import React, { useCallback, useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import ReportedIncident from './reportedIncident';
import { request } from '../../../services/utilities'
import { useDispatch } from 'react-redux';
import { updateLoader } from "../../../store/actions";



function Index() {
    const dispatch = useDispatch();
    const [incidents, setIncidents] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(1);
    const [meta, setMeta] = useState(null);

    const fetchIncidents = useCallback(async (page) => {
        dispatch(updateLoader(''))
        const p = page || 1;
        try {
            let url = `incident/all/specific/?action=individual&page=${p}&limit=10`;
            const rs = await request(url, 'GET', false);
            // console.log(rs)
            setIncidents(rs.result);
            setCount(Math.ceil(rs.paging?.total / rowsPerPage));
            setMeta(rs.paging);
            dispatch(updateLoader('none'))

        } catch (err) {
            dispatch(updateLoader('none'))
            console.log(err);
        }
    }, [rowsPerPage]);

    const handlePagination = page => {
        fetchIncidents(page.selected + 1)
        setCurrentPage(page.selected + 1)
    }

    useEffect(() => {
        fetchIncidents();
    }, [fetchIncidents]);


    return (
        <React.Fragment>
            <div className='page-content'>
                <Container fluid>
                    <Breadcrumbs title="Incidents" breadcrumbItem="Reported Incidents" />
                    <ReportedIncident incidents={incidents} meta={meta} fetchIncidents={fetchIncidents} count={count} handlePagination={handlePagination} currentPage={currentPage} />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index