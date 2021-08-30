import React, { Component } from "react";
import { Container, Row, Col, Dropdown, DropdownButton, FloatingLabel, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    state = {
        client: "",
        shell: "",
        html: "",
        clickthrough: "",
        alt: "",
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
                        html: '<!-- Start Image -->\n\t<div style="width:100%;">\n\t\t<table bgcolor="#f7f7f7" align="center" cellpadding="0" cellspacing="0" style="border-collapse:collapse; font-size:0; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:700px">\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<td align="left" bgcolor="#f7f7f7" style="padding-top:0px;padding-bottom: 0px; padding-left: 0px; padding-right: 0px;">\n\t\t\t\t\t\t<a href="${clickthrough("C#1")}" target="_blank">\n\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\tsrc="images/d_.jpg"\n\t\t\t\t\t\t\t\talt="A#1"\n\t\t\t\t\t\t\t\twidth="700"\n\t\t\t\t\t\t\t\tclass="set_mobile_hero_100 hide_for_mobile_440"\n\t\t\t\t\t\t\t\tstyle="display: block; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-style: none; border-width: 0px;width: 100%; max-width: 700px;">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<!--[if !mso]><!-->\n\t\t\t\t\t\t<div class="show_for_mobile_440 set_mobile_hero_440" style="display: none; width: 0px; height: 0px; overflow: hidden; position: absolute; max-height: 0px; line-height: 0px; font-size: 0px; mso-hide:all;">\n\t\t\t\t\t\t\t<a href="${clickthrough("C#2")}" target="_blank">\n\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\tsrc="images/m_.jpg"\n\t\t\t\t\t\t\t\t\talt="A#2"\n\t\t\t\t\t\t\t\t\tborder="0"\n\t\t\t\t\t\t\t\t\tclass="show_for_mobile_440"\n\t\t\t\t\t\t\t\t\tstyle="display: none; width: 100%; height: 0px; overflow: hidden; position: absolute; max-height: 0px; line-height: 0px; font-size: 0px; mso-hide:all;">\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--<![endif]-->\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n<!--End Image-->'
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
                    mods: ["standard_hero", "image", "text"],
                    standard_hero: {
                        // eslint-disable-next-line
                        html: '<!--Image g_-->\n\t<table border="0" cellpadding="0" cellspacing="0" width="100%">\n\t\t<tr>\n\t\t\t<td align="center" valign="top" bgcolor="#ffffff" width="600" style="width: 600px;">\n\t\t\t\t<div>\n\t\t\t\t\t<!--margin-->\n\t\t\t\t\t<div style="height: 65px; line-height: 65px;">&nbsp;</div>\n\t\t\t\t\t<!--/margin-->\n\n\t\t\t\t\t<a href="${clickthrough("#","DynamicVariable.trackingEMAIL_HASH="+DynamicVariable.trackingEMAIL_HASH)}" target="_blank">\n\t\t\t\t\t\t<img src="images/img_1.png" width="w_#" height="h_#" style="color: #000000; font-size: 45px; font-weight: bold;" alt="" />\n\t\t\t\t\t</a>\n\n\t\t\t\t\t<!--margin-->\n\t\t\t\t\t<div style="height: 35px; line-height: 35px;">&nbsp;</div>\n\t\t\t\t\t<!--/margin-->\n\n\t\t\t\t\t<table border="0" cellpadding="0" cellspacing="0">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align="center" valign="top" width="600" style="width: 600px;">\n\t\t\t\t\t\t\t\t<div style="font-family: "Open Sans", Helvetica, Arial, sans-serif; color: #000000; font-size: 20px; line-height: 29px; font-weight: 400; text-align: center;">\n\t\t\t\t\t\t\t\t\t"t_#"\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<!--margin-->\n\t\t\t\t\t<div style="height: 35px; line-height: 35px;">&nbsp;</div>\n\t\t\t\t\t<!--/margin--><table border="0" cellpadding="0" cellspacing="0">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align="center">\n\t\t\t\t\t\t\t\t<!--CTA-->\n\t\t\t\t\t\t\t\t<table border="0" cellpadding="0" cellspacing="0">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td align="center" bgcolor="#ff6600" style="width: 200px; height: 50px;">\n\t\t\t\t\t\t\t\t\t\t\t<a href="${clickthrough("#","DynamicVariable.trackingEMAIL_HASH="+DynamicVariable.trackingEMAIL_HASH)}" target="_blank" style="width: 200px; display: inline-block; font-family: "Open Sans", Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px; line-height: 50px; font-weight: bold; text-decoration: none; text-transform: uppercase; text-align: center; white-space: nowrap;">\n\t\t\t\t\t\t\t\t\t\t\t\tEXPLORE NOW\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t<!--/CTA-->\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td style="width: 20px;">&nbsp;</td>\n\t\t\t\t\t\t\t<td align="center">\n\t\t\t\t\t\t\t\t<!--CTA-->\n\t\t\t\t\t\t\t\t<table border="0" cellpadding="0" cellspacing="0">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td align="center" bgcolor="#ff6600" style="width: 200px; height: 50px;">\n\t\t\t\t\t\t\t\t\t\t\t<a href="${clickthrough("#","DynamicVariable.trackingEMAIL_HASH="+DynamicVariable.trackingEMAIL_HASH)}" target="_blank" style="width: 200px; display: inline-block; font-family: "Open Sans", Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px; line-height: 50px; font-weight: bold; text-decoration: none; text-transform: uppercase; text-align: center; white-space: nowrap;">\n\t\t\t\t\t\t\t\t\t\t\t\tFIND A DEALER\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t<!--/CTA-->\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\n\t\t\t\t<!--margin-->\n\t\t\t\t<div style="height: 30px; line-height: 30px;">&nbsp;</div>\n\t\t\t\t<!--/margin-->\n\t\t\t</div>\n\n\t\t</td>\n\t</tr>\n</table>\n<!--/Image h_-->',
                    },
                    image: {
                        html: '',
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

    bindClickthrough = (event) => {
        this.setState(() => ({
            clickthrough: event.target.value
        }))
    }

    bindAlt = (event) => {
        this.setState(() => ({
            alt: event.target.value
        }))
    }

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
        let { client, shell, html, clickthrough, alt, img_count, data} = this.state;

        let string = data[client][shell][mod].html;

        // AT&T Logic
        if(client === "AT&T" && shell === "CrossSell_Template" && mod === "image") {

            // Update images
            string = string.replace("d_", "d_" + img_count.toString());
            string = string.replace("m_", "m_" + img_count.toString());

            img_count++;

            string = string.replace("C#1", clickthrough);
            string = string.replace("C#2", clickthrough);

            string = string.replace("A#1", alt);
            string = string.replace("A#2", alt);

        }

        this.setState(() => ({
            html: html + string + "\n\n",
            img_count
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

                            {this.state.shell !== "" && (
                                <FloatingLabel
                                    controlId="textareaClickthrough"
                                    label="Clickthrough"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        as="textarea"
                                        placeholder=""
                                        onChange={ this.bindClickthrough }
                                    />
                                </FloatingLabel>
                            )}

                            {this.state.shell !== "" && (
                                <FloatingLabel
                                    controlId="textareaAlt"
                                    label="Alt text"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        as="textarea"
                                        placeholder=""
                                        onChange={ this.bindAlt }
                                    />
                                </FloatingLabel>
                            )}
                        </Col>
                    </Row>
                    {this.state.client === "H-D" && this.state.shell === "eComm" (
                        <eComm></eComm>
                    )}
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
