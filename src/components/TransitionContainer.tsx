import {FC, ReactNode} from 'react';
import {useTransitionContext} from "@/contexts/TransitionContext";

type Props = {
    children?: ReactNode;
};

const TransitionContainer: FC<Props> = ({ children }) => {
    const { inTransition } = useTransitionContext();
    return (
        <div className={`transition-container ${inTransition ? 'in-transition' : ''}`}>
            {children}
        </div>
    );
};

export default TransitionContainer;
