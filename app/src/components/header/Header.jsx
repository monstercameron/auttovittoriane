import React from "react";
import { Row, Col } from "reactstrap";
import "./style.css";
const Header = props => {
  return (
    <Row>
      <Col
        sm={8}
        className="border mt-2 mb-2 mx-auto font-lg text-center text-uppercase header-font shadow"
      >
        <Row>
          <Col
            className="border header m-1 p-1"
            onClick={_ => props.linkTo("/")}
          >
            Home
          </Col>
          <Col
            className="border header m-1 p-1"
            onClick={_ => props.linkTo("/changelog")}
          >
            Change Log
          </Col>
          <Col
            className="border header m-1 p-1"
            onClick={_ => props.linkTo("/search")}
          >
            Search
          </Col>
          <Col
            className="border header m-1 p-1"
            onClick={_ => props.linkTo("/aboutme")}
          >
            About Me
          </Col>
          <Col
            className="border header m-1 p-1"
            onClick={_ => props.linkTo("/sponsor")}
          >
            Sponsor
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
