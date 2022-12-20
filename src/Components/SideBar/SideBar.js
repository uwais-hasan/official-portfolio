
import {CardText, HouseFill, List, PersonFill, Wrench} from "react-bootstrap-icons";
import './SideBar.css'
import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import {motion} from "framer-motion";
import useResize from "../Hooks/UseResize";
import useStyleMotion from "../Hooks/useStyleMotion";
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';

const SideBar = ({showMenu,setShowMenu}) => {

const handleClick=()=>{
    setShowMenu(!showMenu)
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}



    const width = useResize()
    const style = useStyleMotion()
    const history = useNavigate()

    const handleNav=()=>{
    history('/')
    }
    return (
        <div  className={`sideBar ${width<=575?showMenu?'none':'mobile':'desktop'}`}>
           <div className='content'>

               <div className='img-cycle'>
                   <motion.img style={{cursor:'pointer'}} onClick={handleNav} src='../Img/owies.jpg' variants={style.rotateImg} animate='visible'/>
               </div>
               <div className='icons'>
                   <motion.span variants={style.hoverIcons} whileHover='hover'onClick={handleClick}>   <NavLink  to='/' >  <HouseFill/><span className='text-icon'>Home</span></NavLink></motion.span>
                   <motion.span variants={style.hoverIcons} whileHover='hover' onClick={handleClick}> <NavLink to='/Project' > <PersonFill/><span className='text-icon'>Projects</span></NavLink></motion.span>
                   <motion.span  variants={style.hoverIcons} whileHover='hover'onClick={handleClick}> <NavLink to='/Profile'> <Wrench/><span className='text-icon'>Profile</span></NavLink></motion.span>
                   <motion.span variants={style.hoverIcons} whileHover='hover'>  <a href="cv owies.pdf " download="cv.pdf"  > <CardText/><button className='text-icon'>Cv</button></a></motion.span>
                   <div>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default SideBar;

