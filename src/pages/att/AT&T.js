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
                        <Link to="/cross-sell-700">CrossSell 700</Link>
                    </Col>
                </Row>
            </div>
            
        )
    }
}

export default ATT;