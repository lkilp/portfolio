import React from 'react';


import './App.scss';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Story from './components/Story';
import ViewportHeight from './components/ViewportHeight';


const App = () => {


    return (
        <div className='App'>
            <ViewportHeight />
            <Intro />
            <Story />
            <Courses />
            <Projects />
            <Contact />
        </div>
    );
}


export default App;
