import {useEffect, useState} from "react";
import { Document, Page,pdfjs } from 'react-pdf';
import './Cv.css'
import Loading from "../../Components/Loading/Loading";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Cv = () => {
    const [state, setState] = useState(true)



  useEffect(()=>{
      pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
      setState(false)
  },[])



    return (
        <div className='CV.pdf'>
            {state ? <Loading/> :
             <div style={{display:'none'}}>
                 <Document
                     file="./Cv.pdf"

                 >

                 </Document>
             </div>

            }


        </div>
    );
};

export default Cv;