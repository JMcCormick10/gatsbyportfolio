import * as React from "react";
import './MobileMenu.scss';
import { navigate } from 'gatsby';
import MenuLink from "../MenuLink/MenuLink";

const MobileMenu = (props) => {

    return(
        <div className={`MobileMenu ${props.show ? 'show' : ''}`}>
            <div className="menu">
                <MenuLink clicked={() => props.menuItemClicked("/", "Projects")} title="work" sectionLink="Projects"/>
                <MenuLink clicked={() => props.menuItemClicked("/resume", "")} title="resume" linkType="page" pageLink="resume"/>
                <MenuLink clicked={() => props.menuItemClicked("current", "Contact")} title="contact" sectionLink="Contact"/>
            </div>
            <div className="left">
                <span className="j">J</span>
            </div>
            <div className="right">
                <span className="m">M</span>
            </div>
        </div>
    )
}
export default MobileMenu;