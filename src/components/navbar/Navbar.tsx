import './navbar.scss'
import NavbarButton from "./NavbarButton";
import {MainPage} from "../EMainPage";

export default function Navbar({ setPageState }) {

    return (<div className="navbar">
        <a href="#" onClick={()=>setPageState(MainPage.MAIN)}>
            <img className="navbar-logo" src="/img/icon-inverted.png" alt="Rivalium Icon"/>
        </a>
        <div className="navbar-button-list">
            <NavbarButton text="Download" onClick={()=>setPageState(MainPage.DOWNLOAD)} side="right"/>
            <NavbarButton text="Rivals" onClick={()=>setPageState(MainPage.RIVALS)} side="right" />
            <NavbarButton text="Gameplay" onClick={()=>setPageState(MainPage.GAMEPLAY)} side="right" />
            <NavbarButton text="About" onClick={()=>setPageState(MainPage.ABOUT)} side="left" />
            <NavbarButton text="Home" onClick={()=>setPageState(MainPage.MAIN)} side="left" />
        </div>

    </div>);

}