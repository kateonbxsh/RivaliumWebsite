import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/main/Main'
import { useParticlesLoaded } from "./contexts/ParticlesContext";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from '@tsparticles/slim';
import { useEffect } from "react";
import Loading from './pages/Loading'
import './style/global.scss'
import HomeLayout from "./pages/main/HomeLayout";

export default function App() {

    const {particlesLoaded, setParticlesLoaded} = useParticlesLoaded();

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setParticlesLoaded(true);
        });
      }, []);

    if (!particlesLoaded) {
        return (
            <Loading/>
        )
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<HomeLayout/>}/>
                    <Route path="/home" element={<HomeLayout/>}/>
                    <Route path="/rivals" element={<>Miaw</>}/> 
                    <Route path="/download" element={<></>}/> 
                    <Route path="/gameplay" element={<></>}/>
                    <Route path="/game" element={<></>}/>
                </Route>
                <Route path="/haha" element={"Hello"}/>
            </Routes>
        </BrowserRouter>
    );

}