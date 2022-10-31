import React from "react"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, UncontrolledTooltip, Table, Input,  Button } from "reactstrap"
import { MDBDataTable } from "mdbreact"
import { Link } from 'react-router-dom'
// import Breadcrumbs from "../../components/Common/Breadcrumb"
import { request } from "../../../services/utilities"
import ReactPaginate from "react-paginate"

function PostList(props) {

 
  const onClickDelete = async id => {
    if (window.confirm('Are u sure!')) {
      let url = `sections?id=${id}`
      try {
        const rs = await request(url, 'DELETE', false);
        if (rs.success === true) {
          props.fetchPosts();
          props.showToast('success', 'Successfully Deleted');
        }
      } catch (err) {
        console.log(err);
        props.showToast('error', 'Failed to Delete');

      }
    }

  }
  return (
    <React.Fragment>

      <Row>
        <Col className="col-12">
          <Card>
            <CardBody>
              <CardTitle>
                <div className="d-flex float-end mb-2">
                  <div className="mx-2">
                    <Input type="text" placeholder="search post" style={{ borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }} />
                    {/* <Button color="primary" style={{ borderRadius: '0px', borderTopRightRadius: '10px' }}> Search</Button> */}
                  </div>
                  <div>
                    <Link to='/new-post' className="btn btn-primary">
                      Add New
                    </Link>
                  </div>
                </div>
              </CardTitle>
              <div className="">
                <Table bordered striped>
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
                    {props.posts?.map((e, i) => {
                      return (
                        <tr key={i} className='text-capitalize'>
                          <th scope="row">
                            <Input type="checkbox" />
                          </th>
                          <td>
                            {e.title}
                          </td>
                          <td>
                            News
                          </td>
                          <td>
                            News
                          </td>
                          <td>
                            {e.tags}
                          </td>
                          <td>
                            {new Date(e.createdAt).toDateString()}

                          </td>
                          <td>
                            <div className="d-flex gap-3 users">
                              <ul className="list-inline font-size-20 contact-links mb-0">
                                <li className="list-inline-item">
                                  <Link
                                    to={`/view-post/${e.id}`}
                                    className="text-dark"
                                  // onClick={() => {
                                  //   const users = cellProps.row.original
                                  //   // handleUserClick(users)
                                  // }}
                                  >
                                    <i className="uil-expand-arrows-alt font-size-18" id="edittooltip" />
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      View Details
                                    </UncontrolledTooltip>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link
                                    to={`/edit-post/${e.id}`}
                                    className="text-dark"
                                  // onClick={() => {
                                  //   const users = cellProps.row.original
                                  //   // handleUserClick(users)
                                  // }}
                                  >
                                    <i className="uil-edit-alt font-size-18" id="edittooltip" />
                                    <UncontrolledTooltip placement="top" target="edittooltip">
                                      Edit
                                    </UncontrolledTooltip>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link
                                    to="#"
                                    onClick={() => {
                                      onClickDelete(e.id)
                                    }}
                                    className="text-dark"

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
                      )
                    })}
                  </tbody>
                </Table>
                <div className="mt-3 d-flex align-items-center justify-content-between">
                  <div>Showing 1 to 10 of {props.meta?.total} entries</div>

                  <div>
                    <ReactPaginate
                      nextLabel='Next'
                      breakLabel='...'
                      previousLabel='Prev'
                      pageCount={props.count}
                      activeClassName='active'
                      breakClassName='page-item'
                      pageClassName={'page-item'}
                      breakLinkClassName='page-link'
                      nextLinkClassName={'page-link'}
                      pageLinkClassName={'page-link'}
                      nextClassName={'page-item next'}
                      previousLinkClassName={'page-link'}
                      previousClassName={'page-item prev'}
                      onPageChange={page => props.handlePagination(page)}
                      forcePage={props.currentPage !== 0 ? props.currentPage - 1 : 0}
                      containerClassName={'pagination react-paginate justify-content-end p-1'}
                    />
                  </div>

                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default PostList