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
                        // eslint-disable-next-line
                        html: '<!-- Start Image -->\n\t<div style="width:100%;">\n\t\t<table bgcolor="#f7f7f7" align="center" cellpadding="0" cellspacing="0" style="border-collapse:collapse; font-size:0; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:700px">\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<td align="left" bgcolor="#f7f7f7" style="padding-top:0px;padding-bottom: 0px; padding-left: 0px; padding-right: 0px;">\n\t\t\t\t\t\t<a href="${clickthrough("#")}" target="_blank">\n\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\tsrc="images/d_.jpg"\n\t\t\t\t\t\t\t\talt=""\n\t\t\t\t\t\t\t\twidth="700"\n\t\t\t\t\t\t\t\tclass="set_mobile_hero_100 hide_for_mobile_440"\n\t\t\t\t\t\t\t\tstyle="display: block; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-style: none; border-width: 0px;width: 100%; max-width: 700px;">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<!--[if !mso]><!-->\n\t\t\t\t\t\t<div class="show_for_mobile_440 set_mobile_hero_440" style="display: none; width: 0px; height: 0px; overflow: hidden; position: absolute; max-height: 0px; line-height: 0px; font-size: 0px; mso-hide:all;">\n\t\t\t\t\t\t\t<a href="${clickthrough("#")}" target="_blank">\n\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\tsrc="images/m_.jpg"\n\t\t\t\t\t\t\t\t\talt=""\n\t\t\t\t\t\t\t\t\tborder="0"\n\t\t\t\t\t\t\t\t\tclass="show_for_mobile_440"\n\t\t\t\t\t\t\t\t\tstyle="display: none; width: 100%; height: 0px; overflow: hidden; position: absolute; max-height: 0px; line-height: 0px; font-size: 0px; mso-hide:all;">\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--<![endif]-->\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n<!--End Image-->'
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
        let { client, shell, html, img_count, data} = this.state;

        let string = data[client][shell][mod].html;

        // AT&T Logic
        if(client === "AT&T" && shell === "CrossSell_Template" && mod === "image") {
            let sub1 = string.substring(0, string.search("d_") + 2);
            let sub2 = string.substring(string.search("d_") + 2);

            string = sub1 + img_count.toString() + sub2;

            img_count++;
        }

        this.setState(() => ({
            html: html + string + "\n\n",
            img_count: img_count
        }))
    }

    // Metacharacter - \n: new line, \t: tab

    render() {
        return (
            <div>
                <Container fluid>
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
                            {/* <FloatingLabel
                                controlId="textareaForm"
                                label="HTML"
                            >
                                <Form.Control
                                    as="textarea"
                                    placeholder=""
                                    style={{ height: "700px" }}
                                    defaultValue={this.state.html}
                                />
                            </FloatingLabel> */}
                        </Col>
                    </Row>
                    <Row>
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
