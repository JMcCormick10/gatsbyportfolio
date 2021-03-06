import * as React from "react";
import './AlternateBanner.scss';
import Shape from "../Shape/Shape";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
const AlternateBanner = (props) => {
    return (
        <section className="AlternateBanner">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 col-lg-8 mx-auto">
                        <h1 className="reveal reveal-up"><span className="background-color">{props.fields.heading}</span></h1>
                        <p className="copy reveal reveal-up">{props.fields.copy} </p>
                        <div className="reveal reveal-up">
                            <a target="_blank" href={`https://${props.fields.downloadableFile.file.url}`}className="file-download">
                                {props.fields.downloadableFileText}
                                <FontAwesomeIcon icon={faFileDownload}/>    
                            </a>
                        </div>
                    </div>
                </div>
                <Shape shape="cylinder" noanimation/>
                <Shape shape="pyramid" noanimation/>
            </div>
            <Shape shape="donut" noanimation/>
        </section>

    )
}

export default AlternateBanner;