import '../../style/pages/main/navbar.scss'
import NavbarButton from "../../components/navbar/NavbarButton";
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
const Icon = require("../../assets/images/logo/icon/icon.webp");

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const handleLogoClick = () => {
        setIsOpen(!isOpen);
    };

    return (<animated.div className={"navbar " + (isOpen ? "open" : "")}>
        <a href="#" onClick={handleLogoClick}>
            <img className="navbar-logo" src={Icon} alt="Rivalium Icon"/>
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