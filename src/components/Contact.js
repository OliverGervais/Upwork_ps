import React from 'react'
import {useSpring, animated} from 'react-spring'

function Contact() {
    const props = useSpring({opacity: 1,marginTop: 0, from: {opacity: 0, marginTop: -600 } ,delay:0 ,config:{duration: 1000} })
    return (
        <>
        <animated.div style={props}>
        <div className=" bg-black rounded-lg xl:mx-56 mt-2 grid grid-flow-col grid-cols-1  gap-2 bg-opacity-90"> 
        <h1 className="text-white text-4xl">I took this page out of this version of the site to comply with Upwork T.O.S</h1>
                                        
                                </div>
                                </animated.div>
            
        </>
    )
}

export default Contact
