import {TransitionContextProvider} from "@/contexts/TransitionContext";
import {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";
import {useEffect, useMemo, useState} from "react";
import {easings, useSpring} from "react-spring";
import AnimatedBackground from "./background/AnimatedBackground";
import Navbar from "./navbar/Navbar";
import ParticlesBackground from "./ParticlesBackground";
import TransitionContainer from "./TransitionContainer";

export default function HomeLayout({ children }: {children: React.ReactNode}) {

    const [_, setParticlesLoaded] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesLoaded(true);
    });
  }, []);

    const backgroundAnim = useSpring({
        loop: true,
        to: [
        { transform: 'translateX(-1%) scale(1.1)' },
        { transform: 'translateX(1%) scale(1.1)' },
        ],
        from: { transform: 'translateX(1%) scale(1.1)' },
        config: { duration: 8000, easing: easings.easeInOutCubic},
    });

    const backgroundAnim2 = useSpring({
        loop: true,
        to: [
        { transform: 'translateX(-20px) scale(1.1)' },
        { transform: 'translateX(20px) scale(1.1)' },
        ],
        from: { transform: 'translateX(20px) scale(1.1)' },
        config: { duration: 8000, easing: easings.easeInOutCubic},
    });

    const particles = useMemo(() => <ParticlesBackground/>, []);

    return (<TransitionContextProvider>
        <Navbar/>
        <AnimatedBackground className='secondary-splash'/>
        <AnimatedBackground className='secondary-splash' namespace={["/rivals", "/gameplay", "/game"]}
        onOpen={[{
            transform: 'scale(3)'
        },{
            transform: 'scale(1)'
        }]}
        onOpenEasing={easings.easeInOutCirc}
        />
        <AnimatedBackground animation={backgroundAnim} className='main-splash' namespace={["/", "/home"]}
        onOpen={[{
            transform: 'scale(3)'
        },{
            transform: 'scale(1)'
        }]}
        onOpenEasing={easings.easeInOutCirc}
        />
        <AnimatedBackground animation={backgroundAnim2} className='battle-splash' namespace="/download"
        onOpen={[{
            transform: 'translateX(0%) scale(1)'
        },{
            transform: 'translateX(-2%) scale(1.1)'
        }]}
        onOpenEasing={easings.easeInOutCirc}
        />
        { particles }
            <div className="main-container">
                <TransitionContainer>
                    {children}
                </TransitionContainer>
            </div>
    </TransitionContextProvider>
  );

}