import * as React from "react";
import './Projects.scss';
import Button from '../Button/Button';
import ProjectCard from './ProjectCard/ProjectCard';
import { assignRevealClasses } from "../../shared/utility";
const Projects = (props) => {
    const [allButtonActive, setAllButtonActive] = React.useState(false);
    const [projects, setProjects] = React.useState(props.fields.projects);
    const [selectedCategory, setSelectedCategory] = React.useState("");
    const categories = [];
    props.fields.projects.map(project => {
         return project.categories.map( category => {
            return categories.push(category.title)
        })
    })
    const uniqueCategories = Array.from(new Set(categories));

    const onClickCategory = (key) => {
        let newProjects = [];
        if(key === 'all'){
            newProjects = props.fields.projects;
            setAllButtonActive(false);
            setSelectedCategory("");

        }
        else{
            setAllButtonActive(true);
            props.fields.projects.map(project => {
                project.categories.map(category => {
                    if(category.title == key){
                        newProjects.push(project);
                        setSelectedCategory(category.title);
                    }
                })
            });
        }
        setProjects(newProjects);
        setTimeout(() => {
            assignRevealClasses();
        }, 100)
    }

    return (
        <section className="Projects">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8 mx-auto text-center">
                        <h2 className="reveal reveal-up">{props.fields.heading}</h2>
                        <p className="reveal reveal-up">{props.fields.copy}</p>
                    </div>
                </div>
                <div className="categories reveal">
                    {
                        allButtonActive ?  (
                            <Button
                            clicked={() => onClickCategory('all')}
                            key="all"
                            className="btn-transparent btn-small"
                            title="All"
                            />
                        ) : null
                    }
                    {
                    uniqueCategories.map(category => (
                        <Button 
                            clicked={() => onClickCategory(category)}
                            key={category}
                            className={`btn-transparent btn-small ${selectedCategory === category ? 'selected' : ''}`}
                            title={category}
                        />
                    ))
                    }
                </div>
                <div className="row list-projects justify-content-center">
                    {
                        projects.map(project => 
                            <div key={project.contentful_id} className="col-12 col-sm-10 col-md-6 col-lg-4 my-3">
                                <ProjectCard 
                                    title={project.title}
                                    image={project.mainImage}
                                    categories={project.categories}
                                    description={project.description}
                                    url={project.url}
                                    />
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects;