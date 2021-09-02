import React, { Component } from "react";
import { Route } from "react-router-dom";
// eslint-disable-next-line 
import { Container, Row, Col, Dropdown, DropdownButton, FloatingLabel, Form } from "react-bootstrap";
import Clients from "./pages/Clients";

import ATT from "./pages/att/AT&T";
import CrossSell700 from "./pages/att/shells/CrossSell_700";

import HD from "./pages/hd/H-D";
import Ecomm from "./pages/hd/shells/Ecomm";

import Kraft from "./pages/kraft/Kraft";
import Template2021 from "./pages/kraft/shells/Template_2021";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <Route
                                exact
                                path="/"
                                render={() => <Clients></Clients>}
                            ></Route>
                            <Route
                                path="/at&t"
                                render={() => <ATT></ATT>}
                            ></Route>
                            <Route
                                path="/cross-sell-700"
                                render={() => <CrossSell700></CrossSell700>}
                            ></Route>
                            <Route
                                path="/h-d"
                                render={() => <HD></HD>}
                            ></Route>
                            <Route
                                path="/eComm"
                                render={() => <Ecomm></Ecomm>}
                            ></Route>
                            <Route
                                path="/kraft"
                                render={() => <Kraft></Kraft>}
                            ></Route>
                            <Route
                                path="/template_2021"
                                render={() => <Template2021></Template2021>}
                            ></Route>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;

