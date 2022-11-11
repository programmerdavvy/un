import PropTypes from 'prop-types';
import React, { useState } from "react";

import { connect } from "react-redux";
import { Form, Input, Button, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

// Reactstrap
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
// import {  } from '../../store/actions';
// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenuStakeholder";

import logoSm from "../../assets/images/logo-sm.png";
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";
import iloLight from "../../assets/images/un/moondarkmode.png";
import { useDispatch } from 'react-redux'
// import images
import github from "../../assets/images/brands/github.png";
import bitbucket from "../../assets/images/brands/bitbucket.png";
import dribbble from "../../assets/images/brands/dribbble.png";
import dropbox from "../../assets/images/brands/dropbox.png";
import mail_chimp from "../../assets/images/brands/mail_chimp.png";
import user4 from "../../assets/images/users/avatar-4.jpg"

import slack from "../../assets/images/brands/slack.png";

//i18n
import { withTranslation } from "react-i18next";

// Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
  changeLayoutMode
} from "../../store/actions";

// import { layoutModeTypes } from '../../constants/layout';


const Header = (props) => {

  const [search, setsearch] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const dispatch = useDispatch();

  function toggleLightMode() {

    setIsLightMode(!isLightMode);
    if (isLightMode === false) {
      dispatch(changeLayoutMode('light'))
    } else {
      dispatch(changeLayoutMode('dark'))
    }
  }
  function tToggle() {
    var body = document.body;
    body.classList.toggle("vertical-collpsed");
    body.classList.toggle("sidebar-enable");
  }
  const location = window.location.pathname.slice(1);
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logoSm} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoDark} alt="" height="20" />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logoSm} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoLight} alt="" height="20" />
                </span>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => {
                tToggle();
              }}
              className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars" />
            </button>
            <div className='px-4'>
              <h1 className='text-capitalize' style={{ fontWeight: '900' }}>{location === 'stakeholder' ? 'Dashboard' : ''}</h1>
            </div>
          </div>

          <div className="d-flex">
            <div>
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                onClick={() => toggleLightMode()}
              >
                <img src={iloLight} alt='darkmode-vise-versa' />
              </button>
            </div>
            <ProfileMenu />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  // changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func
};

const mapStatetoProps = state => {
  const {
    layoutType,
    showRightSidebar,
    leftMenu,
    leftSideBarType,
  } = state.Layout;
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType };
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  // changeSidebarType,
})(withTranslation()(Header));
