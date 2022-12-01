import PropTypes from "prop-types"
import React, { useEffect } from "react"

import {
  Row,
  Col,
  CardBody,
  Card,
  Alert,
  Container,
  Form,
  Input,
  FormFeedback,
  Label,
} from "reactstrap"

// Redux
import { withRouter, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

// Formik validation
import * as Yup from "yup"
import { useFormik } from "formik"
import toastr from "toastr"
import "toastr/build/toastr.min.css"
//Social Media Imports
import { GoogleLogin } from "react-google-login"
// import TwitterLogin from "react-twitter-auth"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"

// actions
import { loginUser, socialLogin ,updateLoader} from "../../store/actions"

// import images
import logo from "../../assets/images/logo-dark.png"
import logolight from "../../assets/images/logo-light.png"
import ilologo from "../../assets/images/un/ilologo.png"

//Import config
import { facebook, google } from "../../config"
import { httpRequest, request } from "../../services/utilities"
import SSRStorage from "../../services/storage";
import { USER_COOKIE } from "../../services/constants"
const storage = new SSRStorage();

const Login = props => {
  const dispatch = useDispatch()

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
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: async e => {
      dispatch(updateLoader(''));
      let url = `users/login`;
      let data = { email: e.email, password: e.password };
      try {
        const rs = await httpRequest(url, 'POST', data);
        // console.log(rs);
        if (rs.success === true) {
          storage.setItem(USER_COOKIE, rs.result);
          dispatch(updateLoader('none'));
          showToast('success', 'Successfully login');
          window.location.href = '/admin';
        }
      } catch (err) {
        dispatch(updateLoader('none'));
        console.log(err);
        if (err.message === 'invalid credentials') {
          showToast('error', 'Invalid Email or Password')
        } else {
          showToast('error', 'Failed to login kindly try again later')

        }

      }
    },
  })

  const { error } = useSelector(state => ({
    error: state.Login.error,
  }))

  const signIn = (res, type) => {
    if (type === "google" && res) {
      const postData = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        token: res.tokenObj.access_token,
        idToken: res.tokenId,
      }
      dispatch(socialLogin(postData, props.history, type))
    } else if (type === "facebook" && res) {
      const postData = {
        name: res.name,
        email: res.email,
        token: res.accessToken,
        idToken: res.tokenId,
      }
      dispatch(socialLogin(postData, props.history, type))
    }
  }

  //handleGoogleLoginResponse
  const googleResponse = response => {
    signIn(response, "google")
  }

  //handleFacebookLoginResponse
  const facebookResponse = response => {
    signIn(response, "facebook")
  }

  useEffect(() => {
    document.body.className = "authentication-bg"
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = ""
    }
  })

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <Link to="/home" className="mb-5 d-block auth-logo">
                  <img
                    src={ilologo}
                    alt=""
                    height="22"
                    className="logo logo-dark"
                  />
                  <img
                    src={ilologo}
                    alt=""
                    height="22"
                    className="logo logo-light"
                  />
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card>
                <CardBody className="p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Welcome Back Admin !</h5>
                    <p className="text-muted">Sign in to continue to FGN ILO</p>
                  </div>
                  <div className="p-2 mt-4">
                    <Form
                      className="form-horizontal"
                      onSubmit={e => {
                        e.preventDefault()
                        validation.handleSubmit()
                        return false
                      }}
                    >
                      {error ? <Alert color="danger">{error}</Alert> : null}

                      <div className="mb-3">
                        <Label className="form-label">Email</Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email
                              ? true
                              : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">
                            {validation.errors.email}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <div className="float-end">
                          <Link to="/admin-forgot-password" className="text-muted">
                            Forgot password?
                          </Link>
                        </div>
                        <Label className="form-label">Password</Label>
                        <Input
                          name="password"
                          value={validation.values.password || ""}
                          type="password"
                          placeholder="Enter Password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.password &&
                              validation.errors.password
                              ? true
                              : false
                          }
                        />
                        {validation.touched.password &&
                          validation.errors.password ? (
                          <FormFeedback type="invalid">
                            {validation.errors.password}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3">

                        <div className="d-flex p-2 justify-content-center">
                          <button
                            className="btn btn-outline-success waves-effect waves-light w-50 text-dark font-weight-bold"
                          >
                            Log in
                          </button>
                        </div>
                      </div>
                      {/* <div className="mt-4 text-center">
                        <h5 className="font-size-14 mb-3">Sign in with</h5>

                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <FacebookLogin
                              appId={facebook.APP_ID}
                              autoLoad={false}
                              callback={facebookResponse}
                              render={renderProps => (
                                <Link
                                to="#"
                                  className="social-list-item bg-primary text-white border-primary"
                                  onClick={renderProps.onClick}
                                >
                                  <i className="mdi mdi-facebook" />
                                </Link>
                              )}
                            />
                          </li>
                          {google.CLIENT_ID !== '' &&
                          <li className="list-inline-item">
                            <GoogleLogin
                              clientId={google.CLIENT_ID}
                              render={renderProps => (
                                <Link
                                to="#"
                                  className="social-list-item bg-danger text-white border-danger"
                                  onClick={renderProps.onClick}
                                >
                                  <i className="mdi mdi-google" />
                                </Link>
                              )}
                              onSuccess={googleResponse}
                              onFailure={() => {}}
                            />
                          </li>
                          }
                        </ul>
                      </div> */}

                      <div className="mt-4 text-center">
                        <p className="mb-0">
                          Don&apos;t have an account ?{" "}
                          <a href="/home" className="fw-medium text-primary">
                            {" "}
                            Contact UN Admin{" "}
                          </a>{" "}
                        </p>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>© {new Date().getFullYear()} FGN UN ILO.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withRouter(Login)

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
  socialLogin: PropTypes.func,
}
