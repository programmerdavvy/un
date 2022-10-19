import React from "react"
import { Container, Row, Col } from "reactstrap"
import ilologo from "../../assets/images/un/ilologo.png"
import arrowUp from "../../assets/images/un/arrowUp.png"
import { Link } from "react-router-dom"

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  return (
    <React.Fragment>
      <footer>
        <Container fluid={true} className=" bg-success">
          <Row>
            <Col xl={2} className="text-white ">
              <div className="d-flex justify-content-center" onClick={handleScrollToTop} style={{cursor:'pointer'}}>
              <span className="m-2">Back to the Top</span> <img src={arrowUp} height='15px' className="mt-2 pt-1" />{" "}
              </div>
            </Col>
            <Col
              xl={10}
              className="d-flex flex-column justify-content-end"
            >
              <div className="d-flex p-2 justify-content-center">
                <h4 className="text-white">STAKEHOLDERS</h4>
              </div>
              <div className="d-flex p-2 justify-content-center">
                <hr className="pt-1 bg-white w-75" />
              </div>
              <div className="d-flex p-2 justify-content-center">
                <img src={ilologo} />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
