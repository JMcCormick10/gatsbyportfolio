import * as React from "react";
import './Banner.scss';
import Button from "../Button/Button";
import Shape from '../Shape/Shape';
const Banner = (props) => {
    let headingText = props.fields.heading.split(" ");
    let newHeadingText = '';
    headingText.map((text, index)=> {
        if(index === 2){
            newHeadingText +='<span class="background-color">'+text + '</span> ';
        }
        else{
            newHeadingText += text + ' ';
        }
        return(null);
    })
    const onClickButton = () => {
    }
    return(
        <section className="Banner">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 col-lg-8 mx-auto">
                        <h2 className="reveal reveal-up">{props.fields.subHeading}</h2>
                        <h1 className="reveal reveal-up" dangerouslySetInnerHTML={{__html: newHeadingText}} />
                        <p className="copy reveal reveal-up">I am comfortable using a variety of different web technologies, from front end languages like Javascript, to back end languages like PHP. </p>
                        <div className="reveal reveal-up">
                            <Button clicked={() => onClickButton()} title="Connect With Me"/>
                        </div>
                    </div>
                </div>
            </div>
            <Shape shape="circle"/>
            <Shape shape="square"/>
            <Shape shape="rectangle"/>

        </section>
    )
}

export default Banner;