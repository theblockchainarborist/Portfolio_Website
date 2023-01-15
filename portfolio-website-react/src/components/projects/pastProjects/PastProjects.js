import React from 'react';
import './PastProjects.css'

const PastProjects = () => {

    const projectsPast = [
        {
            id: 1,
            name: 'connor-ray.com',
            description: 'A portfolio website!',
            img: '../connor-ray-com-thumbnail.png',
            link: ''
        },
        {
            id: 2,
            name: 'Coming Soon!',
            description: 'Image by Samuel Regan-Asante on unsplash.com',
            img: '../samuel-regan-asante-unsplash.jpg',
            link: ''
        }
    ]

    return (
        <div id="past-projects-grid-div">
            {projectsPast.map(project => (
                <div key={project.id} className="thumbnail">

                    <h2>{project.name}</h2>

                    <a href={project.link}>

                    <img src={project.img} alt={project.name} className="thumbnail-img" />

                    </a>

                    <p>{project.description}</p>

                </div>
            ))}
        </div>
    );

}

export default PastProjects;