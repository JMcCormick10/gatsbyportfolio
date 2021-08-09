import * as React from "react";
import './Logo.scss';
const Logo = (props) => (
    <div to="/" className="Logo" onClick={props.clicked}>
        <span className="j">J</span>
        <span className="m">M</span>
    </div>
)

export default Logo;