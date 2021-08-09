import * as React from "react";
import './SimpleResumeItem.scss';
import Tag from "../../Tag/Tag";

const SimpleResumeItem = (props) => (
    <div className="SimpleResumeItem">
        <h3 className="mb-0">{props.title}</h3>
        <div className="row tag-row">
            {
                props.tags.map(tag =>(
                    <div key={tag.id} className="col-auto tag-col my-2">
                        <Tag text={tag.title}/>
                    </div>    

                ))
            }
        </div>
    </div>
)

export default SimpleResumeItem;