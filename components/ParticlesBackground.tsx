import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      detectRetina: true,
      fullScreen: {
        enable: false,
      },

      width: "100%",
      height: "100%",

      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            area: 400,
          },
        },

        color: {
          value: "#ffffff",
        },

        shape: {
          type: "circle",
        },

        opacity: {
          value: 1,
          random: {
            enable: true,
          },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0,
            sync: false,
          },
        },

        size: {
          value: 3,
          random: {
            enable: true,
          },
          animation: {
            enable: false,
            speed: 4,
            minimumValue: 0.3,
            sync: false,
          },
        },

        links: {
          enable: false, // line_linked.enable = false
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },

        move: {
          enable: true,
          speed: 1,
          direction: MoveDirection.none,
          random: true,
          straight: false,
          outModes: {
            default: OutMode.out,
          },
          bounce: false,
          attract: {
            enable: false,
            rotate: {
              x: 600,
              y: 600,
            },
          },
        },
      },

      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
          onClick: {
            enable: true,
            mode: "repulse",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          grab: {
            distance: 240,
            links: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 78,
            size: 8.12,
            duration: 1.7,
            opacity: 0.57,
            speed: 3,
          },
          repulse: {
            distance: 256,
            duration: 0.4,
          },
          push: {
            quantity: 4,
          },
          remove: {
            quantity: 2,
          },
        },
      },
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="z-10 h-screen absolute inset-0"
      />
    );
  }

  return <></>;
}
