import React from 'react';
import { Fragment } from 'react';

function Projects (props){
    return (
        <Fragment>
            <div>
                <div className="page-title">Lastest Work</div>
                <div className="projects-banner"></div>
                <div className='sample-imgs'>
                    <div className='sample-img__1'>
                        <img className='project-img' src='https://i.imgur.com/FE4VuJm.jpg'alt=''/>
                    </div>
                    <div className='sample-img__2'>
                        <img className='project-img' src='https://i.imgur.com/ZZfgm6O.jpg'alt=''/>
                    </div>
                    <div className='sample-img__3'>
                        <img className='project-img' src='https://i.imgur.com/Al9JO85.jpg'alt=''/>
                    </div>
                </div>
                
                <div className="sample-imgs-2">
                    
                </div>
              
            </div>
        </Fragment>
    )
}

export default Projects;