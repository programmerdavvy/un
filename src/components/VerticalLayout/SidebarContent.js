import PropTypes from "prop-types"
import React, { useCallback, useEffect, useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import SSRStorage from "../../services/storage"
import { USER_COOKIE } from "../../services/constants"
//i18n
import { withTranslation } from "react-i18next"
const storage = new SSRStorage();

const SidebarContent = props => {
  const ref = useRef();

  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false
    }
    scrollElement(item);
    return false
  }, []);

  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    new MetisMenu("#side-menu")
    let matchingMenuItem = null
    const ul = document.getElementById("side-menu")
    const items = ul.getElementsByTagName("a")
    for (let i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }

  }, [])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }


  const logOut = () => {
    storage.removeItem(USER_COOKIE);
    window.location.href = '/admin-login';
  }
  return (
    <React.Fragment>

      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">

            <li>
              <Link to="/admin" className="waves-effect">
                <i className="uil-apps"></i>
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>
            {/* post */}
            <li>
              <Link to="/#" className=" has-arrow waves-effect">
                <i className="uil-apps"></i>
                <span>{props.t("Post")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/admin-posts">{props.t("All Post")}</Link>
                </li>
                <li>
                  <Link to="/admin-new-post">
                    {props.t("Add New")}
                  </Link>
                </li>
                <li>
                  <Link to="/admin-categories">
                    {props.t("Category")}
                  </Link>
                </li>
                <li>
                  <Link to="/stakeholder-post">
                    {props.t("Stakeholder Post")}
                  </Link>
                </li>
              </ul>
            </li>
            {/* incident */}
            <li>
              <Link to="/#" className=" has-arrow waves-effect">
                <i className="uil-apps"></i>
                <span>{props.t("Incidents")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/individual-submission">{props.t("Individual Submission ")}</Link>
                </li>
                <li>
                  <Link to="/organization-submission">{props.t("Organization Submission ")}</Link>
                </li>
                <li>
                  <Link to="/admin-status">{props.t("Status ")}</Link>
                </li>
                <li>
                  <Link to="/admin-incident-categories">{props.t("Category ")}</Link>
                </li>
              </ul>
            </li>
            {/* Stakeholders */}
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="uil-apps"></i>
                <span>{props.t("Stakeholder")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/admin-stakeholder">{props.t("Stakeholder")}</Link>
                </li>
                <li>
                  <Link to="/new-stakeholder">{props.t("Add New")}</Link>
                </li>
                <li>
                  <Link to="/organization">{props.t("Organization ")}</Link>
                </li>
              </ul>
            </li>

            {/* Event */}
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="uil-apps"></i>
                <span>{props.t("Event")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/events">{props.t("Events")}</Link>
                </li>
                <li>
                  <Link to="/new-event">{props.t("Add New")}</Link>
                </li>
                <li>
                  <Link to="/event-category">{props.t("Event Categories ")}</Link>
                </li>
              </ul>
            </li>
            {/* Photo Gallery */}
            <li>
              <Link to="/#" className=" has-arrow waves-effect">
                <i className="uil-apps"></i>
                <span>{props.t("Photo Gallery")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/admin-gallery">{props.t("Gallery")}</Link>
                </li>
                <li>
                  <Link to="/new-gallery">{props.t("Add New")}</Link>
                </li>
                <li>
                  <Link to="/gallery-category">{props.t("Gallery Categories ")}</Link>
                </li>
              </ul>
            </li>
            {/* Video Gallery */}
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="uil-apps"></i>
                <span>{props.t("Video")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/admin-video">{props.t("Video")}</Link>
                </li>
                <li>
                  <Link to="/new-video">{props.t("Add New")}</Link>
                </li>
                <li>
                  <Link to="/video-category">{props.t("Video Categories")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/admin-comments" className="waves-effect">
                <i className="uil-apps"></i>
                <span>{props.t("Comments")}</span>
              </Link>
            </li>
            <li>
              <Link to="/analysis" className="waves-effect">
                <i className="uil-coins"></i>
                <span>{props.t("Analysis")}</span>
              </Link>
            </li>


            <li onClick={logOut}>
              <Link to="#" className="waves-effect">
                <i className="uil-arrow-from-right"></i>
                <span>{props.t("Logout")}</span>
              </Link>
            </li>

          </ul>
        </div>
      </SimpleBar >
    </React.Fragment >
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))