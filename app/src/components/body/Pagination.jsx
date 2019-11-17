import React from "react";
import { Col, Row } from "reactstrap";
const Pagination = props => {
  const DEFAULT_ADD_PAGES = 5;
  const { setPosts } = props;
  return (
    <Row>
      <Col
        sm={3}
        className="mx-auto text-center border shadow mt-5 mb-3 load-more"
        onClick={_ => setPosts(posts => posts + DEFAULT_ADD_PAGES)}
      >
        Load More
      </Col>
    </Row>
  );
};

export default Pagination;
