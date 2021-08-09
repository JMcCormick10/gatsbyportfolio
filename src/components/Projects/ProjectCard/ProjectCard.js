import * as React from "react";
import './ProjectCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons';
import Notification from "../../Notification/Notification";
import Button from "../../Button/Button";


const ProjectCard = (props) => {

    const imageContainerRef = React.useRef();

    const [notificationActive, setNotificationActive] = React.useState(false);
    const [notificationMessage, setNotificationMessage] = React.useState("");

    const onImageContainerClick = () => {
        navigator.clipboard.writeText(props.url)
        setNotificationMessage('Link copied');
        setNotificationActive(true);
        setTimeout(() => {
            setNotificationActive(false)
        }, 3000);
    }

    const onImageContainerInteract = (event) => {
        let parentOffset = imageContainerRef.current.getBoundingClientRect();
        const relX = event.pageX - parentOffset.left;
        const relY = event.pageY - (window.pageYOffset + parentOffset.top);
        const overlay = imageContainerRef.current.getElementsByClassName("preview-overlay");
        overlay[0].style.top = relY + "px";
        overlay[0].style.left = relX + "px";
    }

    return (

        <div className="ProjectCard my-3 my-lg-0">
            {
                notificationActive ? 

                    <Notification
                        message={notificationMessage}

                    /> : null
                
            }
            <div className="reveal reveal-top">
                <div 
                    onClick={() => onImageContainerClick()} 
                    className="image-container"
                    ref={imageContainerRef}
                    onMouseEnter={(event) => onImageContainerInteract(event)}
                    onMouseLeave={(event) => onImageContainerInteract(event)}
                    >
                    <img src={`https:${props.image.file.url}`} alt={props.image.title}/>
                    <div className="preview-overlay"></div>
                    <div className="preview-overlay-content">
                        <FontAwesomeIcon icon={faEye}/>
                        <p className="preview-overlay-text">Copy Link</p>
                    </div>
                </div>
                <h3>{props.title}</h3>
                <div className="project-categories">
                    {
                    props.categories.map(category => (
                        <span key={category.title} className="category-marker">{category.title}</span>
                    ))
                    
                    }
                </div>
                <p className="description">{props.description}</p>
                <div className="d-block d-lg-none text-center">
                    <Button className="small" clicked={() => onImageContainerClick()} title="Copy Link"/>
                </div>
            </div>
        </div>
    )
}    


export default ProjectCard;