import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ParticlesContextType {
    particlesLoaded: boolean;
    setParticlesLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const ParticlesLoadedContext = createContext<ParticlesContextType | undefined>(undefined);

const ParticlesLoadedProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [particlesLoaded, setParticlesLoaded] = useState<boolean>(false);

    return (
        <ParticlesLoadedContext.Provider value={{ particlesLoaded, setParticlesLoaded }}>
            {children}
        </ParticlesLoadedContext.Provider>
    );
};

// Custom hook to use the context
const useParticlesLoaded = (): ParticlesContextType => {
    const context = useContext(ParticlesLoadedContext);
    if (context === undefined) {
        throw new Error('useParticlesLoaded must be used within a ParticlesLoadedProvider');
    }
    return context;
};

export { ParticlesLoadedProvider, useParticlesLoaded };
