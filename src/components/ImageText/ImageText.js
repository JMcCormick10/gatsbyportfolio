import * as React from "react";
import './ImageText.scss';
import { Link } from 'gatsby';
import Button from "../Button/Button";
import Shape from "../Shape/Shape";
const ImageText = (props) => {
    return (
        <section className="ImageText">
            <div className="container">
                <Shape noanimation shape="rectangle"/>
                <h2 className="text-center reveal reveal-up">{props.fields.heading}</h2>
                <div className="row mt-5">
                    <div className="col-12 col-lg-5 offset-lg-1  image-col">
                        <div className="image-container reveal reveal-right">
                            <img className="main-image" src={`https:${props.fields.image.file.url}`} alt={props.fields.image.title}/>
                            <Shape shape="circle" noanimation/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-1 text-col reveal reveal-left mt-5 mt-lg-0">
                        <div>
                            <p className="mb-3 mb-lg-5">{props.fields.imagetextCopy.copy}</p>
                            <Link to={props.fields.buttonLink.page}>
                                <Button title={props.fields.buttonLink.text}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageText;