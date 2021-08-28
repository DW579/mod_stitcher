import React, { Component } from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    state = {
        client: "",
        shell: "",
        disableClient: false,
        disableShell: false
    }

    handleClient = (client) => {
        this.setState(() => ({
            client,
            disableClient: true
        }));
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h3>Selected client: {this.state.client}</h3>
                            <h3>Selected shell: {this.state.shell}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <DropdownButton
                                id="dropdown-basic-button"
                                title="Select Client"
                                disabled={this.state.disableClient}
                            >
                                <Dropdown.Item onClick={() => this.handleClient("AT&T")}>
                                    AT&T
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => this.handleClient("H-D")}>
                                    H-D
                                </Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
