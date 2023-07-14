import React from 'react';
import {useHistory} from 'react-router-dom';
import { Fragment } from 'react';

function AboutMe(props){
    const history = useHistory();
    return(
        <Fragment>
            <div>
                <header className="aboutMe-header">
                  <button className='aboutMe__back__btn' onClick={()=> history.goBack()}>Back</button>
                </header>
                <div className="aboutMe-container">
                   <div className='aboutMe__img'></div>
                   <div className='space-between'></div>
                   <div className='aboutMe__content'>
                   <div className='space-between'></div>
                    <h1 className='aboutMe__title'>Gary Grant</h1>
                    <h2 className='aboutMe__subtitle'>Software Engineer</h2>
                    <div className='aboutMe__details'>
                        <p>
                         Welcome to my portfolio, I'm Gary Grant. I'm a developer
                         that loves taking ideas and concepts and bringing them to 
                         life.I began my career in finance helping individuals with
                         their financial needs but my passion has lead me to assist 
                         others with their engineering goals. Feel free to check out 
                         my latest projects and reach out to me via Linkedin.
                        </p>
                    </div>
                   </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutMe;