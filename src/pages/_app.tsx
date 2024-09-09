import { AppProps } from 'next/app';
import { useEffect, useMemo, useState } from 'react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { TransitionContextProvider } from '../contexts/TransitionContext';
import '@/style/font.scss';
import '@/style/global.scss';
import '@/style/pages/main/navbar.scss'
import '@/style/pages/main/main.scss'
import '@/style/components/buttons.scss'
import { useRouter } from 'next/router';
import { easings, useSpring } from 'react-spring';
import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/navbar/Navbar';
import AnimatedBackground from '@/components/background/AnimatedBackground';
import TransitionContainer from "@/components/TransitionContainer";

function MyApp({ Component, pageProps }: AppProps) {

  const [particlesLoaded, setParticlesLoaded] = useState(false);
    const router = useRouter();

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
            transform: 'translateX(-20%) scale(1.4)'
        }]}
        onOpenEasing={easings.easeInOutCirc}
        />
        { particles }
            <div className="main-container">
                <TransitionContainer>
                    <Component {...pageProps} />
                </TransitionContainer>
            </div>
    </TransitionContextProvider>
  );
}

export default MyApp;