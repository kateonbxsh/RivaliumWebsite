import Navbar from "./Navbar";
import '../../style/pages/main/main.scss';
import '../../style/components/buttons.scss'
import { Outlet, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { useSpring, easings } from "react-spring";
import AnimatedBackground from "../../components/background/AnimatedBackground";
import Logo from "./Logo";
import ParticlesBackground from "./ParticlesBackground";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomeLayout from "./HomeLayout";
import { FC, useMemo } from "react";
import { delay, motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0
    },
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
};

const pageTransition = {
    type: 'tween',
    ease: 'linear',
    duration: 1.2,
}; 

export default function Main() {

    const location = useLocation();

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

    const particles = useMemo(() => <ParticlesBackground/>, []);

    return (<>
        <Navbar/>
        <div className="body">
            <AnimatedBackground className='secondary-splash'/>
            <AnimatedBackground className='secondary-splash' namespace={["/rivals", "/gameplay", "/game"]}
            onOpen={[{
                transform: 'scale(3)'
            },{
                transform: 'scale(1)'
            }]}
            onOpenEasing={easings.easeInOutCirc}
            />
            <AnimatedBackground animation={backgroundAnim} className='main-splash' namespace={["/", "/home"]}
            onOpen={[{
                transform: 'scale(3)'
            },{
                transform: 'scale(1)'
            }]}
            onOpenEasing={easings.easeInOutCirc}
            />
            <AnimatedBackground animation={backgroundAnim2} className='battle-splash' namespace="/download"
            onOpen={[{
                transform: 'translateX(0%) scale(1)'
            },{
                transform: 'translateX(-20%) scale(1.4)'
            }]}
            onOpenEasing={easings.easeInOutCirc}
            />
            { particles }
            <div className="main-container">
                <motion.div
                    key={location.pathname}
                    initial="initial"
                    animate="in"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    <div className="transition-container">
                        <Outlet context={location}/>
                    </div>
                </motion.div>
            </div>
        </div>
    </>);

}