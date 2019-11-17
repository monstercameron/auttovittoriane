import React from "react";
import { Row, Col } from "reactstrap";
import ReactDOM from "react-dom";
const Post = props => {
  return (
    <Row className="post-page mt-2 mb-2">
      {console.log(ReactDOM.findDOMNode(this))}
      <Col sm={8} className="mx-auto bg-white shadow">
        <Row className="border-bottom border-top text-center text-uppercase font-lg">
          {/* date */}
          <Col sm={2}>{props.date}</Col>
          {/* writer */}
          <Col sm={2}>{props.writer}</Col>
          {/* title */}
          <Col sm={8}>{props.title}</Col>
        </Row>
      </Col>
      {/* body */}
      <Col
        id={`body-${props.id}`}
        sm={8}
        className="p-5 mx-auto bg-white shadow"
      >
        <div dangerouslySetInnerHTML={{ __html: props.body }}></div>
      </Col>
    </Row>
  );
};

export default Post;
