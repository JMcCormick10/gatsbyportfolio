import * as React from "react";
import './Shape.scss';
import squareImage from '../../images/square.png';
import circleImage from '../../images/circle.svg';
import rectangleImage from '../../images/rectangle.png';
import pyramidImage from '../../images/pyramid.png';
import cylinderImage from '../../images/cylinder.png';
import donutImage from '../../images/donut.png';
const Shape = (props) => {
    let shape;
    let alt;
    switch(props.shape){
        case 'circle':
            shape = circleImage;
            alt = 'circle';
            break;
        case 'square':
            shape = squareImage;
            alt = 'square'
            break;
        case 'rectangle':
            shape =  rectangleImage;
            alt = 'rectangle';
            break;
        case 'pyramid':
            shape = pyramidImage;
            alt = 'pyramid';
            break;
        case 'cylinder':
            shape = cylinderImage;
            alt = 'cylinder'
            break;
        case 'donut':
            shape =  donutImage;
            alt = 'donut';
            break;
        default: 
            break;
    }

    return (
        <>
            <img className={`shape shape-${alt} ${props.noanimation ? 'no-animation': ''}`}  src={shape} alt={alt}/>
        </>
    )
    
}

export default Shape;