import * as React from "react";
import { useRef } from "react";
import './Button.scss';
const Button = (props) => {

    const buttonRef = useRef();
    const onButtonInteract =  (event) => {
        let parentOffset = buttonRef.current.getBoundingClientRect();
        const relX = event.pageX - parentOffset.left;
        const relY = event.pageY - (window.pageYOffset + parentOffset.top);
        const span = buttonRef.current.getElementsByClassName("button-aware");
        span[0].style.top = relY + "px";
        span[0].style.left = relX + "px";
        
    }

    return (
        <button 
            ref={buttonRef}
            onMouseEnter={(event) => onButtonInteract(event)}
            onMouseLeave={(event) => onButtonInteract(event)}
            onClick={props.clicked}
            className={`Button ${props.className}`}
            >
            <span className="button-title">{props.title}</span>
            <span className="button-aware"></span>
        </button>
    )
}

export default Button;