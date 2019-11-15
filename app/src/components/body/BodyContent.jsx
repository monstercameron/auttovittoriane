import React from "react";
import { Row, Col, Button } from "reactstrap";
import "./style.css";
import Post from "../body/Post";
import PostPreview from "../body/PostPreview";
const BodyContent = (props) => {
  const {db} = props
  const mapPosts = (post, id) => {
    return <PostPreview key={`post-id-${id}`} {...post} />
  }
  const listPosts = () => {
    return db.get('posts')
    .sortBy('id')
    .take(5)
    .value()
    .map(mapPosts)
  }
  return (
    <Row className="mt-1 mb-1">
      {console.log(listPosts())}
      <Col
        sm={8}
        className="border-left border-right bg-white mx-auto shadow mt-1 mb-1"
      >
        {/* <Post /> */}
        {listPosts()}
        
        {/* without featured video */}
        <Row>
          <Col sm={12}>
            <Row className="border-bottom border-top text-center text-uppercase font-lg">
              {/* date */}
              <Col sm={2}>date</Col>
              {/* writer */}
              <Col sm={2}>writer</Col>
              {/* title */}
              <Col sm={8}>title</Col>
            </Row>
          </Col>
          {/* body */}
          <Col sm={12} className="p-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            corporis tenetur facere esse, sapiente ea veritatis, voluptates,
            eius dignissimos dolorem expedita at unde repellat voluptatibus a
            similique rerum hic culpa!
          </Col>
          {/* previous */}
          <Col sm={6} className="mx-auto">
            <Row>
              <Col sm={6} className="text-center p-2">
                <Button color="" className="btn-block shadow">
                  Previous
                </Button>
              </Col>
              <Col sm={6} className="text-center p-2">
                <Button color="" className="btn-block shadow">
                  Next
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* with featured video */}
        <Row>
          <Col sm={12}>
            <Row className="border-bottom text-center text-uppercase font-lg">
              {/* date */}
              <Col sm={2}>date</Col>
              {/* writer */}
              <Col sm={2}>writer</Col>
              {/* title */}
              <Col sm={8}>title</Col>
            </Row>
          </Col>
          {/* body */}
          <Col sm={12}>body</Col>
          {/* previous */}
          <Col sm={6} className="mx-auto">
            <Row>
              <Col sm={6} className="text-center p-2">
                <Button color="" className="btn-block shadow">
                  Previous
                </Button>
              </Col>
              <Col sm={6} className="text-center p-2">
                <Button color="" className="btn-block shadow">
                  Next
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default BodyContent;
