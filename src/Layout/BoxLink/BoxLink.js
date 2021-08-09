import * as React from "react";
import './BoxLink.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const BoxLink = (props) => {
    let icon;
    switch(props.icon){
        case 'faLinkedinIn':
            icon = <FontAwesomeIcon icon={faLinkedinIn} /> 
        break;
        case 'faGithub':
            icon = <FontAwesomeIcon icon={faGithub} /> 
        break;

        default: 
        break;
    }

    return(
        <a target="_blank" className="BoxLink" href={props.link}>
            {
                icon
            }
        </a>
    )
}

export default BoxLink;