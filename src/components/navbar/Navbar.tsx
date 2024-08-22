import './navbar.scss'
import NavbarButton from "./NavbarButton";
import {MainPage} from "../EMainPage";
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const slideDown = useSpring({
        width: isOpen ? '800px' : '50px',
        maxHeight: '50px',
        overflow: 'hidden',
        config: { tension: 210, friction: 30 },
    });

    const handleLogoClick = () => {
        setIsOpen(!isOpen);
    };


    return (<animated.div className="navbar" style={slideDown}>
        <a href="#" onClick={handleLogoClick}>
            <img className="navbar-logo" src="/img/icon-inverted.png" alt="Rivalium Icon"/>
        </a>
        {isOpen && (
        <div className="navbar-button-list">
            <NavbarButton text="Home" href="/"/>
            <NavbarButton text="Play" href="/download"/>
            <NavbarButton text="Rivals" href="/rivals"/>
            <NavbarButton text="Gameplay" href="/gameplay"/>
            <NavbarButton text="About"  href="/game"/>
        </div>
      )}
    </animated.div>);

}