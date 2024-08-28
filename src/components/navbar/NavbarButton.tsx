import { useNavigate } from "react-router-dom";

export default function NavbarButton({text, href}) {

    const navigate = useNavigate();

    return (<>
        <button onClick={() => navigate(href)} className="navbar-button">
            {text}
        </button>
    </>)

}