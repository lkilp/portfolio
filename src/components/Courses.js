import React from 'react';

import { useState, useEffect } from 'react'; 

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
const container = React.createRef();
const Courses = () => {
    
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    const [containerRect, setContainerRect] = useState(new DOMRect());

    useEffect(() => {
        const onScroll = (e) => {
           if(container.current) {
                setContainerRect(container.current.getBoundingClientRect())
            }
        }
        const onResize = () => {
            setViewportWidth(window.innerWidth);
        }
        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        }
    })

    
const boxes = [
    new Box('Learn HTML', 10, 20,),
    new Box('Learn CSS', 30, 35),
    new Box('Front-End Engineer Career Path 350 hours', 50, 50, 1.5),
    new Box('Build a Website with HTML, CSS, and Github Pages Skill Path', 80, 110, 1),
    new Box('Learn JavaScript', 60, 25),
    new Box('Learn Git', 15, 180),
    new Box('Learn Vue.js', 40, 140),
    new Box('Learn React', 60, 85, 1.5),
    new Box('Learn Redux', 30, 85),
    new Box('Learn the Command Line', 60, 170, 1.5),
    new Box('Learn the Basics of Regular Expressions', 80, 70, 1.5),
    new Box('Learn Color Design', 10, 100),
    new Box('Learn TypeScript', 10, 130),
    new Box('Learn Asynchronous JavaScript', 80, 40),
    new Box('Learn JavaScript Unit Testing', 15, 155, 1.5),
    new Box('How to Debug JavaScript Errors', 85, 150, 1.5),
    new Box('How to Deploy a Website', 15, 60, 1.5),
    new Box('Building Interactive JavaScript Websites', 50, 115, 1.5),
    new Box('Learn How To Code', 85, 190)
];

    const viewportCenter = - (containerRect.top - 0.5*window.innerHeight);

    const vwToPixels = (vw) => vw*(viewportWidth/100);

    return (
        <div ref={container} className='Courses'>
            <div className='title'>Courses</div>
            {
                boxes.map(box => {
                    const { x, y, scale } = box;

                    const boxCenter = vwToPixels(y);
                    const vh = window.innerHeight;
                    const offsetNormal = ((viewportCenter - boxCenter) / vh);
                    const finaly = boxCenter - offsetNormal * 300 * scale * scale
                    * scale;
                    
                    const style = {
                        transform: `translate(${x}vw,${finaly}px) scale(${scale})`,
                    }
                    if(scale > 1.4) {
                        style.zIndex = 10;
                    }
                    return <div className={box.type} 
                                style={style}>
                                { <img src={codecademy} alt='codecademy logo'/> }
                                { <a target='_blank' rel="noreferrer" href={`/certs/${box.name}.pdf`}>{box.name}</a> }
                            </div>
                })
            }
        </div>
    )
}

export default Courses;