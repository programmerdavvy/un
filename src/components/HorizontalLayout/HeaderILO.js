import React, { useState } from "react";
import PropTypes from 'prop-types';

import { connect } from "react-redux";

import { Link } from "react-router-dom";

// Redux Store
import { showRightSidebarAction, toggleLeftmenu } from "../../store/actions";
// reactstrap
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, Button } from "reactstrap";

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

// import logo from "../../assets/images/logo-sm.png";
import ilologo from "../../assets/images/un/ilologo.png";
// import logoLight from "../../assets/images/logo-light.png";
// import logoDark from "../../assets/images/logo-dark.png";
import iloLight from "../../assets/images/un/moondarkmode.png";

// import images
import github from "../../assets/images/brands/github.png";
import bitbucket from "../../assets/images/brands/bitbucket.png";
import dribbble from "../../assets/images/brands/dribbble.png";
import dropbox from "../../assets/images/brands/dropbox.png";
import mail_chimp from "../../assets/images/brands/mail_chimp.png";
import slack from "../../assets/images/brands/slack.png";

//i18n
import { withTranslation } from "react-i18next";
import LanguageMenu from "../CommonForBoth/TopbarDropdown/LanguageMenu";

const HeaderILO = props => {
  const [isSearch, setSearch] = useState(false);
  const [socialDrp, setsocialDrp] = useState(false);

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
  return (
    <React.Fragment>
      <div className="navbar-header" style={{marginBottom:'60px'}}>
        <div className="d-flex">
          <div className="navbar-brand-box">
            <Link to="/" className="logo logo-dark">
              <span className="logo-sm">
                <img src={ilologo} alt="" style={{height:'84px', width:'516', marginTop:'20px'}} />
              </span>
              <span className="logo-lg">
                <img src={ilologo} alt="" style={{height:'84px', width:'516', marginTop:'20px'}}  />
              </span>
            </Link>

            <Link to="/" className="logo logo-light">
              <span className="logo-sm">
                <img src={ilologo} alt="" style={{height:'84px', width:'516', marginTop:'20px'}} />
              </span>
              <span className="logo-lg">
                <img src={ilologo} alt="" style={{height:'84px', width:'516', marginTop:'20px'}}  />
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
            data-toggle="collapse"
            onClick={() => {
              props.toggleLeftmenu(!props.leftMenu);
            }}
            data-target="#topnav-menu-content"
          >
            <i className="fa fa-fw fa-bars" />
          </button>

          {/* <form className="app-search d-none d-lg-block">
            <div className="position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Search...malikhey"
              />
              <span className="uil-search"></span>
            </div>
          </form> */}
        </div>

        <div className="d-flex">
          <div className="dropdown d-inline-block d-lg-none ms-2">
           
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              id="page-header-search-dropdown"
              onClick={() => setSearch(!isSearch)}
            >
              <i className="uil-search"></i>
            </button>
            <div
              className={
                isSearch
                  ? "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show"
                  : "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
              }
              aria-labelledby="page-header-search-dropdown"
            >
              <form className="p-3">
                <div className="form-group m-0">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={props.t("Search") + "..."}
                      aria-label="Recipient's username"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        <i className="mdi mdi-magnify" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="dropdown d-none d-lg-inline-block ms-1">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
            //   onClick={() => {
            //     toggleFullscreen();
            //   }}
            //   data-toggle="fullscreen"
            >
          <img src={iloLight} alt=""   />
            </button>
          </div>
          <div className="dropdown d-none d-lg-inline-block ms-1 ">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect fw-bolder"
            //   onClick={() => {
            //     toggleFullscreen();
            //   }}
            //   data-toggle="fullscreen"

            >
                TRANSLATE TO
            </button>
          </div>
          {/* style={{height:'84px', width:'516', marginTop:'20px'}} */}
          {/* <LanguageDropdown /> */}

          {/* <Dropdown
            className="d-none d-lg-inline-block ms-1"
            isOpen={socialDrp}
            toggle={() => {
              setsocialDrp(!socialDrp);
            }}
          >
            <DropdownToggle
              className="btn header-item noti-icon waves-effect"
              caret
              tag="button"
            >
              <i className="uil-apps" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-lg dropdown-menu-end" end>
              <div className="px-lg-2">
                <Row className="g-0">
                  <Col>
                    <Link className="dropdown-icon-item" to="#">
                      <img src={github} alt="Github" />
                      <span>GitHub</span>
                    </Link>
                  </Col>
                  <Col>
                    <Link className="dropdown-icon-item" to="#">
                      <img src={bitbucket} alt="bitbucket" />
                      <span>Bitbucket</span>
                    </Link>
                  </Col>
                  <Col>
                    <Link className="dropdown-icon-item" to="#">
                      <img src={dribbble} alt="dribbble" />
                      <span>Dribbble</span>
                    </Link>
                  </Col>
                </Row>
                <Row className="g-0">
                  <Col>
                    <Link className="dropdown-icon-item" to="#">
                      <img src={dropbox} alt="dropbox" />
                      <span>Dropbox</span>
                    </Link>
                  </Col>
                  <Col>
                    <Link className="dropdown-icon-item" to="#">
                      <img src={mail_chimp} alt="mail_chimp" />
                      <span>Mail Chimp</span>
                    </Link>
                  </Col>
                  <Col>
                    <Link className="dropdown-icon-item" to="#">
                      <img src={slack} alt="slack" />
                      <span>Slack</span>
                    </Link>
                  </Col>
                </Row>
              </div>
            </DropdownMenu>
          </Dropdown> */}

          {/* <div className="dropdown d-none d-lg-inline-block ms-1">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              onClick={() => {
                toggleFullscreen();
              }}
              data-toggle="fullscreen"
            >
              <i className="uil-minus-path"></i>
            </button>
          </div> */}

          {/* <NotificationDropdown /> */}

          {/* <ProfileMenu /> */}
          <LanguageMenu />

         
          <div className="dropdown d-none d-lg-inline-block ms-1 ">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
            

            >
                <Button
                      color="success"
                      outline
                      className="btn btn-sm waves-effect waves-light"
                    >
                      LOG IN
                </Button>
            </button>
          </div>

          

          {/* <div className="dropdown d-inline-block">
            <button
              onClick={() => {
                props.showRightSidebarAction(!props.showRightSidebar);
              }}
              type="button"
              className="btn header-item noti-icon right-bar-toggle waves-effect"
            >
              <i className="uil-cog"></i>
            </button>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

HeaderILO.propTypes = {
  leftMenu: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func
};

const mapStatetoProps = state => {
  const { layoutType, showRightSidebar, leftMenu } = state.Layout;
  return { layoutType, showRightSidebar, leftMenu };
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
})(withTranslation()(HeaderILO));
