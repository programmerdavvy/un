import React from "react"
import { Row, Col, Card, CardBody, CardTitle, UncontrolledTooltip, Table, Input, Pagination, PaginationItem, PaginationLink, Button } from "reactstrap"
import { Link } from "react-router-dom"
//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"


function PostList() {


  return (
    <React.Fragment>

      <Row>
        <Col className="col-12">
          <Card>
            <CardBody>
              <CardTitle>
                <div className="d-flex justify-content-between">
                  <div className="w-50 d-flex">
                    <Input type="text" placeholder="search post" style={{ borderTopRightRadius: '0px',borderBottomRightRadius: '0px' }} />
                    <Button color="primary" style={{ borderRadius: '0px', borderTopRightRadius: '10px' }}> Search</Button>
                  </div>
                  <div>
                    <Link to='/admin-new-post' className="btn btn-success">
                      Add New
                    </Link>
                  </div>
                </div>
              </CardTitle>
              <Table bordered>
                <thead>
                  <tr>
                    <th>
                      <Input type="checkbox" />
                    </th>
                    <th>
                      Title
                    </th>
                    <th>
                      Author
                    </th>
                    <th>
                      Categories
                    </th>
                    <th>
                      Tags
                    </th>
                    <th>
                      Date
                    </th>
                    <th>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Input type="checkbox" />
                    </th>
                    <td>
                      Micheal
                    </td>
                    <td>
                      News
                    </td>
                    <td>
                      News
                    </td>
                    <td>
                      Child Trafficking
                    </td>
                    <td>
                      21-02-2022

                    </td>
                    <td>
                      <div className="d-flex gap-3 users">
                        <ul className="list-inline font-size-20 contact-links mb-0">
                          <li className="list-inline-item">
                            <Link
                              to="/view-post/1"
                              className="text-primary"
                            // onClick={() => {
                            //   const users = cellProps.row.original
                            //   // handleUserClick(users)
                            // }}
                            >
                              <i className="uil-eye font-size-18" id="edittooltip" />
                              <UncontrolledTooltip placement="top" target="edittooltip">
                                View Details
                              </UncontrolledTooltip>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              to="/edit-post/1"
                              className="text-primary"
                            // onClick={() => {
                            //   const users = cellProps.row.original
                            //   // handleUserClick(users)
                            // }}
                            >
                              <i className="uil uil-pen font-size-18" id="edittooltip" />
                              <UncontrolledTooltip placement="top" target="edittooltip">
                                Edit
                              </UncontrolledTooltip>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="text-danger"
                            // onClick={() => {
                            //   const users = cellProps.row.original
                            //   onClickDelete(users)
                            // }}
                            >
                              <i
                                className="uil uil-trash-alt font-size-18"
                                id="deletetooltip"
                              />
                              <UncontrolledTooltip placement="top" target="deletetooltip">
                                Delete
                              </UncontrolledTooltip>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div className="float-end">
                <Pagination aria-label="Page navigation example">
                  <PaginationItem disabled>
                    <PaginationLink
                      first
                      href="#"
                    />
                  </PaginationItem>
                  <PaginationItem disabled>
                    <PaginationLink
                      href="#"
                      previous
                    />
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem disabled>
                    <PaginationLink href="#">
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      4
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      5
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      next
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      last
                    />
                  </PaginationItem>
                </Pagination>
              </div>
              {/* <MDBDataTable responsive bordered data={data} /> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default PostList