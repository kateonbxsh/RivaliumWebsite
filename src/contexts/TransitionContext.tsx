import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Location, NavigateFunction, useLocation, useNavigate } from 'react-router-dom';

interface TransitionContextType {
    inTransition: boolean;
    transitioningTo: string;
    setInTransition: React.Dispatch<React.SetStateAction<boolean>>;
    setTransitioningTo: React.Dispatch<React.SetStateAction<string>>;
    location: Location;
    navigate: NavigateFunction;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

const TransitionContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [inTransition, setInTransition] = useState<boolean>(false);
    const [transitioningTo, setTransitioningTo] = useState<string>("");
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <TransitionContext.Provider value={{ inTransition, setInTransition, transitioningTo, setTransitioningTo, location, navigate}}>
            {children}
        </TransitionContext.Provider>
    );
};

const useRouteTransition = () => {
    const context = useContext(TransitionContext);
    if (context === undefined) {
        throw new Error();
    }
    return (target: string, delay: number) => {
        if (context.inTransition) return;
        
        if (context.location.pathname == target) return;
        context.setInTransition(true);
        context.setTransitioningTo(target);
        setTimeout(() => {
            context.setInTransition(false);
            context.navigate(target);
        }, delay);
    };
};

const useInTransition = () => {
    const context = useContext(TransitionContext);
    if (context === undefined) {
        throw new Error();
    }
    return context.inTransition;
}

export { TransitionContextProvider, useRouteTransition, useInTransition };
