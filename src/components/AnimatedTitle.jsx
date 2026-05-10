import React from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import clsx from 'clsx';
import{useRef , useEffect} from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);





const AnimatedTitle = ({title , containerClass}) => {


    const containerRef = useRef(null);
    

    useGSAP(()=>{

        const context = gsap.context(()=>{

                const timelineAnimation = gsap.timeline({

                        scrollTrigger:{
                                trigger: containerRef.current,
                                start:'100 bottom',
                                end:'center bottom',
                                toggleActions:'play none none reverse',
                        }
                })

                timelineAnimation.to('.animated-word',{
                        opacity:1,
                        transform:'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
                        stagger:'power2.inOut',
                        stagger:"0.02",
                },
                0
            )

        }, containerRef)


        return()=> context.revert();

    },[])


  return (
    <div ref={containerRef} className={clsx("animated-title" , containerClass)}>
        {
            title.split("<br />") .map((line , index)=>(

                    <div key={index} 
                    className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">

                        {line.split(" ").map((word , idx)=>(

                            <span
                            key={idx}
                            className="animated-word"
                            dangerouslySetInnerHTML={{__html :word}} />
                        ))}

                    </div>

            ))
        }
    </div>
  )
}

export default AnimatedTitle