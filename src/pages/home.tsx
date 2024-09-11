import Logo from "../components/Logo";
import Button from "../components/Button";
import {useTransitionContext} from "../contexts/TransitionContext";

export default function HomeLayout() {

    const { navigate } = useTransitionContext();
    
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