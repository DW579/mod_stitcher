import React, { Component } from "react";
import { Row, Col, FloatingLabel, Form, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

class eComm extends Component {
    state = {
        html: "",
        alt: "",
        text: "",
        img_count: 1,
        width: 10,
        height: 10,
        data: {
            mods: ["standard_hero", "image", "text"],
            standard_hero: {
                // eslint-disable-next-line
                html: '<!-- Standard Hero #num# -->\n\t<table border="0" cellpadding="0" cellspacing="0" width="100%">\n\t\t<tr>\n\t\t\t<td align="center" valign="top" bgcolor="#ffffff" width="600" style="width: 600px;">\n\t\t\t\t<div>\n\t\t\t\t\t<!--margin-->\n\t\t\t\t\t<div style="height: 65px; line-height: 65px;">&nbsp;</div>\n\t\t\t\t\t<!--/margin-->\n\n\t\t\t\t\t<a href="${clickthrough("#","DynamicVariable.trackingEMAIL_HASH="+DynamicVariable.trackingEMAIL_HASH)}" target="_blank">\n\t\t\t\t\t\t<img src="images/img_#num#.png" width="#width#" height="#height#" style="color: #000000; font-size: 45px; font-weight: bold;" alt="#alt#" />\n\t\t\t\t\t</a>\n\n\t\t\t\t\t<!--margin-->\n\t\t\t\t\t<div style="height: 35px; line-height: 35px;">&nbsp;</div>\n\t\t\t\t\t<!--/margin-->\n\n\t\t\t\t\t<table border="0" cellpadding="0" cellspacing="0">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align="center" valign="top" width="600" style="width: 600px;">\n\t\t\t\t\t\t\t\t<div style="font-family: "Open Sans", Helvetica, Arial, sans-serif; color: #000000; font-size: 20px; line-height: 29px; font-weight: 400; text-align: center;">\n\t\t\t\t\t\t\t\t\t#text#\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<!--margin-->\n\t\t\t\t\t<div style="height: 35px; line-height: 35px;">&nbsp;</div>\n\t\t\t\t\t<!--/margin--><table border="0" cellpadding="0" cellspacing="0">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td align="center">\n\t\t\t\t\t\t\t\t<!--CTA-->\n\t\t\t\t\t\t\t\t<table border="0" cellpadding="0" cellspacing="0">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td align="center" bgcolor="#ff6600" style="width: 200px; height: 50px;">\n\t\t\t\t\t\t\t\t\t\t\t<a href="${clickthrough("#","DynamicVariable.trackingEMAIL_HASH="+DynamicVariable.trackingEMAIL_HASH)}" target="_blank" style="width: 200px; display: inline-block; font-family: "Open Sans", Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px; line-height: 50px; font-weight: bold; text-decoration: none; text-transform: uppercase; text-align: center; white-space: nowrap;">\n\t\t\t\t\t\t\t\t\t\t\t\tEXPLORE NOW\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t<!--/CTA-->\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td style="width: 20px;">&nbsp;</td>\n\t\t\t\t\t\t\t<td align="center">\n\t\t\t\t\t\t\t\t<!--CTA-->\n\t\t\t\t\t\t\t\t<table border="0" cellpadding="0" cellspacing="0">\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td align="center" bgcolor="#ff6600" style="width: 200px; height: 50px;">\n\t\t\t\t\t\t\t\t\t\t\t<a href="${clickthrough("#","DynamicVariable.trackingEMAIL_HASH="+DynamicVariable.trackingEMAIL_HASH)}" target="_blank" style="width: 200px; display: inline-block; font-family: "Open Sans", Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px; line-height: 50px; font-weight: bold; text-decoration: none; text-transform: uppercase; text-align: center; white-space: nowrap;">\n\t\t\t\t\t\t\t\t\t\t\t\tFIND A DEALER\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t<!--/CTA-->\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\n\t\t\t\t<!--margin-->\n\t\t\t\t<div style="height: 30px; line-height: 30px;">&nbsp;</div>\n\t\t\t\t<!--/margin-->\n\t\t\t</div>\n\n\t\t</td>\n\t</tr>\n</table>\n<!-- /Standard Hero #num# -->',
            },
            image: {
                html: '',
            },
            text: {
                html: "<p></p>",
            },
        }
    }

    bindAlt = (event) => {
        this.setState(() => ({
            alt: event.target.value
        }))
    }

    bindText = (event) => {
        this.setState(() => ({
            text: event.target.value
        }))
    }

    bindWidth = (event) => {
        this.setState(() => ({
            width: event.target.value
        }))
    }

    bindHeight = (event) => {
        this.setState(() => ({
            height: event.target.value
        }))
    }

    handleMod = (mod) => {
        let { html, alt, text, img_count, width, height, data} = this.state;

        let string = data[mod].html;

        if(mod === "standard_hero") {

            // Update image
            string = string.replace(/#num#/g, img_count.toString());
            string = string.replace("#width#", (parseInt(width) / 2).toString());
            string = string.replace("#height#", (parseInt(height) / 2).toString());

            img_count++;

            string = string.replace("#alt#", alt);

            string = string.replace("#text#", text);

        }

        this.setState(() => ({
            html: html + string + "\n\n",
            img_count
        }))
        
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>eComm Shell</Col>
                    <Col>
                        <Link to="/">Reset</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Image count: {this.state.img_count}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FloatingLabel
                            controlId="textareaAlt"
                            label="Alt"
                            className="mb-3"
                        >
                            <Form.Control
                                as="textarea"
                                placeholder=""
                                onChange={this.bindAlt}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="textareaText"
                            label="Text"
                            className="mb-3"
                        >
                            <Form.Control
                                as="textarea"
                                placeholder=""
                                onChange={this.bindText}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="textareaWidth"
                            label="Width"
                            className="mb-3"
                        >
                            <Form.Control
                                as="textarea"
                                placeholder=""
                                onChange={this.bindWidth}
                            />
                        </FloatingLabel>  
                        <FloatingLabel
                            controlId="textareaHeight"
                            label="Height"
                            className="mb-3"
                        >
                            <Form.Control
                                as="textarea"
                                placeholder=""
                                onChange={this.bindHeight}
                            />
                        </FloatingLabel>                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title="Select Mod"
                        >
                            {this.state.data.mods.map((mod) => {
                                return (
                                    <Dropdown.Item
                                        onClick={() => this.handleMod(mod)}
                                        key={mod}
                                    >
                                        {mod}
                                    </Dropdown.Item>
                                );
                            })}
                        </DropdownButton>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FloatingLabel controlId="textareaForm" label="HTML">
                            <Form.Control
                                as="textarea"
                                placeholder=""
                                style={{ height: "700px" }}
                                defaultValue={this.state.html}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default eComm;