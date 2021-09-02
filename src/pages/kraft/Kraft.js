import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Kraft extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        Kraft Shells
                    </Col>
                    <Col>
                        <Link to="/">Reset</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/template_2021">Template 2021</Link>
                    </Col>
                </Row>
            </div>
            
        )
    }
}

export default Kraft;