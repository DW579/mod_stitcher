import React, { Component } from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    state = {
        client: "",
        shell: "",
        disableClient: false,
        disableShell: false,
        data: {
            ATT: {
                name: "AT&T"
            },
            HD: {
                name: "Harly Davidson"
            }
        }
    }

    handleClient = (client) => {
        const client_name = this.state.data[client].name;

        this.setState(() => ({
            client: client_name,
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
                                <Dropdown.Item onClick={() => this.handleClient("ATT")}>
                                    AT&T
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => this.handleClient("HD")}>
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
