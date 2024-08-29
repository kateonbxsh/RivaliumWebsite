import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Button from "../../components/Button";

export default function HomeLayout() {

    const navigate = useNavigate();
    
    return (<>
        <Logo/>
        <div>
            <Button 
                type="main"
                content="PLAY NOW"
                onClick={() => navigate("/download")}
            />
            <Button 
                type="secondary"
                content="ABOUT THE GAME"
                onClick={() => navigate("/game")}
            />
        </div>
    </>)

}