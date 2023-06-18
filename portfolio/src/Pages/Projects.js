import React from 'react';
import { Fragment } from 'react';

function Projects (props){
    return (
        <Fragment>
            <div>
                <div className="page-title">Lastest Work</div>
                <div className="portfolio-imgs">
                    <div className="portfolio-imgs__1">
                        <img className='project-img'src='https://i.imgur.com/vDQBpeo.png' alt=''/>
                    </div>
                    <div className="portfolio-imgs__2">
                        <img className='project-img' src='https://i.imgur.com/dNouR6Y.png' atl=''/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Projects;