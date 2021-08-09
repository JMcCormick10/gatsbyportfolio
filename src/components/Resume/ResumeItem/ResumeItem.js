import * as React from "react";
import './ResumeItem.scss';
import Tag from '../../Tag/Tag';

const ResumeItem = (props) => (
    <div className="ResumeItem">
        <h3 className="mb-0">{props.title}</h3>
        <p className="subitlte mb-0">{props.subTitle}</p>
        <Tag text={props.date}/>
        <p className="description mt-3">{props.description}</p>
    </div>
)

export default ResumeItem;