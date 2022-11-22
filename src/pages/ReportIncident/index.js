import React, { useEffect, useState } from "react"
import {
  Container,
  Row,
  Col,
  CardBody,
  Card,
  CardTitle,
  CardImg,
  CardText,
  Form,
  Label,
  Input,
  Button,
  Spinner,
} from "reactstrap"
import { Link } from "react-router-dom"
import newImage1 from "../../assets/images/un/successicon.png"
import axios from "axios"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Image
import setupanalytics from "../../assets/images/setup-analytics-amico.svg"
import ILOSlideWithControl from "../Ui/CarouselTypes/iloslidewithcontrol"
import Slidewithcontrol from "../Ui/CarouselTypes/iloslidewithcontrol"
import Dropzone from "react-dropzone"
import { Slider } from "@material-ui/core"
import { Translate } from "react-auto-translate"

const Dashboard = () => {
  const [selectedFiles, setselectedFiles] = useState([])
  const [displayForm, setDisplayForm] = useState(true)
  const [displaySuccessIcon, setDisplaySuccessIcon] = useState(false)
  const [childName, setChildName] = useState("")
  const [sex, setSex] = useState("")
  const [value, setValue] = React.useState([1, 10])
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [imageUpload, setImageUpload] = useState("")
  const [houseNumber, setHouseNumber] = useState("")
  const [landMark, setLandMark] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [LGA, setLGA] = useState("")
  const [reporterName, setReporterName] = useState("")
  const [reporterPhoneNumber, setReporterPhoneNumber] = useState("")
  const [reporterEmail, setReporterEmail] = useState("")
  const [imageSelected, setImageSelected] = useState("")
  const [loading, setLoading] = useState(false)
  const [incidentCategory, setIncidentCategory] = useState([])
  const [referenceId, setReferenceId] = useState("")

  function handleAcceptedFiles(files) {
    const formData = new FormData()
    files.map(file => {
      return Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    })
    setselectedFiles(files)

    formData.append("file", files[0])
    formData.append("upload_preset", "vixb0h0r")

    axios
      .post(
        "https://api/cloudinary.com/v1_1/malikmukhtar/image/upload",
        formData
      )
      .then(response => console.log("malaam", response))
  }
  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  const handleFormSubmit = async () => {
    const payLoad = {
      childname: childName,
      categoryId: category,
      sex: sex,
      age: `${value[0]} - ${value[1]}`,
      description: description,
      media_file: imageUpload,
      child_address: houseNumber,
      landmark: landMark,
      city: city,
      state: state,
      lga: LGA,
      isMobile: false,
      reporter_phone: reporterPhoneNumber,
      reporter_name: reporterName,
      reporter_mail: reporterEmail,
    }
    try {
      setLoading(true)
      const response = await axios.post(
        "https://unirp.herokuapp.com/incident/create",
        payLoad
      )
      setLoading(false)
      if (response?.data?.success) {
        setReferenceId(response?.data.result.referenceId)
        setDisplaySuccessIcon(true)
        setDisplayForm(false)
      }
    } catch (error) {
      console.log("Submit incident report error", error)
      setLoading(false)
    }
  }

  const rangeSelector = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    try {
      const fetchAllCategory = async () => {
        const response = await axios.get(
          "https://unirp.herokuapp.com/category?type=incident"
        )
        setIncidentCategory(response?.data?.result)
      }
      fetchAllCategory()
    } catch (error) {
      console.log("Fetch All Category Error", error)
    }
  }, [])

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Minible" breadcrumbItem="Home" />
          <Row>
            <Col xl={12}>
              <Slidewithcontrol />
            </Col>
          </Row>

          <Row>
            {displayForm && (
              <Col xl={12}>
                <div className="d-flex p-2 justify-content-center">
                  <Col lg={6}>
                    <CardBody>
                      <CardTitle className="mb-4 d-flex p-2 justify-content-center">
                        <Translate>
                          *Use the form below to report a Child Abuse Incident
                        </Translate>
                      </CardTitle>
                      <CardTitle className="mb-4 font-weight-bold">
                        <Translate>Child Labour/Adolescent Details</Translate>
                      </CardTitle>
                      <div className="mb-3">
                        <Label htmlFor="formrow-firstname-Input">
                          <Translate>Name of the Child</Translate>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="formrow-firstname-Input"
                          onChange={e => setChildName(e.target.value)}
                        />
                      </div>

                      <div className="col-sm-auto mb-3">
                        <label
                          className="visually-hidden"
                          htmlFor="autoSizingSelect"
                        >
                          <Translate>Sex</Translate>
                        </label>
                        <select
                          className="form-select"
                          id="autoSizingSelect"
                          onChange={e => setSex(e.target.value)}
                        >
                          <option selected>
                            <Translate>Select Sex</Translate>
                          </option>
                          <option value="Male">
                            <Translate>Male</Translate>
                          </option>
                          <option value="Female">
                            <Translate>Female</Translate>
                          </option>
                        </select>
                      </div>
                      <div className="col-sm-auto mb-3">
                        <label
                          className="visually-hidden"
                          htmlFor="autoSizingSelect2"
                        >
                          <Translate>Category</Translate>
                        </label>
                        <Translate>Age Range</Translate>
                        <Slider
                          value={value}
                          onChange={rangeSelector}
                          valueLabelDisplay="auto"
                        />
                      </div>
                      <div className="col-sm-auto mb-3">
                        <label
                          className="visually-hidden"
                          htmlFor="autoSizingSelect"
                        >
                          <Translate>Category</Translate>
                        </label>
                        <select
                          className="form-select"
                          id="autoSizingSelect"
                          onChange={e => setCategory(e.target.value)}
                        >
                          <option selected>select category</option>
                          {incidentCategory?.map(category => (
                            <option value={`${category.id}`}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <Label>
                          <Translate>Incident Description</Translate>
                        </Label>
                        <Input
                          type="textarea"
                          id="textarea"
                          onChange={e => setDescription(e.target.value)}
                          maxLength="225"
                          rows="3"
                          placeholder=""
                        />
                      </div>
                      {/* <div className="mb-3">
                        <Dropzone
                          onDrop={acceptedFiles => {
                            handleAcceptedFiles(acceptedFiles)
                          }}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <div className="dropzone">
                              <div
                                className="dz-message needsclick"
                                {...getRootProps()}
                              >
                                <input {...getInputProps()} />
                                <div className="d-flex p-2 justify-content-center">
                                  <i className="fas fa-paperclip"></i>
                                  <h4>Attach media file</h4>
                                </div>
                              </div>
                            </div>
                          )}
                        </Dropzone>
                        <div
                          className="dropzone-previews mt-3"
                          id="file-previews"
                        >
                          {selectedFiles.map((f, i) => {
                            return (
                              <Card
                                className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                key={i + "-file"}
                              >
                                <div className="p-2">
                                  <Row className="align-items-center">
                                    <Col className="col-auto">
                                      <img
                                        data-dz-thumbnail=""
                                        height="80"
                                        className="avatar-sm rounded bg-light"
                                        alt={f.name}
                                        src={f.preview}
                                      />
                                    </Col>
                                    <Col>
                                      <Link
                                        to="#"
                                        className="text-muted font-weight-bold"
                                      >
                                        {f.name}
                                      </Link>
                                      <p className="mb-0">
                                        <strong>{f.formattedSize}</strong>
                                      </p>
                                    </Col>
                                  </Row>
                                </div>
                              </Card>
                            )
                          })}
                        </div>
                      </div> */}
                      <div className="mb-3">
                        <input
                          type="file"
                          onChange={event => {
                            const formData = new FormData()
                            formData.append("file", event.target.files[0])
                            formData.append("upload_preset", "qr2bdqtz")
                            fetch(
                              `https://api.cloudinary.com/v1_1/malikmukhtar/image/upload`,
                              {
                                method: "POST",
                                body: formData,
                              }
                            )
                              .then(response => {
                                return response.json()
                              })
                              .then(data => {
                                console.log("helllo", data)
                                setImageUpload(data?.secure_url)
                              })
                          }}
                        />
                      </div>

                      <CardTitle className="mb-4 font-weight-bold">
                        <Translate>Address where child if found</Translate>
                      </CardTitle>
                      <div className="mb-3">
                        <Label htmlFor="formrow-firstname-Input">
                          <Translate>House Number</Translate>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="formrow-firstname-Input"
                          onChange={e => setHouseNumber(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <Label htmlFor="formrow-firstname-Input">
                          <Translate>Landmark</Translate>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="formrow-firstname-Input"
                          onChange={e => setLandMark(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <Label htmlFor="formrow-firstname-Input">
                          <Translate>City</Translate>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="formrow-firstname-Input"
                          onChange={e => setCity(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <Label htmlFor="formrow-firstname-Input">
                          <Translate>State</Translate>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="formrow-firstname-Input"
                          onChange={e => setState(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <Label htmlFor="formrow-firstname-Input">
                          <Translate>Local Government Area</Translate>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="formrow-firstname-Input"
                          onChange={e => setLGA(e.target.value)}
                        />
                      </div>

                      <CardTitle className="mb-4 font-weight-bold">
                        <Translate>Reporter's Details</Translate>
                      </CardTitle>
                      <div className="mb-3">
                        <Label htmlFor="formrow-firstname-Input">
                          <Translate>Name</Translate>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="formrow-firstname-Input"
                          onChange={e => setReporterName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <Label htmlFor="formrow-firstname-Input">
                          <Translate>Phone Number</Translate>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="formrow-firstname-Input"
                          onChange={e => setReporterPhoneNumber(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <Label htmlFor="formrow-firstname-Input">
                          <Translate>Email</Translate>
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="formrow-firstname-Input"
                          onChange={e => setReporterEmail(e.target.value)}
                        />
                      </div>
                      <Col xl={12}>
                        <div className="d-flex p-2 justify-content-center">
                          <button
                            className="btn btn-outline-success waves-effect waves-light w-25 text-dark font-weight-bold"
                            onClick={handleFormSubmit}
                          >
                            {loading ? (
                              <Spinner color="primary" style={{height:'20px', width:'20px'}}/>
                            ) : (
                              <Translate>Submit</Translate>
                            )}
                          </button>
                        </div>
                      </Col>
                    </CardBody>
                  </Col>
                </div>
              </Col>
            )}

            {displaySuccessIcon && (
              <Col xl={12}>
                <div className="d-flex p-2 justify-content-center">
                  <Col lg={6}>
                    <Col xl={12}>
                      <CardImg
                        top
                        className="img-fluid"
                        src={newImage1}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <div className="d-flex p-2 justify-content-center">
                          <h6 className="text-dark font-weight-bold">
                            <Translate>
                              Thank you for reporting this incident. Your
                              complaint ID is
                            </Translate>
                            {referenceId},{" "}
                            <Translate>
                              We will take the necessary actions immediately
                            </Translate>
                          </h6>
                        </div>
                      </CardBody>
                    </Col>
                  </Col>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard
