
import {CardText, HouseFill, List, PersonFill, Wrench} from "react-bootstrap-icons";
import './SideBar.css'
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import useResize from "../Hooks/UseResize";
import useStyleMotion from "../Hooks/useStyleMotion";
const SideBar = ({showMenu,setShowMenu}) => {



   const width=useResize()
   const style=useStyleMotion()

    return (
        <div  className={`sideBar ${width<=575?showMenu?'none':'mobile':'desktop'}`}>
            <div className='img-cycle'>
               <NavLink to='/' > <motion.img src='../Img/owies.jpg' variants={style.rotateImg} animate='visible'/></NavLink>
            </div>
            <div className='icons'>
               <motion.span variants={style.hoverIcons} whileHover='hover'onClick={()=>setShowMenu(!showMenu)}>   <NavLink  to='/' > <HouseFill/></NavLink></motion.span>
                <motion.span variants={style.hoverIcons} whileHover='hover' onClick={()=>setShowMenu(!showMenu)}> <NavLink to='/Project' > <PersonFill/></NavLink></motion.span>
                <motion.span  variants={style.hoverIcons} whileHover='hover'onClick={()=>setShowMenu(!showMenu)}> <NavLink to='/Profile'> <Wrench/></NavLink></motion.span>
                <motion.span variants={style.hoverIcons} whileHover='hover'onClick={()=>setShowMenu(!showMenu)}>  <a href='https://onedrive.live.com/view.aspx?resid=D0DC86218667DF26!222&ithint=file%2cdocx&authkey=!AGdEBE78g4PqSes' > <CardText/></a></motion.span>
            </div>
        </div>
    );
};

export default SideBar;