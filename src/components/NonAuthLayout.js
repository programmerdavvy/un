import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Spinner } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

const NonAuthLayout = (props) => {
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => ({
    loader: state.visibility.show
  }));

  useEffect(() => {
    const title = props.location.pathname;
    let currentage = title.charAt(1).toUpperCase() + title.slice(2);

    document.title =
      currentage + " | Minible - Responsive Bootstrap 5 Admin Dashboard";
  }, [props.location.pathname]);

  return <React.Fragment>
    <Spinner className="fs-14 float-end mx-2" style={{ display: loader }} color="primary" />
    {props.children}
  </React.Fragment>;
};

NonAuthLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
};

export default withRouter(NonAuthLayout);
