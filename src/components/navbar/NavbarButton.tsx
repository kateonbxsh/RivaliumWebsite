import Link from "next/link";

export default function NavbarButton({text, href}: {text: string, href: string}) {

    return (<Link href={href}>
        <button className="navbar-button">
            {text}
        </button>
    </Link>)

}