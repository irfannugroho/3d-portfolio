import React from 'react'
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger); 

const ShowcaseSection = () => {
        const sectionRef = useRef(null);
        const project1Ref = useRef(null);
        const project2Ref = useRef(null);
        const project3Ref = useRef(null);

        useGSAP(() => {
            gsap.fromTo(
                sectionRef.current, 
                {opacity: 0},
                {opacity: 1, duration: 1.5}
            )
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card, 
                {
                    y:50, opacity:0
                },
                {
                    y:0,
                    opacity:1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                    }
                }
            )
        }) 

        }, [] );

    

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
        <div className='w-full'> 
            <div className='showcaselayout'>
                {/*L E F T S I D E*/}
                <div className='first-project-wrapper' ref={project1Ref} >
                    <div className='image-wrapper'>
                        <img src="/images/bangkit1.png" alt="DermAI" />
                    </div>
                    <div className='text-content'>
                        <h2>Revolutionize Your Skincare Routine with AI-Powered Guidance : Derm.AI</h2>
                        <p className='text-white-50 md:text-xl'>Derm.AI (Dermatologist AI) is a mobile app designed to help users conveniently manage their skin health. This app was developed as a product-based Capstone Project for Bangkit Academy 2024.</p>
                    </div>
                </div>

                {/*R I G H T S I D E*/}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#FFEFDB]'>
                            <img src="/images/katabuku.png" alt="KataBuku" />
                        </div>
                            <h2>KATABUKU : Online Books Review</h2>
                    </div>

                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#FFE7EB]'>
                            <img src="/images/api.png" alt="SubstrackerAPI" />
                        </div>
                            <h2>Subscription Tracker API</h2>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection