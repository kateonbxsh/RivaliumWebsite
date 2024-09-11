import NavbarButton from "@/components/navbar/NavbarButton";
import {useState} from 'react';
import Button from '@/components/Button';
import Icon from "@/assets/images/logo/icon/icon.webp";
import Image from 'next/image';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(true);

    const handleLogoClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar-container">
            <div className={"navbar " + (isOpen ? "open" : "closed")}>
                <a href="#" onClick={handleLogoClick}>
                    <Image className="navbar-logo" src={Icon} alt="Rivalium Icon"/>
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
                        <Button small type="main" content="LOGIN" />
                        <Button small content="SIGNUP"/>
                    </div>
                </>
                )}
                
            </div>
        </div>
    );

}