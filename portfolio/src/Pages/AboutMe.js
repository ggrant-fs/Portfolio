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
                <div className='aboutMe-title'><h1>Gary Grant</h1></div>
                <div className="button-container">
                    <button></button>
                    <button></button>
                </div>
                <div className='aboutMe-banner'> 
                   <img src='https://i.imgur.com/s2Iq5gM.jpg' alt=''/>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutMe;