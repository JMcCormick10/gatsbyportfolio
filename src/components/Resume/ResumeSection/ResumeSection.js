import * as React from "react";
import './ResumeSection.scss';
import ResumeItem from "../ResumeItem/ResumeItem";
import SimpleResumeItem from "../SimpleResumeItem/SimpleResumeItem";
const ResumeSection = (props) =>  {
    let delay = 2;
    return (
        <div className="ResumeSection">
            <h2 className="text-center mb-3 reveal reveal-up">{props.heading}</h2>
            <div className="row justify-content-center">
            {
    
                props.items.map((item, index) => {
                    let component;
                    console.log(delay);
                    
                    if(item.__typename === 'ContentfulResumeItem'){
                        component = <div key={item.contentful_id} className={`col-12 col-lg col-md-6 my-3 reveal reveal-right delay-${delay}`}>
                            <ResumeItem
                            title={item.title}
                            subTitle={item.subTitle}
                            date={item.date}
                            description={item.description}
                            />
                        </div>
                    }
                    else{
                        component = <div key={item.contentful_id} className={`col-12 col-lg col-md-6 my-3 reveal reveal-right delay-${delay}`}>
                            <SimpleResumeItem
                            title={item.title}
                            tags={item.tags}
                            />
                        </div>
                    }
                    delay += 2;
                    return component;
                }
                )
            }
            </div>
        </div>
    )
} 

export default ResumeSection;