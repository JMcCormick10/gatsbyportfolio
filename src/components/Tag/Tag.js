import * as React from "react";
import './Tag.scss';

const Tag = (props) => (
    <span className="Tag">{props.text}</span>
)

export default Tag;