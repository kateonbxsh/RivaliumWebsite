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
import HomeLayout from '@/components/HomeLayout';

function App({ Component, pageProps }: AppProps) {

    const Layout = HomeLayout;

    return <Layout>
        <Component {...pageProps}/>
    </Layout>

}

export default App;