import React, { Component } from "react";
import { Row, Col, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

class eComm extends Component {
    state = {
        html: "",
        clickthrough: "",
        alt: "",
        text: "",
        img_count: 1,
        data: {
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
        }
    }

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

    bindText = (event) => {
        this.setState(() => ({
            text: event.target.value
        }))
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        eComm Shell
                    </Col>
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
                        <FloatingLabel
                            controlId="textareaAlt"
                            label="Alt"
                            className="mb-3"
                        >
                            <Form.Control
                                as="textarea"
                                placeholder=""
                                onChange={ this.bindAlt }
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
                                onChange={ this.bindText }
                            />
                        </FloatingLabel>
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
            </div>
            
        )
    }
}

export default eComm;