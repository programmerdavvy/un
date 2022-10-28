import React from "react"
import { Card, CardBody, DropdownToggle, DropdownMenu, DropdownItem, Table, UncontrolledDropdown } from "reactstrap"

import FeatherIcon from "feather-icons-react"
//Simple bar
import SimpleBar from "simplebar-react"
import { Link } from "react-router-dom"
//Import Image
import avatar1 from "../../assets/images/users/avatar-1.jpg"
import avatar2 from "../../assets/images/users/avatar-2.jpg"
import avatar4 from "../../assets/images/users/avatar-4.jpg"
import avatar5 from "../../assets/images/users/avatar-5.jpg"
import avatar6 from "../../assets/images/users/avatar-6.jpg"
import avatar7 from "../../assets/images/users/avatar-7.jpg"
import avatar8 from "../../assets/images/users/avatar-8.jpg"

const TopUser = () => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    {/* <div className="float-end">
                        <UncontrolledDropdown>
                            <DropdownToggle tag="a" className="text-reset" id="dropdownMenuButton5" caret>
                                <span className="text-muted">All Members<i className="mdi mdi-chevron-down ms-1"></i></span>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                                <DropdownItem href="#">Locations</DropdownItem>
                                <DropdownItem href="#">Revenue</DropdownItem>
                                <DropdownItem href="#">Join Date</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div> */}
                    <h4 className="card-title mb-4">Case Analysis</h4>
                    <SimpleBar>
                        <div className="table-responsive">
                            <Table className="table-borderless table-centered table-nowrap">
                                <tbody>
                                    <tr>
                                        <td style={{ width: "20px" }}><img src={avatar4} className="avatar-xs rounded-circle " alt="..." /></td>
                                        <td>
                                            <h6 className="font-size-15 mb-1 fw-normal">Imo State</h6>
                                            <p className="text-muted font-size-13 mb-0">
                                                <i className="mdi mdi-map-marker"></i> </p>
                                        </td>
                                        <td className="text-muted fw-semibold text-end">
                                            <FeatherIcon icon="trending-up" className="icon-xs icon me-2 text-success" />3 cases in total
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "20px" }}><img src={avatar4} className="avatar-xs rounded-circle " alt="..." /></td>
                                        <td>
                                            <h6 className="font-size-15 mb-1 fw-normal">Imo State</h6>
                                            <p className="text-muted font-size-13 mb-0">
                                                <i className="mdi mdi-map-marker"></i> </p>
                                        </td>
                                        <td className="text-muted fw-semibold text-end">
                                            <FeatherIcon icon="trending-up" className="icon-xs icon me-2 text-success" />3 cases in total
                                        </td>
                                    </tr>  <tr>
                                        <td style={{ width: "20px" }}><img src={avatar4} className="avatar-xs rounded-circle " alt="..." /></td>
                                        <td>
                                            <h6 className="font-size-15 mb-1 fw-normal">Imo State</h6>
                                            <p className="text-muted font-size-13 mb-0">
                                                <i className="mdi mdi-map-marker"></i> </p>
                                        </td>
                                        <td className="text-muted fw-semibold text-end">
                                            <FeatherIcon icon="trending-up" className="icon-xs icon me-2 text-success" />3 cases in total
                                        </td>
                                    </tr>  <tr>
                                        <td style={{ width: "20px" }}><img src={avatar4} className="avatar-xs rounded-circle " alt="..." /></td>
                                        <td>
                                            <h6 className="font-size-15 mb-1 fw-normal">Imo State</h6>
                                            <p className="text-muted font-size-13 mb-0">
                                                <i className="mdi mdi-map-marker"></i> </p>
                                        </td>
                                        <td className="text-muted fw-semibold text-end">
                                            <FeatherIcon icon="trending-up" className="icon-xs icon me-2 text-success" />3 cases in total
                                        </td>
                                    </tr>  <tr>
                                        <td style={{ width: "20px" }}><img src={avatar4} className="avatar-xs rounded-circle " alt="..." /></td>
                                        <td>
                                            <h6 className="font-size-15 mb-1 fw-normal">Imo State</h6>
                                            <p className="text-muted font-size-13 mb-0">
                                                <i className="mdi mdi-map-marker"></i> </p>
                                        </td>
                                        <td className="text-muted fw-semibold text-end">
                                            <FeatherIcon icon="trending-up" className="icon-xs icon me-2 text-success" />3 cases in total
                                        </td>
                                    </tr>  <tr>
                                        <td style={{ width: "20px" }}><img src={avatar4} className="avatar-xs rounded-circle " alt="..." /></td>
                                        <td>
                                            <h6 className="font-size-15 mb-1 fw-normal">Imo State</h6>
                                            <p className="text-muted font-size-13 mb-0">
                                                <i className="mdi mdi-map-marker"></i> </p>
                                        </td>
                                        <td className="text-muted fw-semibold text-end">
                                            <FeatherIcon icon="trending-up" className="icon-xs icon me-2 text-success" />3 cases in total
                                        </td>
                                    </tr>  <tr>
                                        <td style={{ width: "20px" }}><img src={avatar4} className="avatar-xs rounded-circle " alt="..." /></td>
                                        <td>
                                            <h6 className="font-size-15 mb-1 fw-normal">Imo State</h6>
                                            <p className="text-muted font-size-13 mb-0">
                                                <i className="mdi mdi-map-marker"></i> </p>
                                        </td>
                                        <td className="text-muted fw-semibold text-end">
                                            <FeatherIcon icon="trending-up" className="icon-xs icon me-2 text-success" />3 cases in total
                                        </td>
                                    </tr>  <tr>
                                        <td style={{ width: "20px" }}><img src={avatar4} className="avatar-xs rounded-circle " alt="..." /></td>
                                        <td>
                                            <h6 className="font-size-15 mb-1 fw-normal">Imo State</h6>
                                            <p className="text-muted font-size-13 mb-0">
                                                <i className="mdi mdi-map-marker"></i> </p>
                                        </td>
                                        <td className="text-muted fw-semibold text-end">
                                            <FeatherIcon icon="trending-up" className="icon-xs icon me-2 text-success" />3 cases in total
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "20px" }}><img src={avatar4} className="avatar-xs rounded-circle " alt="..." /></td>
                                        <td>
                                            <h6 className="font-size-15 mb-1 fw-normal">Enugu State</h6>
                                            <p className="text-muted font-size-13 mb-0">
                                                <i className="mdi mdi-map-marker"></i> </p>
                                        </td>
                                        <td className="text-muted fw-semibold text-end">
                                            <FeatherIcon icon="trending-up" className="icon-xs icon me-2 text-success" />4 cases in total
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Link to="#" className="float-end has-arrow waves-effect">
                                {/* <i className="uil-apps"></i> */}
                                load more</Link>

                        </div>
                    </SimpleBar>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default TopUser