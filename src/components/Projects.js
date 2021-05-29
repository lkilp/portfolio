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
            <a className='project blogr' target='_blank' rel='noreferrer' href='https://lkilp.github.io/blogr/'>
                <div className='background'></div>
                <div className='projectLink'>Blogr</div>
            </a>
            <a className='project leaf' target='_blank' rel='noreferrer' href='https://lkilp.github.io/leaf/'>
                <div className='background'></div>
                <div className='projectLink'>Leaf</div>
            </a>
            <a className='project huddle' target='_blank' rel='noreferrer' href='https://lkilp.github.io/huddle/'>
                <div className='background'></div>
                <div className='projectLink'>Huddle</div>
            </a>
            <a className='project memory' target='_blank' rel='noreferrer' href='https://lkilp.github.io/memory/'>
                <div className='background'></div>
                <div className='projectLink'>Memory</div>
            </a>
            <a className='project fylo' target='_blank' rel='noreferrer' href='https://lkilp.github.io/fylo/'>
                <div className='background'></div>
                <div className='projectLink'>Fylo</div>
            </a>
            <a className='project jammming' target='_blank' rel='noreferrer' href='https://lkilp.github.io/jammming/'>
                <div className='background'></div>
                <div className='projectLink'>Jammming</div>
            </a>
            <a className='project swimster' target='_blank' rel='noreferrer' href='https://lkilp.github.io/swimster/'>
                <div className='background'></div>
                <div className='projectLink'>Swimster</div>
            </a>
        </div>
    )
}

export default Projects;