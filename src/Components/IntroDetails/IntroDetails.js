import React from 'react';
import './IntroDetails.css'
import {Github, Wifi} from "react-bootstrap-icons";
import {useTranslation} from "react-i18next";
const IntroDetails = ({name,des,link,img}) => {
    const [t,il18n]=useTranslation()
    return (
        <div className='section-intro'>
            <div className='bg-image' style={{backgroundImage:`url(${img})`}}> </div>


            <div className='container'>
               <div className='content'>
                   <h2 className='global-title'>{name}</h2>
                   <p className='global-para'>{des}</p>
                   <div className={`icons ${il18n.language==='ar'&&'ar'}` } >
                       <a href={`${link[0]}`}> <Github/> {t('github')}</a>
                       <a href={`${link[1]}`}> <Wifi/>  {t('live')}</a>
                   </div>
               </div>
            </div>

        </div>
    );
};

export default IntroDetails;