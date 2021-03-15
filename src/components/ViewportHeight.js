import React, {useEffect, useState} from 'react';

const ViewportHeight = () => {
    let viewportWidth = window.innerWidth;
    const [vh, setvh] = useState(window.innerHeight/100);
    const onResize = () => {
        if (viewportWidth === window.innerWidth) {
            return;
        }
        viewportWidth = window.innerWidth;
        setvh(window.innerHeight/100);
    }
    useEffect(() => {    
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }) 
    
    const style = {position: 'fixed', color: 'white', zIndex:10 };
    return (
            <style>
                :root {'{'}
                    --vh: {vh}px;
                {'}'}
            </style>  
    )
}

export default ViewportHeight;