import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row, Table } from "reactstrap";
import { isEmpty, map } from "lodash";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import axios from 'axios'
import newImage1 from "../../assets/images/un/children.png"

//Import Image
import logo from "../../assets/images/logo-dark.png";
import PropTypes from "prop-types";
import { getInvoiceDetail } from "../../store/invoices/actions";
import { connect } from "react-redux";
import { useState } from "react";
import Slidewithcontrol from "../Ui/CarouselTypes/iloslidewithcontrol";
import Title from "../../components/Common/Title";
import VideoCard from "../../components/Common/VideoCard";
import EventsCard from "../../components/Common/EventsCard";
import TopRead from "../../components/Common/TopRead";

const InvoiceDetail = props => {
  const {
    invoiceDetail,
    match: { params },
    onGetInvoiceDetail,
  } = props;

  
  
  const [individualNews, setIndividualNews] = useState(null)
  
  useEffect(() => {
    const fetchAllNews = async () => {
      const response = await axios.get(
        `https://unirp.herokuapp.com/sections/?pageId=1&id=${params.id}&language=&events=&commentPage=1&commentLimit=20`
        )
        console.log(response)

      setIndividualNews(response?.data?.result)
    }
    fetchAllNews()
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
            <Col xl={8}>
                <Title title="NEWS" />
                  <Card>
                    <CardImg
                      top
                      className="img-fluid"
                      src={individualNews?.media[0].link}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle className="h4 mt-0">{individualNews?.title}</CardTitle>
                      <CardText>
                      {individualNews?.content}
                      </CardText>
                      
                    </CardBody>
                  </Card>
            </Col>
            <Col xl={4}>
              <Title title="VIDEO GALLERY" />
              <VideoCard />
              <Title title="EVENTS" />
              <EventsCard />
            </Col>
            <Col xl={12}>
              <Title title="TOP READ" />
              <TopRead />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
};

InvoiceDetail.propTypes = {
  invoiceDetail: PropTypes.object,
  onGetInvoiceDetail: PropTypes.func,
};

const mapStateToProps = ({ invoices }) => ({
  invoiceDetail: invoices.invoiceDetail,
});

const mapDispatchToProps = dispatch => ({
  onGetInvoiceDetail: id => dispatch(getInvoiceDetail(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(InvoiceDetail));
