import React from 'react';

import './Story.scss';

const Story = () => {

    return (
        <div className='Story'>
            <div className='storyBlock'>
                <h3>Early years</h3>
                <div>I grew up in a household where web development and advertising were discussed daily. I learned early on to appreciate creativity, design and solutions that please the audience.</div>
                <div>Being present and part of film sets was my favorite, it enabled me to spend hours observing people and watch them solve creative puzzles.</div>
            </div>
            <div className='storyBlock'>
                <h3>Puzzles</h3>
                <div>Challenging myself and solving problems has become a theme since then. From excelling in Mathematics and sudoku competitions, obtaining a first class honours degree in Economics, managing successful teams in the restaurant industry in different corners of the World to completing a 200 kilometer solo hike in the Himalayas and other inspiring travel adventures. I continue to enrich myself in experiences that enhance me as a person and amplify my skillset.</div>
            </div>
            <div className='storyBlock'>
                <h3>Languages</h3>
                <div>I love learning and making things better. Whilst studying my fifth human language (Dutch) I got introduced to computer languages, a whole new World of challenges and opportunities!</div>
                <div>I have been studying front-end development with the help of Codecademy as well as being mentored and tutored by a 
                    <div className='link'><a target='_blank' href='https://www.linkedin.com/in/rinkevandenberg/'>full stack developer</a></div> 
                    who has over 12 years of experience in the industry.
                </div>
            </div>
        </div>
    )
}

export default Story;