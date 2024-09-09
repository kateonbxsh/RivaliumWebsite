import { useInTransition } from "@/contexts/TransitionContext";

type Props = {
    children?: React.ReactNode
  };
  
const TransitionContainer: React.FC<Props> = ({children}) => {

    const inTransition = useInTransition();
    
    return <div className={`transition-container ${inTransition ? "in-transition" : ""}`}>
            {children}
        </div>

}

export default TransitionContainer;