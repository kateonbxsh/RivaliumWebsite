import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';

interface TransitionContextType {
    inTransition: boolean;
    transitioningTo: string;
    setInTransition: React.Dispatch<React.SetStateAction<boolean>>;
    setTransitioningTo: React.Dispatch<React.SetStateAction<string>>;
    location: string;
    navigate: (url: string) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

const TransitionContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const router = useRouter();
    const [inTransition, setInTransition] = useState<boolean>(false);
    const [transitioningTo, setTransitioningTo] = useState<string>("");
    const location = router.asPath;

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            if (inTransition) {
                return;
            }
            setInTransition(true);
            setTransitioningTo(url);
            setTimeout(() => {
                setInTransition(false);
            }, 300); // Match this with your CSS transition duration
        };

        router.events.on('routeChangeStart', handleRouteChange);
        router.events.on('routeChangeComplete', () => setInTransition(false));
        router.events.on('routeChangeError', () => setInTransition(false));

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
            router.events.off('routeChangeComplete', () => setInTransition(false));
            router.events.off('routeChangeError', () => setInTransition(false));
        };
    }, [router, inTransition]);

    const navigate = (url: string) => {
        if (inTransition) return;
        if (url == location) return;
        router.push(url);
    }

    return (
        <TransitionContext.Provider value={{ inTransition, setInTransition, transitioningTo, setTransitioningTo, location, navigate }}>
            {children}
        </TransitionContext.Provider>
    );
};

const useTransitionContext = () => {
    const context = useContext(TransitionContext);
    if (context === undefined) {
        throw new Error('useTransitionContext must be used within a TransitionContextProvider');
    }
    return context;
};

export { TransitionContextProvider, useTransitionContext };
