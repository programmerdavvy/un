import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

//i18n
import { withTranslation } from "react-i18next"
// Redux
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"

// users
import user4 from "../../../assets/images/users/avatar-4.jpg"
import nigeriaflag from "../../../assets/images/un/nigeriaflag.png"
import dropdownicon from "../../../assets/images/un/dropdownicon.png"

import Select from 'react-select'


const options = [
	{ value: 'immediate', label: 'Immediate' },
	{ value: 'schedule', label: 'Schedule' },
  ]

const LanguageMenu = props => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false)

  const [username, setusername] = useState("Admin")
  const [language, setLanguage] = useState("English")

const [selectedOption, setSelectedOption] = useState(null)


  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        const obj = JSON.parse(localStorage.getItem("authUser"))
        setusername(obj.displayName)
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        const obj = JSON.parse(localStorage.getItem("authUser"))
        if(obj.username){
          setusername(obj.username)
        }else{
          setusername(obj.name)
        }
      }
    }
  }, [props.success])

 

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
          tag="button"

        >
          <img
            className="flag-rectangle header-profile-user"
            src={nigeriaflag}
            alt="Header Avatar"
            style={{height:'25px', width:'50px'}}
          />
          <span className="d-none d-xl-inline-block ms-1 fw-medium font-size-15">{language}</span>{" "}
          <i className="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
          {/* <img
            className="flag-rectangle header-profile-user"
            src={dropdownicon}
            alt="Header Avatar"
            style={{height:'15px', width:'15px'}}
          /> */}
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag="a" onClick={() => {
            setLanguage("English")
            props.setSelectedLanguage('en')
            }}>
            {" "}
            {props.t("English")}{" "}
          </DropdownItem>
          <DropdownItem tag="a" onClick={() => {
            props.setSelectedLanguage('ha')
            setLanguage("Hausa")}}>
            {props.t("Hausa")}
          </DropdownItem>
          <DropdownItem tag="a" onClick={() => {
            props.setSelectedLanguage('yo')
            setLanguage("Yoruba")}}>
            {props.t("Yoruba")}
          </DropdownItem>
          <DropdownItem tag="a" onClick={() => {
            props.setSelectedLanguage('ig')
            setLanguage("Igbo")}}>
            {props.t("Igbo")}
          </DropdownItem>
          <div className="dropdown-divider" />
         
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  )
}

LanguageMenu.propTypes = {
  success: PropTypes.any,
  t: PropTypes.any
}

const mapStatetoProps = state => {
  const { error, success } = state.Profile
  return { error, success }
}

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(LanguageMenu))
)
