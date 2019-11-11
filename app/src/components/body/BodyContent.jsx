import React from "react";
import { Row, Col, Button } from "reactstrap";
const BodyContent = () => {
  return (
    <Row className="mt-1 mb-1">
      <Col sm={8} className="border mx-auto shadow mt-1 mb-1">
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
