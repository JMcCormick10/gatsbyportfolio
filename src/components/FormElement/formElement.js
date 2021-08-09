import * as React from "react";
import './FormElement.scss';

const FormElement = (props) => {

    const [focus, setFocus] = React.useState('');
    
    const onElementFocus = () => {
        setFocus('focused');
    }
    const onElementBlur = () => {
        if(props.value === ""){
            setFocus('');
        }
        else{
            setFocus('focused');
        }
    }

    let element;
    switch(props.type){
        case 'input':
            element = <input
            onFocus={() => onElementFocus()}
            onBlur={() => onElementBlur()}
            onChange={props.changed}
            value={props.value}
                />
        break;

        case 'textarea': 
            element = <textarea 
                rows={props.rows}
                onChange={props.changed}
                onFocus={() => onElementFocus()}
                onBlur={() => onElementBlur()}
                value={props.value}

                >
                    
                </textarea>
        break;

        default:
            break;
    }
    return (
        <div className={`FormElement ${focus}`}>
            <label>{props.label}</label>
            {element}
            <span className={`errorMessage ${!props.valid && props.touched ? 'show': ''}`}>{props.validationMessage}</span>
        </div>
    )
    
}

export default FormElement;