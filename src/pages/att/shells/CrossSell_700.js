import React, { Component } from "react";
import { Row, Col, FloatingLabel, Form, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

class CrossSell700 extends Component {
    state = {
        html: "",
        clickthrough: "",
        alt: "",
        text: "",
        img_count: 1,
        width: 0,
        height: 0,
        data: {
            mods: ["image", "image_3", "text"],
            image: {
                // eslint-disable-next-line
                html: '<!-- Start Image #num# --><div style="width:100%;"><table bgcolor="#f7f7f7" align="center" cellpadding="0" cellspacing="0" style="border-collapse:collapse; font-size:0; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:700px"><tbody><tr><td align="left" bgcolor="#f7f7f7" style="padding-top:0px;padding-bottom: 0px; padding-left: 0px; padding-right: 0px;"><a href="${clickthrough("#click#")}" target="_blank"><imgsrc="images/d_#num#.jpg"alt="#alt#"width="700"class="set_mobile_hero_100 hide_for_mobile_440"style="display: block; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-style: none; border-width: 0px;width: 100%; max-width: 700px;"></a><!--[if !mso]><!--><div class="show_for_mobile_440 set_mobile_hero_440" style="display: none; width: 0px; height: 0px; overflow: hidden; position: absolute; max-height: 0px; line-height: 0px; font-size: 0px; mso-hide:all;"><a href="${clickthrough("#click#")}" target="_blank"><imgsrc="images/m_#num#.jpg"alt="#alt#"border="0"class="show_for_mobile_440"style="display: none; width: 100%; height: 0px; overflow: hidden; position: absolute; max-height: 0px; line-height: 0px; font-size: 0px; mso-hide:all;"></a></div><!--<![endif]--></td></tr></tbody></table></div><!-- End Image #num# -->',
            },
            image_3: {
                html: '',
            },
            text: {
                html: "<p></p>",
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
        let { html, clickthrough, alt, text, img_count, width, height, data} = this.state;

        let string = data[mod].html;

        if(mod === "image") {

            // Update image
            string = string.replace(/#num#/g, img_count.toString());

            img_count++;

            string = string.replace(/#click#/g, clickthrough);

            string = string.replace(/#alt#/g, alt);

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
                    <Col>AT&T - CrossSell 700 Shell</Col>
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
                                onChange={this.bindClickthrough}
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

export default CrossSell700;