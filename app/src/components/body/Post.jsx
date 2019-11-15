import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import test from "../../media/images/test.jpg";
const Post = props => {
  const type = "post";
  return (
    <Row>
      <Col sm={12} className="">
        <Row className="border-bottom border-top text-center text-uppercase font-lg">
          {/* date */}
          <Col sm={2}>In Post date</Col>
          {/* writer */}
          <Col sm={2}>writer</Col>
          {/* title */}
          <Col sm={8}>title</Col>
        </Row>
      </Col>
      {/* body */}
      <Col sm={12} className="p-5">
        {`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            corporis tenetur facere esse, sapiente ea veritatis, voluptates,
            eius dignissimos dolorem expedita at unde repellat voluptatibus a
            similique rerum hic culpa!`}
        <img
          src={test}
          alt="test images"
          className="img-fluid d-block img-thumbnail"
        />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolore
        eaque ad deserunt, harum deleniti eveniet cupiditate magni quod
        reiciendis corrupti autem ipsum vitae, veniam sed eum. Quibusdam, vel
        dolorum! this is a{" "}
        <a href="http://www.google.com" target="_new">
          link
        </a>
      </Col>
    </Row>
  );
};

export default Post;
