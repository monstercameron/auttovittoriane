import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
const PostPreview = props => {
  const type = "post";
  const CONTENT_PREVIEW_SIZE = 250;
  return (
    <Row>
      {console.log(props)}
      <Col sm={12} className="">
        <Row className="border-bottom border-top text-uppercase">
          {/* date */}
          <Col sm={2}>{props.date}</Col>
          {/* writer */}
          <Col sm={3}>{props.writer}</Col>
          {/* title */}
          <Col sm={7}>{props.title}</Col>
        </Row>
      </Col>
      {/* body */}
      <Col sm={12} className="p-5">
        {props.body.substring(0, CONTENT_PREVIEW_SIZE).concat("...")}
      </Col>
      <Col className='pb-3'>
        <Row>
          <Col sm={4} className='mx-auto border shadow-sm text-center'>
            Read More
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PostPreview;
