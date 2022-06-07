import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import ar from '../../Local/ar.json'
import en from '../../Local/en.json'


import './MoreInformation.css'
import IntroDetails from "../../Components/IntroDetails/IntroDetails";
import DescriptionProject from "../../Components/DescriptionProject/DescriptionProject";
import SwiperDetails from "../../Components/SwiperDetails/SwiperDetails";
import {JournalCode, StarFill, Wrench} from "react-bootstrap-icons";
import {useTranslation} from "react-i18next";
const MoreInformation = () => {

    const [toggleApiLang,setToggleApiLang]=useState(en)
    const {nameProject}=useParams()
    const {t,i18n}=useTranslation()


    useEffect(()=>{
if (i18n.language==='en'){
    setToggleApiLang(en)
}else {
    setToggleApiLang(ar)
}
    },[i18n.language])

    return (
        <div className='content-moreInformation'>
            <IntroDetails
                // name={t(`${nameProject}.name`)}
                name={toggleApiLang.data[nameProject].name}
                des={toggleApiLang.data[nameProject].des}
                link={toggleApiLang.data[nameProject].link}
                img={toggleApiLang.data[nameProject].img[0]}
            />

        <SwiperDetails img={toggleApiLang.data[nameProject].img} />

         <div className='main-description container'>
             <div className='feature'>
                 <h1 className='global-para'>feature</h1>
                 {toggleApiLang.data[nameProject].future.map((item,index)=>{
                     return(
                         <DescriptionProject key={index*2} des={t(item)} nameIcon={<StarFill/>}  />
                     )
                 })}

             </div>
             <div className='tec'>
                 <h1 className='global-para'>technologies</h1>
                 {toggleApiLang.data[nameProject].tec.map((item,index)=>{
                     return(
                         <DescriptionProject key={index*3} des={item} nameIcon={<JournalCode/>}  />
                     )
                 })}
             </div>

             <div className='howUse'>
                 <h1 className='global-para'>how to use</h1>
                 {toggleApiLang.data[nameProject].howUse.map((item,index)=>{
                     return(
                         <DescriptionProject key={index*22} des={item} nameIcon={<Wrench/>}  />
                     )
                 })}
             </div>



         </div>
        </div>
    );
};

export default MoreInformation;