import { useRouteTransition } from "../../contexts/TransitionContext";

export default function NavbarButton({text, href}: {text: string, href: string}) {

    const goTo = useRouteTransition();

    return (<>
        <button onClick={() => goTo(href, 200)} className="navbar-button">
            {text}
        </button>
    </>)

}