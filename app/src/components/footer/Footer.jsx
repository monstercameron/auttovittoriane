import React from 'react';
import { Row, Col } from "reactstrap";
import './style.css'
const Footer = (props) => {
    return ( 
        <Row>
          <Col sm={8} className='mx-auto mt-1 mb-1 border text-center shadow'>
            <Row>
                <Col className="border m-1 footer-menu-item" onClick={_=> props.linkTo('/ext/www.google.com')}>
                    link
                </Col>
                <Col className="border m-1 footer-menu-item" onClick={_=> props.linkTo('')}>
                    link
                </Col>
                <Col className="border m-1 footer-menu-item" onClick={_=> props.linkTo('')}>
                    link
                </Col>
                <Col className="border m-1 footer-menu-item" onClick={_=> props.linkTo('')}>
                    link
                </Col>
            </Row>
          </Col>
        </Row> );
}
export default Footer;