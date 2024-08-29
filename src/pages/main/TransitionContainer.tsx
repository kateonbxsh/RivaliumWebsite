import { Outlet } from "react-router-dom";
import { useInTransition } from "../../contexts/TransitionContext";

export default function TransitionContainer() {

    const inTransition = useInTransition();
    
    return <div className={`transition-container ${inTransition ? "in-transition" : ""}`}>
            <Outlet/>
        </div>

}