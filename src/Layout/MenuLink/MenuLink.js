import * as React from "react";
import './MenuLink.scss';
const MenuLink = (props) => {
    return (
        <span onClick={props.clicked} className="MenuLink">{props.title}</span>
    )
}       

export default MenuLink;