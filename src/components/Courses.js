import React from 'react';

import './Courses.scss';
import codecademy from '../assets/codecademy.svg';

class Box {
    constructor(name, x, y, scale = 1, type='course') {
        this.name = name;
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.type = type;
    }
}

const Courses = () => {

    const boxes = [
        new Box('Courses', 0, 2, 1, 'title'),
        new Box('Learn HTML', 10, 10,),
        new Box('Learn CSS', 30, 25),
        new Box('Front-End Engineer Career Path 350 hours', 50, 50, 1.5),
        new Box('Build a Website with HTML, CSS, and Github Pages Skill Path', 70, 110, 1.5),
        new Box('Learn JavaScript', 60, 15),
        new Box('Learn Git', 15, 170),
        new Box('Learn Vue.js', 40, 130),
        new Box('Learn React', 60, 80),
        new Box('Learn Redux', 30, 75),
        new Box('Learn the Command Line', 60, 160, 1.5),
        new Box('Learn the Basice of Regular Expressions', 80, 60, 1.5),
        new Box('Learn Color Design', 10, 90),
        new Box('Learn TypeScript', 10, 120),
        new Box('Learn Asynchronous JavaScript', 80, 30),
        new Box('Learn JavaScript Unit Testing', 15, 145, 1.5),
        new Box('How to Debug JavaScript Errors', 85, 140, 1.5),
        new Box('Technical Interview Practice with JavaScript', 80, 180),
        new Box('How to Deploy a Website', 15, 50, 1.5),
        new Box('Building Interactive JavaScript Websites', 35, 100, 1.5),
        new Box('Learn How To Code', 35, 180)
    ];


    return (
        <div className='Courses'>
            {
                boxes.map(box => {
                    const { x, y, scale } = box;
                    const style = {
                        transform: `translate(${x}vw,${y}vw) scale(${scale})`,
                    }
                    return <div className={box.type} 
                                style={style}>
                                { box.type === 'course' && <img src={codecademy} /> }
                                {box.name}
                            </div>
                })
            }
        </div>
    )
}

export default Courses;