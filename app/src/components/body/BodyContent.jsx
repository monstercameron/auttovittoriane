import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import "./style.css";
import PostPreview from "../body/PostPreview";
import Pagination from "./Pagination";
const BodyContent = props => {
  const { db, linkTo } = props;
  const DEFAULT_PAGE_SIZE = 5;
  const [posts, setPosts] = useState(DEFAULT_PAGE_SIZE);
  const mapPosts = (post, id) => {
    return <PostPreview key={`post-id-${id}`} {...post} linkTo={linkTo} />;
  };
  const listPosts = () => {
    return db
      .get("posts")
      .sortBy("id")
      .take(posts)
      .value()
      .map(mapPosts);
  };
  return (
    <Row className="mt-1 mb-1">
      <Col
        sm={8}
        className="border-left border-right bg-white mx-auto shadow mt-1 mb-1"
      >
        {/* <Post /> */}
        {listPosts()}
        {<Pagination setPosts={setPosts} />}
      </Col>
    </Row>
  );
};

export default BodyContent;
