import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Clients extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        Clients
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/at&t">AT&T</Link>
                    </Col>
                    <Col>
                        <Link to="/h-d">H-D</Link>
                    </Col>
                    <Col>
                        <Link to="/kraft">Kraft</Link>
                    </Col>
                </Row>
            </div>
            
        )
    }
}

export default Clients;