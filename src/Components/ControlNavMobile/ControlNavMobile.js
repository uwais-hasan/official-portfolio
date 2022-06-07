import React, {Fragment} from 'react';
import {List, XLg} from "react-bootstrap-icons";
import useResize from "../Hooks/UseResize";
import './ControlNavMobile.css'
const ControlNavMobile = ({showMenu,setShowMenu}) => {
    const width=useResize()
    return (
        <Fragment>
            {width <= 575 && <div className='nav-mobile'>
                {showMenu? <List className='menu' onClick={() => setShowMenu(!showMenu)}/>
                    :<XLg className='menu' onClick={() => setShowMenu(!showMenu)}/>}
                <img src='../Img/owies.jpg'/>
            </div>
            }
        </Fragment>
    );
};

export default ControlNavMobile;