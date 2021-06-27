import React from 'react';

import './Projects.scss';

const Projects = () => {
    const projects = [
        {
            name: 'crowdfund',
            url: 'https://lkilp.github.io/crowdfund/',
            title: 'Crowdfund',
        },
        {
            name: 'quiz',
            url: 'https://lkilp.github.io/quiz/',
            title: 'Dutch quiz',
        },
        {
            name: 'leaf',
            url: 'https://lkilp.github.io/leaf/',
            title: 'Leaf',
        },
        {
            name: 'blogr',
            url: 'https://lkilp.github.io/blogr/',
            title: 'Blogr',
        },
        {
            name: 'huddle',
            url: 'https://lkilp.github.io/huddle/',
            title: 'Huddle',
        },
        {
            name: 'memory',
            url: 'https://lkilp.github.io/memory/',
            title: 'Memory',
        },
        {
            name: 'jamming',
            url: 'https://lkilp.github.io/jammming/',
            title: 'Jamming',
        },
        {
            name: 'fylo',
            url: 'https://lkilp.github.io/fylo/',
            title: 'Fylo',
        },
        {
            name: 'pricing-component',
            url: 'https://lkilp.github.io/pricing-component/',
            title: 'Pricing component',
        },
        {
            name: 'swimster',
            url: 'https://lkilp.github.io/swimster/',
            title: 'Swimster',
        },

    ]
    return (
        <div className='Projects'>
            <h3>Projects</h3>
            <div className="project-examples">
                { projects.map(project => {
                    const { name, url, title } = project;
                    return ( <a className={'project ' + name} target='_blank' rel='noreferrer' href={url}>
                        <div className='background'></div>
                        <div className='projectLink'>{title}</div>
                    </a> )
                })}
                {/* <a className='project crowdfund' target='_blank' rel='noreferrer' href='https://lkilp.github.io/crowdfund/'>
                    <div className='background'></div>
                    <div className='projectLink'>Crowdfund</div>
                </a>
                <a className='project quiz' target='_blank' rel='noreferrer' href='https://lkilp.github.io/quiz/'>
                    <div className='background'></div>
                    <div className='projectLink'>Dutch quiz</div>
                </a>
                <a className='project leaf' target='_blank' rel='noreferrer' href='https://lkilp.github.io/leaf/'>
                    <div className='background'></div>
                    <div className='projectLink'>Leaf</div>
                </a>
                <a className='project blogr' target='_blank' rel='noreferrer' href='https://lkilp.github.io/blogr/'>
                    <div className='background'></div>
                    <div className='projectLink'>Blogr</div>
                </a>
                <a className='project huddle' target='_blank' rel='noreferrer' href='https://lkilp.github.io/huddle/'>
                    <div className='background'></div>
                    <div className='projectLink'>Huddle</div>
                </a>
                <a className='project memory' target='_blank' rel='noreferrer' href='https://lkilp.github.io/memory/'>
                    <div className='background'></div>
                    <div className='projectLink'>Memory</div>
                </a>
                <a className='project jammming' target='_blank' rel='noreferrer' href='https://lkilp.github.io/jammming/'>
                    <div className='background'></div>
                    <div className='projectLink'>Jammming</div>
                </a>
                <a className='project fylo' target='_blank' rel='noreferrer' href='https://lkilp.github.io/fylo/'>
                    <div className='background'></div>
                    <div className='projectLink'>Fylo</div>
                </a>
                <a className='project pricing-component' target='_blank' rel='noreferrer' href='https://lkilp.github.io/pricing-component/'>
                    <div className='background'></div>
                    <div className='projectLink'>Pricing component</div>
                </a>
                <a className='project swimster' target='_blank' rel='noreferrer' href='https://lkilp.github.io/swimster/'>
                    <div className='background'></div>
                    <div className='projectLink'>Swimster</div>
                </a> */}
            </div>
            
        </div>
    )
}

export default Projects;