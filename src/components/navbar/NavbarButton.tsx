import { useNavigate } from "react-router-dom";

export default function NavbarButton({text, href}) {

    const navigate = useNavigate();

    return (<>
        <a onClick={() => navigate(href)} className="navbar-button">
            {text}
        </a>
    </>)

}