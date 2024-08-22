import Navbar from "./navbar/Navbar";
import './main.scss';
import './buttons/buttons.scss'
import {useEffect, useState} from "react";
import {MainPage} from "./EMainPage";
import Container from "./container/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { animated, useSpring, easings } from "react-spring";
import AnimatedBackground from "./background/AnimatedBackground";

export default function Main() {

    const location = useLocation();
    const navigate = useNavigate();

    document.title = "Rivalium";

    const backgroundAnim = useSpring({
        loop: true,
        to: [
        { transform: 'translateX(-1%) scale(1.1)' },
        { transform: 'translateX(1%) scale(1.1)' },
        ],
        from: { transform: 'translateX(1%) scale(1.1)' },
        config: { duration: 8000, easing: easings.easeInOutCubic},
    });

    const backgroundAnim2 = useSpring({
        loop: true,
        to: [
        { transform: 'translateX(-20px) scale(1.1)' },
        { transform: 'translateX(20px) scale(1.1)' },
        ],
        from: { transform: 'translateX(20px) scale(1.1)' },
        config: { duration: 8000, easing: easings.easeInOutCubic},
    });
    

    return (<>
        <Navbar/>
        <div className="body">
            <AnimatedBackground background='url("./img/secondary-splash.png")'/>
            <AnimatedBackground background='url("./img/secondary-splash.png")' namespace={["/rivals", "/gameplay", "/game"]}
            onOpen={[{
                transform: 'scale(3)'
            },{
                transform: 'scale(1)'
            }]}
            onOpenEasing={easings.easeInOutCirc}
            />
            <AnimatedBackground animation={backgroundAnim} background='url("./img/main-splash.png")' namespace={["/", "/home"]}
            onOpen={[{
                transform: 'scale(3)'
            },{
                transform: 'scale(1)'
            }]}
            onOpenEasing={easings.easeInOutCirc}
            />
            <AnimatedBackground animation={backgroundAnim2} background='url("./img/battle-splash.png")' namespace="/download"
            onOpen={[{
                transform: 'translateX(0%) scale(1)'
            },{
                transform: 'translateX(-20%) scale(1.4)'
            }]}
            onOpenEasing={easings.easeInOutCirc}
            /> 
            <div className="main-container">
                <img src="/img/logo.png" alt="logo" className="logo" />
                <h3 className="logo-desc">
                    The realm of rivals
                </h3>
                <button className="main-button logo-play-button" onClick={()=>navigate("/download")}>
                    PLAY NOW
                </button>
            </div>
        </div>
    </>);

}