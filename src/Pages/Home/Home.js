
import './Home.css'
import {motion} from "framer-motion";
import ButtonLetStart from "../../Components/ButtonLetStart/ButtonLetStart";
import AboutMe from "../../Components/AboutMe/AboutMe";
import {Container} from "react-bootstrap";
import useStyleMotion from "../../Components/Hooks/useStyleMotion";
import {useTranslation} from "react-i18next";

const Home = () => {

    const style=useStyleMotion()


    return (
        <motion.div

            className='section-home' >


            <div style={{backgroundImage:'url(./Img/freelancer.jpg)'}} className='bg-image'></div>
            <div className='override'></div>

            <div className='section-info'>
                <Container>
                    <a href="cv.pdf " download="cv.pdf"  >adasdasdas</a>
                    <div className='content-info row justify-content-center align-items-center flex-wrap' >
                        <AboutMe/>
                        <ButtonLetStart/>
                    </div>
                </Container>
            </div>


        </motion.div>

    );
};

export default Home;