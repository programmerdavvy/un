import React, { useState, useEffect, useCallback } from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { request } from '../../../services/utilities';
import StakeHolder from './stakeholder';
import toastr from "toastr"
import "toastr/build/toastr.min.css"
import { useDispatch } from 'react-redux'
import { updateLoader } from "../../../store/actions";

function Index() {
    const dispatch = useDispatch();
    const [stakeholders, setStakeholders] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(1);
    const [meta, setMeta] = useState(null);
    const [organizations, setOrganizations] = useState([]);


    const fetchStakeholders = useCallback(async (page) => {
        dispatch(updateLoader(''));
        const p = page || 1;
        try {
            let url = `users?page=${p}&limit=10`;
            let url_org = `stakeholders`;
            const rs = await request(url, 'GET', false);
            const rs_org = await request(url_org, 'GET', false);
            console.log(rs)
            setOrganizations(rs_org.result);
            setStakeholders(rs.result);
            setCount(Math.ceil(rs.paging?.total / rowsPerPage));
            setMeta(rs.paging);
            dispatch(updateLoader('none'));

        } catch (err) {
            dispatch(updateLoader('none'));

            console.log(err);
        }
    }, [rowsPerPage]);

    const handlePagination = page => {
        fetchStakeholders(page.selected + 1)
        setCurrentPage(page.selected + 1)
    }
    const showToast = (error, message) => {
        let positionClass = "toast-top-right"
        let toastType
        let showMethod = 'fadeIn'

        toastr.options = {
            positionClass: positionClass,
            timeOut: 5000,
            extendedTimeOut: 1000,
            closeButton: false,
            debug: false,
            progressBar: false,
            preventDuplicates: true,
            newestOnTop: true,
            showEasing: 'swing',
            hideEasing: 'linear',
            showMethod: showMethod,
            hideMethod: 'fadeOut',
            showDuration: 300,
            hideDuration: 1000
        }

        // setTimeout(() => toastr.success(`Settings updated `), 300)
        //Toaster Types
        // if (toastType === "info") toastr.info(message, title)
        // else if (toastType === "warning") toastr.warning(message, title)
        if (error === "error") toastr.error(message)
        else toastr.success(message)
    }

    useEffect(() => {
        fetchStakeholders();
    }, [fetchStakeholders]);


    return (
        <React.Fragment>
            <div className='page-content'>
                <Breadcrumbs title="StakeHolders" breadcrumbItem="StakeHolders" />
                <Container  >
                    <StakeHolder organizations={organizations} showToast={showToast} meta={meta} stakeholders={stakeholders} count={count} fetchStakeholders={fetchStakeholders} currentPage={currentPage} handlePagination={handlePagination} />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index