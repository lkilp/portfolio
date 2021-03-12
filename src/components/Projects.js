import React from 'react';

import './Projects.scss';

const Projects = () => {

    return (
        <div className='Projects'>
            <h3>Projects</h3>
            <a className='project quiz' target='_blank' rel='noreferrer' href='https://lkilp.github.io/quiz/'>
                <div className='background'></div>
                <div className='projectLink'>Dutch quiz</div>
            </a>
        </div>
    )
}

export default Projects;