import React, { useMemo } from 'react';
import { Particles } from '@tsparticles/react';
import { ISourceOptions } from '@tsparticles/engine';

const ParticlesBackground: React.FC = () => {

    const options: ISourceOptions = useMemo(
        () => ({
          fpsLimit: 120,
          particles: {
            color: {
              value: ["#ffdf8f", "#ea8fff"]
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 140,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.2, max: 3 },
            },
          },
          detectRetina: true,
        }),
        [],
      );

    return (
        <div id="particles-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <Particles options={options} />
        </div>
    );
};

export default ParticlesBackground;