// class App extends Component {
//     state = {
//         client: "",
//         shell: "",
//         html: "",
//         clickthrough: "",
//         alt: "",
//         img_count: 1,
//         disableClient: false,
//         disableShell: true,
//         disableMod: true,
//         data: {
//             "AT&T": {
//                 name: "AT&T",
//                 shells: ["CLM", "CrossSell_Template", "DirectTVStream"],
//                 CLM: {
//                     mods: ["image", "text"],
//                     image: {
//                         html: "<img />",
//                     },
//                     text: {
//                         html: "<p></p>",
//                     },
//                 },
//                 CrossSell_Template: {
//                     mods: ["image", "text"],
//                     image: {
//                         // eslint-disable-next-line
//                         html: '<!-- Start Image --><div style="width:100%;"><table bgcolor="#f7f7f7" align="center" cellpadding="0" cellspacing="0" style="border-collapse:collapse; font-size:0; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:700px"><tbody><tr><td align="left" bgcolor="#f7f7f7" style="padding-top:0px;padding-bottom: 0px; padding-left: 0px; padding-right: 0px;"><a href="${clickthrough("C#1")}" target="_blank"><imgsrc="images/d_.jpg"alt="A#1"width="700"class="set_mobile_hero_100 hide_for_mobile_440"style="display: block; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-style: none; border-width: 0px;width: 100%; max-width: 700px;"></a><!--[if !mso]><!--><div class="show_for_mobile_440 set_mobile_hero_440" style="display: none; width: 0px; height: 0px; overflow: hidden; position: absolute; max-height: 0px; line-height: 0px; font-size: 0px; mso-hide:all;"><a href="${clickthrough("C#2")}" target="_blank"><imgsrc="images/m_.jpg"alt="A#2"border="0"class="show_for_mobile_440"style="display: none; width: 100%; height: 0px; overflow: hidden; position: absolute; max-height: 0px; line-height: 0px; font-size: 0px; mso-hide:all;"></a></div><!--<![endif]--></td></tr></tbody></table></div><!--End Image-->'
//                     },
//                     text: {
//                         html: "<p></p>",
//                     },
//                 },
//                 DirectTVStream: {
//                     mods: ["image", "text"],
//                     image: {
//                         html: "<img />",
//                     },
//                     text: {
//                         html: "<p></p>",
//                     },
//                 },
//             },
//             "H-D": {
//                 name: "Harley Davidson",
//                 shells: ["eComm", "Insurance", "Museum_Rublings", "New_Brand", "Visa", "PanAm", ],
//                 eComm: {
//                     mods: ["standard_hero", "image", "text"],
//                     standard_hero: {
//                         // eslint-disable-next-line
//                         html: '<!--Image g_--><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td align="center" valign="top" bgcolor="#ffffff" width="600" style="width: 600px;"><div><!--margin--><div style="height: 65px; line-height: 65px;">&nbsp;</div><!--/margin--><a href="${clickthrough("#","DynamicVariable.trackingEMAIL_HASH="+DynamicVariable.trackingEMAIL_HASH)}" target="_blank"><img src="images/img_1.png" width="w_#" height="h_#" style="color: #000000; font-size: 45px; font-weight: bold;" alt="" /></a><!--margin--><div style="height: 35px; line-height: 35px;">&nbsp;</div><!--/margin--><table border="0" cellpadding="0" cellspacing="0"><tr><td align="center" valign="top" width="600" style="width: 600px;"><div style="font-family: "Open Sans", Helvetica, Arial, sans-serif; color: #000000; font-size: 20px; line-height: 29px; font-weight: 400; text-align: center;">"t_#"</div></td></tr></table><!--margin--><div style="height: 35px; line-height: 35px;">&nbsp;</div><!--/margin--><table border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><!--CTA--><table border="0" cellpadding="0" cellspacing="0"><tr><td align="center" bgcolor="#ff6600" style="width: 200px; height: 50px;"><a href="${clickthrough("#","DynamicVariable.trackingEMAIL_HASH="+DynamicVariable.trackingEMAIL_HASH)}" target="_blank" style="width: 200px; display: inline-block; font-family: "Open Sans", Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px; line-height: 50px; font-weight: bold; text-decoration: none; text-transform: uppercase; text-align: center; white-space: nowrap;">EXPLORE NOW</a></td></tr></table><!--/CTA--></td><td style="width: 20px;">&nbsp;</td><td align="center"><!--CTA--><table border="0" cellpadding="0" cellspacing="0"><tr><td align="center" bgcolor="#ff6600" style="width: 200px; height: 50px;"><a href="${clickthrough("#","DynamicVariable.trackingEMAIL_HASH="+DynamicVariable.trackingEMAIL_HASH)}" target="_blank" style="width: 200px; display: inline-block; font-family: "Open Sans", Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px; line-height: 50px; font-weight: bold; text-decoration: none; text-transform: uppercase; text-align: center; white-space: nowrap;">FIND A DEALER</a></td></tr></table><!--/CTA--></td></tr></table><!--margin--><div style="height: 30px; line-height: 30px;">&nbsp;</div><!--/margin--></div></td></tr></table><!--/Image h_-->',
//                     },
//                     image: {
//                         html: '',
//                     },
//                     text: {
//                         html: "<p></p>",
//                     },
//                 },
//                 Insurance: {
//                     mods: ["image", "text"],
//                     image: {
//                         html: "<img />",
//                     },
//                     text: {
//                         html: "<p></p>",
//                     },
//                 },
//                 Museum_Rublings: {
//                     mods: ["image", "text"],
//                     image: {
//                         html: "<img />",
//                     },
//                     text: {
//                         html: "<p></p>",
//                     },
//                 },
//                 New_Brand: {
//                     mods: ["image", "text"],
//                     image: {
//                         html: "<img />",
//                     },
//                     text: {
//                         html: "<p></p>",
//                     },
//                 },
//                 Visa: {
//                     mods: ["image", "text"],
//                     image: {
//                         html: "<img />",
//                     },
//                     text: {
//                         html: "<p></p>",
//                     },
//                 },
//                 PanAm: {
//                     mods: ["image", "text"],
//                     image: {
//                         html: "<img />",
//                     },
//                     text: {
//                         html: "<p></p>",
//                     },
//                 },
//             },
//         },
//     };

//     // Metacharacter - : new line, : tab




