import { animated, easings, useSpring } from "react-spring";

export interface AnimatedBackgroundProps {
    namespace?: string | string[];
    animation?: object, // Change type to `object` if not using SpringValues
    onOpen?: [object, object],
    onOpenEasing?: (t: number) => number,
    duration?: number,
    className: string
}

export default function AnimatedBackground({
    namespace,
    animation = {},
    className,
    onOpen = [{}, {}],
    duration = 500,
    onOpenEasing = easings.linear
}: AnimatedBackgroundProps) {


    // Check if the current pathname matches the namespace
    const inNamespace = (namespace instanceof Array) 
        ? namespace.includes(location.pathname) 
        : (namespace === undefined || namespace === location.pathname);

    const style = { opacity: inNamespace ? 1 : 0 };
    for(const key in onOpen[0]) {
        style[key] = inNamespace ? (onOpen[1][key]) : (onOpen[0][key]);
    }

    const opacity = useSpring({
        to: style,
        config: { duration, easing: onOpenEasing },
    });

    return (
        <animated.div
            style={{
                ...opacity,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                overflow: 'hidden'
            }}
        >
            <animated.div className={className}
                style={{
                    ...animation,
                    position: 'absolute',
                    zIndex: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
        </animated.div>
    );
}
