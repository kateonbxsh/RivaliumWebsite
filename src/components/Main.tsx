import Navbar from "./navbar/Navbar";
import './main.scss';
import './buttons/buttons.scss'
import {useEffect, useState} from "react";
import {MainPage} from "./EMainPage";
import Container from "./container/Container";

export default function Main() {

    document.title = "Rivalium";

    let [state, setState] = useState<MainPage>(MainPage.MAIN);

    useEffect(()=>{

        const logo = document.getElementsByClassName("logo").item(0);
        const mainCont = document.getElementsByClassName("main-container").item(0);
        const mainButton = document.getElementsByClassName("main-button logo-play-button").item(0);

        const downloadCont = document.getElementById("download-info");

        logo.className = "logo logo-minimized";
        mainCont.className = "main-container main-container-secondary";
        mainButton.className = "main-button logo-play-button removed-button";
        downloadCont.classList.remove("visible");

        switch(state) {

            case MainPage.MAIN:
                logo.className = "logo";
                mainCont.className = "main-container main-container-primary";
                mainButton.className = "main-button logo-play-button";
                break;

            case MainPage.DOWNLOAD:
                mainCont.className = "main-container main-container-download"
                downloadCont.classList.add("visible");
                break;

        }

    })

    return (<>
        <Navbar setPageState={setState}/>
        <div className="body">
            <div className="main-container">
                <img src="/img/logo.png" alt="logo" className="logo" />
                <h3 className="logo-desc">
                    The realm of rivals
                </h3>
                <a href="#" className="main-button logo-play-button" onClick={()=>setState(MainPage.DOWNLOAD)}>
                    GET RIVALIUM
                </a>
            </div>
            <Container id="download-info">
                <h1>
                DOWNLOAD RIVALIUM
                </h1>
                <hr/>
                <p>Windows: </p>
            </Container>
        </div>
    </>);

}