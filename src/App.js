import React, { Component } from "react";
import { Container, Row, Col, Dropdown, DropdownButton, FloatingLabel, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    state = {
        client: "",
        shell: "",
        disableClient: false,
        disableShell: true,
        disableMod: true,
        data: {
            "AT&T": {
                name: "AT&T",
                shells: ["CLM", "CrossSell_Template", "DirectTVStream"],
                CLM: {
                    mods: ["image", "text"],
                    image: {
                        html: "<img />",
                    },
                    text: {
                        html: "<p></p>",
                    },
                },
                CrossSell_Template: {
                    image: {
                        html: "<img />",
                    },
                    text: {
                        html: "<p></p>",
                    },
                },
                DirectTVStream: {
                    image: {
                        html: "<img />",
                    },
                    text: {
                        html: "<p></p>",
                    },
                },
            },
            "H-D": {
                name: "Harley Davidson",
                shells: [
                    "eComm",
                    "Insurance",
                    "Museum_Rublings",
                    "New_Brand",
                    "Visa",
                    "PanAm",
                ],
            },
        },
    };

    handleClient = (client) => {
        this.setState(() => ({
            client,
            disableClient: true,
            disableShell: false,
        }));
    };

    handleShell = (shell) => {
        this.setState(() => ({
            shell,
            disableShell: true,
            disableMod: false
        }));
    };

    handleMod = (mod) => {
        console.log(mod)
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
                                <Dropdown.Item
                                    onClick={() => this.handleClient("AT&T")}
                                >
                                    AT&T
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => this.handleClient("H-D")}
                                >
                                    H-D
                                </Dropdown.Item>
                            </DropdownButton>

                            {this.state.client !== "" && (
                                <DropdownButton
                                    id="dropdown-basic-button"
                                    title="Select Shell"
                                    disabled={this.state.disableShell}
                                >
                                    {this.state.data[
                                        this.state.client
                                    ].shells.map((shell) => {
                                        return (
                                            <Dropdown.Item
                                                onClick={() =>
                                                    this.handleShell(shell)
                                                }
                                                key={shell}
                                            >
                                                {shell}
                                            </Dropdown.Item>
                                        );
                                    })}
                                </DropdownButton>
                            )}

                            {this.state.shell !== "" && (
                                <DropdownButton
                                    id="dropdown-basic-button"
                                    title="Select Mod"
                                    disabled={this.state.disableMod}
                                >
                                    {this.state.data[this.state.client][
                                        this.state.shell
                                    ].mods.map((mod) => {
                                        return (
                                            <Dropdown.Item
                                                onClick={() =>
                                                    this.handleMod(mod)
                                                }
                                                key={mod}
                                            >
                                                {mod}
                                            </Dropdown.Item>
                                        );
                                    })}
                                </DropdownButton>
                            )}
                        </Col>
                        <Col>
                            <FloatingLabel
                                controlId="textarea"
                                label="HTML"
                            >
                                <Form.Control
                                    as="textarea"
                                    placeholder=""
                                    style={{ height: "700px" }}
                                />
                            </FloatingLabel>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
