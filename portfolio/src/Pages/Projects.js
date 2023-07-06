import React from 'react';
import {Link,useHistory} from 'react-router-dom'
import { Fragment } from 'react';

function Projects (props){
    
    const history = useHistory();
    return (
        <Fragment>
            <div>
                <div className="page-title">Lastest Work
                   <button className="back-btn" onClick={() => history.goBack()}>Back</button>
                </div>
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
                      <button className='github-btn'>
                        <Link to={{pathname:"https://github.com/ggrant-fs/Portfolio"}} target="_blank">Git Hub</Link>
                     </button>
                    </div>
                </div>            
                <div className="projects-banner"></div>
                <div className='sample-imgs'>
                    <div className='sample__project__img'>
                        <img className='project-img' src='https://i.imgur.com/2BGExcF.jpg'alt=''/>
                    </div>
                    <div className='sample__project__img'>
                        <img className='project-img' src='https://i.imgur.com/AiFVHuV.jpg'alt=''/>
                    </div>
                    <div className='sample__project__img'>
                        <img className='project-img' src='https://i.imgur.com/nthhDQA.jpg'alt=''/>
                    </div>
                </div>
                <div className='btn-wrapper'>
                    <div className='flex-item-wrapper'>
                      <button className='view-live'>View Live</button>
                      <button className='github-btn'>
                        <Link to={{pathname:"https://github.com/ggrant-fs/Tribecca-Arts"}} target="_blank">Git Hub</Link>
                     </button>
                    </div>
                </div>
              
            </div>
        </Fragment>
    )
}

export default Projects;