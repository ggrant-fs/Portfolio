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
                <div className='aboutMe-img-wrapper'>

                </div>
                <div className='aboutMe-content'>

                </div>
            </div>
        </Fragment>
    )
}

export default AboutMe;