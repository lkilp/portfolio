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
            name: 'jammming',
            url: 'https://lkilp.github.io/jammming/',
            title: 'Jammming',
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
            </div>
        </div>
    )
}

export default Projects;