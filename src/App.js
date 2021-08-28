import React, { Component } from "react";
import { Container, Row, Col, Dropdown, DropdownButton, FloatingLabel, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    state = {
        client: "",
        shell: "",
        html: "",
        img_count: 1,
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
                    mods: ["image", "text"],
                    image: {
                        html: "<img src='images/d_' alt='' />",
                    },
                    text: {
                        html: "<p></p>",
                    },
                },
                DirectTVStream: {
                    mods: ["image", "text"],
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
                shells: ["eComm", "Insurance", "Museum_Rublings", "New_Brand", "Visa", "PanAm", ],
                eComm: {
                    mods: ["image", "text"],
                    image: {
                        html: "<img />",
                    },
                    text: {
                        html: "<p></p>",
                    },
                },
                Insurance: {
                    mods: ["image", "text"],
                    image: {
                        html: "<img />",
                    },
                    text: {
                        html: "<p></p>",
                    },
                },
                Museum_Rublings: {
                    mods: ["image", "text"],
                    image: {
                        html: "<img />",
                    },
                    text: {
                        html: "<p></p>",
                    },
                },
                New_Brand: {
                    mods: ["image", "text"],
                    image: {
                        html: "<img />",
                    },
                    text: {
                        html: "<p></p>",
                    },
                },
                Visa: {
                    mods: ["image", "text"],
                    image: {
                        html: "<img />",
                    },
                    text: {
                        html: "<p></p>",
                    },
                },
                PanAm: {
                    mods: ["image", "text"],
                    image: {
                        html: "<img />",
                    },
                    text: {
                        html: "<p></p>",
                    },
                },
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
        const { client, shell, html, img_count, data} = this.state;

        let string = data[client][shell][mod].html;

        // AT&T Logic
        if(client === "AT&T" && mod === "image") {
            let sub1 = string.substring(0, string.search("d_") + 2);
            let sub2 = string.substring(string.search("d_") + 2);

            string = sub1 + img_count.toString() + sub2;

        }

        this.setState(() => ({
            html: html + string + "\n",
            img_count: img_count + 1
        }))
    }

    // Metacharacter - \n: new line, \t: tab

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h3>Selected client: {this.state.client}</h3>
                            <h3>Selected shell: {this.state.shell}</h3>
                            <h3>Image count: {this.state.img_count}</h3>
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
                                controlId="textareaForm"
                                label="HTML"
                            >
                                <Form.Control
                                    as="textarea"
                                    placeholder=""
                                    style={{ height: "700px" }}
                                    defaultValue={this.state.html}
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
