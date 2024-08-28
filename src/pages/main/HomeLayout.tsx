import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

export default function HomeLayout() {

    const navigate = useNavigate();
    
    return (<>
        <Logo/>
        <h3 className="logo-desc">
            The realm of rivals
        </h3>
        <button className="main-button logo-play-button" onClick={()=>navigate("/download")}>
            PLAY NOW
        </button>
    </>)

}