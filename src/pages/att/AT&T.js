import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class ATT extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        AT&T Shells
                    </Col>
                    <Col>
                        <Link to="/">Reset</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* <Link to="/at&t">AT&T</Link> */}
                    </Col>
                </Row>
            </div>
            
        )
    }
}

export default ATT;