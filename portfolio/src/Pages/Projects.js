import React from 'react';
import { Fragment } from 'react';

function Projects (props){
    return (
        <Fragment>
            <div>
                <div className="page-title">Lastest Work</div>
                <div className="projects-banner"></div>
                <div className='sample-imgs'>
                    <div className='sample__project__img'>
                        <img className='project-img' src='https://i.imgur.com/FE4VuJm.jpg'alt=''/>
                    </div>
                    <div className='sample__project__img'>
                        <img className='project-img' src='https://i.imgur.com/ZZfgm6O.jpg'alt=''/>
                    </div>
                    <div className='sample__project__img'>
                        <img className='project-img' src='https://i.imgur.com/Al9JO85.jpg'alt=''/>
                    </div>
                </div>
                <div className='btn-wrapper'>
                    <div className='flex-item-wrapper'>
                      <button className='view-live'>View Live</button>
                      <button className='github-btn'>Git Hub</button>
                    </div>
                </div>            
                <div className="projects-banner"></div>
                <div className='sample-imgs'>
                    <div className='sample__project__img'>
                        <img className='project-img' src='https://i.imgur.com/fP50KYd.jpg'alt=''/>
                    </div>
                    <div className='sample__project__img'>
                        <img className='project-img' src='https://i.imgur.com/KrXljXV.jpg'alt=''/>
                    </div>
                    <div className='sample__project__img'>
                        <img className='project-img' src='https://i.imgur.com/Uzwb4Mo.png?1'alt=''/>
                    </div>
                </div>
                <div className='btn-wrapper'>
                    <div className='flex-item-wrapper'>
                      <button className='view-live'>View Live</button>
                      <button className='github-btn'>Git Hub</button>
                    </div>
                </div>
              
            </div>
        </Fragment>
    )
}

export default Projects;