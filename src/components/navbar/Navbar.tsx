import NavbarButton from "@/components/navbar/NavbarButton";
import {useState} from 'react';
import Button from '@/components/Button';
import Icon from "@/assets/images/logo/icon/icon.webp";
import Image from 'next/image';


export default function Navbar() {

    return (
        <nav className="p-1 w-full h-5 z-10 fixed">
            <div className="bg-backblue opacity-80 p-2 relative">
                <div className="w-full relative flex flex-row justify-center">
                    <Image className="navbar-logo h-full w-auto hidden md:block" src={Icon} alt="Rivalium Icon"/>
                    <div className="w-full md:w-2/3 flex flex-row justify-evenly text-sm md:text-2xl my-2 flex-wrap">
                        <NavbarButton text="Home" href="/"/>
                        <NavbarButton text="Play" href="/download"/>
                        <NavbarButton text="Gameplay" href="/gameplay" disabled/>
                        <NavbarButton text="Rivals" href="/rivals" disabled/>
                        <NavbarButton text="Patch Notes" href="/patch-notes/"/>
                        <NavbarButton text="Discover" href="/discover" disabled/>
                        <NavbarButton text="Support" href="/support" />
                        <NavbarButton text="Discord" href="https://discord.rivalium.online" blank/>
                    </div>
                </div>
            </div>
        </nav>
    );

}