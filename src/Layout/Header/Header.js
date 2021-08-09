import * as React from "react";
import './Header.scss';
import { navigate } from 'gatsby';
import Logo from "../../components/Logo/Logo";
import MenuLink from "../MenuLink/MenuLink";
import BoxLink from "../BoxLink/BoxLink";
const Header = (props) => {

    const onClickMobileMenuToggle = () => {
        props.mobileMenuToggleClick();
    }

    

    return (
        <header className="Header reveal reveal-down">
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col-2">
                        <Logo clicked={() => props.menuItemClicked("/", "")}/>
                    </div>
                    <div className="col-8 d-none d-lg-block">
                        <MenuLink clicked={() => props.menuItemClicked("/", "Projects")} title="work" sectionLink="Projects"/>
                        <MenuLink clicked={() => props.menuItemClicked("/resume", "")} title="resume" linkType="page" pageLink="resume"/>
                        <MenuLink clicked={() => props.menuItemClicked("current", "Contact")} title="contact" sectionLink="Contact"/>
                    </div>
                    <div className="col-2 d-none d-lg-block">
                        <BoxLink link="https://www.linkedin.com/in/josh-mccormick-bb2561b5/?originalSubdomain=ca" icon="faLinkedinIn"/>
                        <BoxLink link="https://github.com/JMcCormick10" icon="faGithub"/>
                    </div>
                    <div className="col-10 text-right d-block d-lg-none">
                        <button className={`mobile-menu-toggle text-right ${props.menuOpen ? 'menu-active' : ''}`} onClick={() => onClickMobileMenuToggle()}>
                            <span className="line line-1"></span>
                            <span className="line line-2"></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;