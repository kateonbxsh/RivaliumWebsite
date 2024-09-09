import Logo from "../components/Logo";
import Button from "../components/Button";
import { useTransitionContext } from "../contexts/TransitionContext";

export default function HomeLayout() {

    const goTo = useTransitionContext().setInTransition;
    
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