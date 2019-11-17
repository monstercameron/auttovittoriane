import React, { Component } from "react";
import { Container } from "reactstrap";
import { withRouter } from "react-router-dom";
import Header from "../components/header/Header";
import Post from "../components/body/Post";
import Footer from "../components/footer/Footer";
import "./style.css";
class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.post = this.dbQuery()
  }
  linkTo = link => {
    this.props.history.push(link);
  };
  dbQuery = () => {
    return this.props.db
      .get("posts")
      .find({ id: this.props.match.params.id })
      .value();
  };
  render() {
    console.log(this.props, this.state);
    return (
      <Container fluid className="">
        {/* Header */}
        <Header linkTo={this.linkTo} />
        {/* content */}
        <Post {...this.state.post} linkTo={this.linkTo} />
        {/* footer/other info */}
        <Footer linkTo={this.linkTo} />
      </Container>
    );
  }
}

export default withRouter(PostPage);
