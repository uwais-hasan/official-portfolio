
import {Route, Routes, useLocation, } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Project from "./Pages/Project/Project";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./Components/SideBar/SideBar";
import MoreInformation from "./Pages/MoreInformation/MoreInformation";
import {Fragment, useState} from "react";
import ControlNavMobile from "./Components/ControlNavMobile/ControlNavMobile";
import './App.css';
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {updateTypeLang} from "./Redux/Actions";
import Cv from "./Pages/Cv/Cv";

function App() {
    const param=useLocation()
    const location=useLocation()

const[showMenu,setShowMenu]=useState(true)
    const {typeLang}=useSelector(state=>state)
    const dispatch=useDispatch()
    const {i18n}=useTranslation()
    const update=(lang)=>{
         i18n.changeLanguage(lang)
        i18n.dir(lang)
       dispatch(updateTypeLang(!typeLang))
    }
    console.log(location.pathname==='/Cv')
  return (
    <div className="App">

        {param.pathname !== '/Cv' &&
        <div className='btn-convert-lang'>

            { typeLang ? <button onClick={() => update('en')}>en</button> :
            <button onClick={() => update('ar')}>ar</button>}

        </div>
        }
        {param.pathname==='/'?''
            :<Fragment>
                <SideBar  showMenu={showMenu} setShowMenu={setShowMenu}/>
                <ControlNavMobile showMenu={showMenu} setShowMenu={setShowMenu}/>
        </Fragment>}



       <Routes location={location} key={location.key} >

           <Route path='/' element={<Home />}/>

           <Route path='/Profile' element={<Profile />}/>
           <Route path='/Project' element={<Project />}/>
           <Route path='/Cv' element={<Cv />}/>
           <Route path='/Project/:nameProject' element={<MoreInformation />}/>


       </Routes>

    </div>
  );
}

export default App;
