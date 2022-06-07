import {useEffect, useState} from "react";


const useResize = () => {

    const[width,setWidth]=useState(window.innerWidth);

    const updateWidth=()=>{
        setWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize',updateWidth)

        return ()=>{
            window.removeEventListener('resize',updateWidth)
        }
    },[width])

    return width
};

export default useResize;