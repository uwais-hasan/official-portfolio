import {useEffect, useState} from "react";

import './Cv.css'
import Loading from "../../Components/Loading/Loading";
const Cv = () => {
    const [state, setState] = useState(true)
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        const timer=setTimeout(()=>{
            if (counter<10){
                setCounter(prevState => prevState+1)
            }else {
                setState(false)
            }
        },500)

        return ()=>{
            clearTimeout(timer)
        }
    },[counter])


    return (
        <div className='cv'>
            {state && <Loading/>}


                 <iframe

                     src="https://onedrive.live.com/embed?resid=3A4227ACE46EBE75%21321&amp;authkey=!AM5eIJCRA7iHfl8&amp;em=2"
                     style={{width: "100%", height: "100vh", zIndex: 10,}} frameBorder="0">This is an embedded <a
                     target="_blank" href="https://office.com">Microsoft
                     Office</a> document, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.
                 </iframe>





        </div>
    );
};

export default Cv;