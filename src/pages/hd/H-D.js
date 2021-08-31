import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class HD extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        H-D Shells
                    </Col>
                    <Col>
                        <Link to="/">Reset</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/eComm">eComm</Link>
                    </Col>
                </Row>
            </div>
            
        )
    }
}

export default HD;