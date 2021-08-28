import React, { Component } from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    state = {
        client_selected: "ATT",
        client: "",
        shell: "",
        disableClient: false,
        disableShell: true,
        data: {
            ATT: {
                name: "AT&T",
                shells: ["CLM", "CrossSell_Template", "DirectTVStream"]
            },
            HD: {
                name: "Harley Davidson",
                shells: ["eComm", "Insurance", "Museum_Rublings", "New_Brand", "Visa", "PanAm"]
            }
        }
    }

    handleClient = (client_selected) => {
        const client_name = this.state.data[client_selected].name;

        this.setState(() => ({
            client: client_name,
            client_selected,
            disableClient: true,
            disableShell: false
        }));
    }

    handleShell = (shell) => {
        this.setState(() => ({
            shell,
            disableShell: true
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
                                    Harley Davidson
                                </Dropdown.Item>
                            </DropdownButton>

                            <DropdownButton
                                id="dropdown-basic-button"
                                title="Select Shell"
                                disabled={this.state.disableShell}
                            >
                                {this.state.data[this.state.client_selected].shells.map((shell) => {
                                    return <Dropdown.Item onClick={() => this.handleShell(shell)} key={shell}>
                                        {shell}
                                    </Dropdown.Item>
                                })}
                            </DropdownButton>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
