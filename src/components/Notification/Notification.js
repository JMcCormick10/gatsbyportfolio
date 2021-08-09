import * as React from "react";
import './Notification.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons';

const Notification = (props) => {
    return (
        <div className={`Notification ${props.show}`}>
            <div className="row">
                <div className="col-6 offset-lg-3 text-left text-lg-center">
                    <p>{props.message}</p>
                </div>
                <div className="col-6 col-lg-3 text-right">
                    <FontAwesomeIcon icon={faCheckCircle}/>
                </div>
            </div>
        </div>
    )
}

export default Notification;