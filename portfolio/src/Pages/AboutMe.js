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
                            lorem impsum   
                        </p>
                    </div>
                   </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutMe;