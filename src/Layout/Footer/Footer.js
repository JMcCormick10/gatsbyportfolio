import * as React from "react";
import './Footer.scss';
import { navigate } from 'gatsby';
import MenuLink from "../MenuLink/MenuLink";
import ContactForm from "../../components/ContactForm/ContactForm";
import Shape from "../../components/Shape/Shape";

const Footer = (props) => {

    return (
        <div className="Footer">
            <div className="footer-top">
                <div className="container">
                    <hr/>
                    <div className="row mt-5 reveal reveal-up">
                        <div className="col-12 col-lg-7">
                            <h2 className="h1">Need a <span className="background-color">website?</span><br/>
                                send me a message
                            </h2>
                            <p className="footer-description">I'm always looking to build new things! Whatever your idea, no matter how big or small, I want to help!</p>
                        </div>
                        <div className="col-12 col-lg-5 Contact">
                            <ContactForm/>
                        </div>
                    </div>
                    <Shape shape="square" noanimation/>
                </div>
            </div>
            <div className="footer-bottom mt-4 mt-lg-0 reveal reveal-up">
                <div className="container">
                    <div className="row">
                        <div className="col-11 mx-auto">
                            <div className="row">
                                <div className="col-12 col-lg-3 text-center text-lg-left mt-4 mt-md-0">
                                    <p className="footer-bottom-text">Thanks for visiting!  🤖 </p>
                                </div>
                                <div className="col-12 col-lg-6 text-center mt-3 mt-lg-0">
                                <MenuLink clicked={() => props.menuItemClicked("/", "Projects")} title="work" sectionLink="Projects"/>
                                <MenuLink clicked={() => props.menuItemClicked("/resume", "")} title="resume" linkType="page" pageLink="resume"/>
                                <MenuLink clicked={() => props.menuItemClicked("current", "Contact")} title="contact" sectionLink="Contact"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;