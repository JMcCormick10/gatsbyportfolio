import * as React from "react";
import './LoadScreen.scss';

const LoadScreen = (props) => {

    let hide = (props.show ? 'show' : 'hide');

    return (
        <div className={`LoadScreen ${hide}` }>
            <div className="left">
                <span className="j">J</span>
            </div>
            <div className="right">
                <span className="m">M</span>
            </div>
        </div>
    )
}

export default LoadScreen;