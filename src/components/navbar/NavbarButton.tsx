export default function NavbarButton({text, onClick, side}) {

    return (<>
        <a onClick={onClick} className="navbar-button" style={{"float": side}}>
            {text}
        </a>
    </>)

}