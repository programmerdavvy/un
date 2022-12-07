import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, CardBody, Card } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

//Import Components
import PostLists from "./posts-list";
import toastr from "toastr"
import "toastr/build/toastr.min.css"
import { request } from "../../../services/utilities";
import { updateLoader } from "../../../store/actions";
import { useDispatch } from "react-redux";
import { USER_COOKIE } from "../../../services/constants";
import SSRStorage from "../../../services/storage";
const storage = new SSRStorage();



const Dashboard = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(1);
  const [meta, setMeta] = useState(null);

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
  };

  const fetchPosts = useCallback(async (page) => {
    const user = await storage.getItem(USER_COOKIE);
    dispatch(updateLoader(''));
    let p = page || 1;
    let url = `sections/admin/?page=${p}&limit=10&stakeholderId=${user.payload.stakeholderId}`;

    try {
      const rs = await request(url, 'GET', true);
      console.log(rs);
      if (rs.success === true) {
        setPosts(rs.result);
        setCount(Math.ceil(rs.paging?.total / rowsPerPage));
        setMeta(rs.paging);
        dispatch(updateLoader('none'));
      }
    } catch (err) {
      dispatch(updateLoader('none'));
      console.log(err);
      showToast('error', 'Failed to fetch');
    }
  }, [rowsPerPage]);

  const handlePagination = page => {
    fetchPosts(page.selected + 1);
    setCurrentPage(page.selected + 1);
  }

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="posts" breadcrumbItem="All Posts" />
          <Row>
            <Col>
              <PostLists fetchPosts={fetchPosts} showToast={showToast} posts={posts} count={count} meta={meta} currentPage={currentPage} handlePagination={handlePagination} />
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;