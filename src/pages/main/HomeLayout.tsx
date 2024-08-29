import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Button from "../../components/Button";
import { useRouteTransition } from "../../contexts/TransitionContext";

export default function HomeLayout() {

    const goTo = useRouteTransition();
    
    return (<>
        <Logo/>
        <div>
            <Button 
                type="main"
                content="PLAY NOW"
                onClick={() => goTo("/download", 200)}
            />
            <Button 
                type="secondary"
                content="ABOUT THE GAME"
                onClick={() => goTo("/game", 200)}
            />
        </div>
    </>)

}