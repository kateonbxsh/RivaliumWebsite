import '../../style/pages/main/navbar.scss'
import NavbarButton from "../../components/navbar/NavbarButton";
import { useState } from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
const Icon = require("../../assets/images/logo/icon/icon.webp");

export default function Navbar() {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true);

    const handleLogoClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar-container">
            <div className={"navbar " + (isOpen ? "open" : "closed")}>
                <a href="#" onClick={handleLogoClick}>
                    <img className="navbar-logo" src={Icon} alt="Rivalium Icon"/>
                </a>
                {isOpen && (<>
                    <div className="navbar-button-list">
                        <NavbarButton text="Home" href="/"/>
                        <NavbarButton text="Play" href="/download"/>
                        <NavbarButton text="Rivals" href="/rivals"/>
                        <NavbarButton text="Gameplay" href="/gameplay"/>
                        <NavbarButton text="About"  href="/game"/>
                    </div>
                    <div className="navbar-portal">
                        <Button small type="main" content="LOGIN" onClick={()=>navigate("/portal")}/>
                        <Button small content="SIGNUP" onClick={()=>navigate("/portal")}/>
                    </div>
                </>
                )}
                
            </div>
        </div>
    );

}