import React, { Component } from "react";
import { Container } from "reactstrap";
import { withRouter } from "react-router-dom";
import Header from "../components/header/Header";
import BodyContent from "../components/body/BodyContent";
import Footer from "../components/footer/Footer";
import "./style.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  linkTo = link => {
    this.props.history.push(link);
  };
  render() {
    return (
      <Container fluid className="">
        {/* Header */}
        <Header linkTo={this.linkTo} />
        {/* body/content */}
        <BodyContent {...this.props} linkTo={this.linkTo} />
        {/* footer/other info */}
        <Footer linkTo={this.linkTo} />
      </Container>
    );
  }
}

export default withRouter(Home);
