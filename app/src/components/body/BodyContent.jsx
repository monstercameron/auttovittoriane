import React from "react";
import { Row, Col, Button } from "reactstrap";
import "./style.css";
const BodyContent = () => {
  const CONTENT_PREVIEW_SIZE = 250;
  return (
    <Row className="mt-1 mb-1">
      <Col sm={8} className="border mx-auto shadow mt-1 mb-1">
        {/* Preview post */}
        <Row>
          <Col sm={12} className="">
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
          <Col sm={12} className="p-5">
            {`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            corporis tenetur facere esse, sapiente ea veritatis, voluptates,
            eius dignissimos dolorem expedita at unde repellat voluptatibus a
            similique rerum hic culpa!`
              .substring(0, CONTENT_PREVIEW_SIZE)
              .concat("...")}
          </Col>
          <Col sm={4} className="mx-auto border mt-2 mb-5 read-more text-center p-2">
            Read More
          </Col>
        </Row>

        {/* without featured video */}
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
