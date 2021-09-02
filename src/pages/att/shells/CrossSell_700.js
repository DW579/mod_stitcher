import React, { Component } from "react";
import { Row, Col, FloatingLabel, Form, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

render() {
    return (
        <div>
            <Row>
                <Col>AT&T - CrossSell 700 Shell</Col>
                <Col>
                    <Link to="/">Reset</Link>
                </Col>
            </Row>
        </div>
    )
}