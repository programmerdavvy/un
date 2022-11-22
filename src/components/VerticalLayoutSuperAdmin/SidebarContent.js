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
  const logOut = () => {
    storage.removeItem(USER_COOKIE);
    window.location.href = '/stakeholder-login';
  }
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

  }, [props.location.pathname, activateParentDropdown])

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



  return (
    <React.Fragment>

      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">

            <li>
              <Link to="/stakeholder" className="waves-effect">
                <i className="uil-apps"></i>
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>

            <li>
              <Link to="/#" className=" has-arrow waves-effect">
                <i className="uil-apps"></i>
                <span>{props.t("Posts")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/posts">{props.t("All Post")}</Link>
                </li>
                <li>
                  <Link to="/new-post">{props.t("Add New Post")}</Link>
                </li>
                <li>
                  <Link to="/categories">{props.t("Categories")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className=" has-arrow waves-effect">
                <i className="uil-coins"></i>
                <span>{props.t("Incident")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/new-incident">{props.t("Report Incident")}</Link>
                </li>
                <li>
                  <Link to="/reported-incident">{props.t("Incident Reported")}</Link>
                </li>
                <li>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/stakeholder-documents" className="waves-effect">
                <i className="uil-coins"></i>
                <span>{props.t("Documents")}</span>
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
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))