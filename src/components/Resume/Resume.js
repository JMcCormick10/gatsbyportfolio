import * as React from "react";
import './Resume.scss';
import ResumeSection from "./ResumeSection/ResumeSection";
import Shape from "../Shape/Shape";
const Resume = (props) => {
    return (
        <section className="Resume">
            <div className="container">
                <div className="resume-inner">
                    {
                        props.fields.resumeSections.map(section => (
                            <ResumeSection
                                key={section.contentful_id}
                                heading={section.heading}
                                items={section.resumeItems}
                            />
                        ))
                    }
                </div>
                <Shape shape="cylinder" noanimation/>
            </div>
        </section>
    )
}
export default Resume;