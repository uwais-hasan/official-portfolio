import React, {Fragment} from 'react';
import './Profile.css'
import {InfoLg, Tools, Translate} from "react-bootstrap-icons";
import {lang, skills} from "../../Data/Data";
import {Container} from "react-bootstrap";
import AboutMe from "../../Components/AboutMe/AboutMe";
import {motion} from "framer-motion";
import useStyleMotion from "../../Components/Hooks/useStyleMotion";
import {useTranslation} from "react-i18next";

const Profile = () => {

     const style=useStyleMotion()
    const [t]=useTranslation()

    return (
        <motion.div
            variants={style.exitRouterProfile}
                    initial='hidden'
                    animate='visible'
                    exit='exit'

                    className='section-Profile '>
      <Container>
       <div className='intro'>
           <AboutMe/>
       </div>
          <p className=' size-text global-title style-title'>{t('career')}</p>
          <div className='information style-border-left'>
              <InfoLg/>
              <p className='global-para'>{t('more_about_me')}</p>
          </div>
          <div className='skills'>
              <p className='style-title global-title'>{t('skills')}</p>
             <div className='content-skills'>
                 {skills.map((skill,index)=>{
                     return(
                       <div key={index*122} className='style-border-left'>
                           <Tools/>
                           <p  key={index*12}>{skill}</p>

                       </div>
                     )
                 })}
             </div>
              <p className='style-title global-title'>{t('language')}</p>
              <div className='content-language'>
                  {lang.map((lang,index)=>{
                      return(
                          <div  key={index*1522} className='style-border-left'>
                             <Translate/>
                              <p  key={index*3}>{lang}</p>

                          </div>
                      )
                  })}
              </div>
          </div>
      </Container>
        </motion.div>
    );
};

export default Profile;