import Link from "next/link";

export default function NavbarButton({text, href}: {text: string, href: string}) {

    return (<Link href={href} prefetch>
        <button className="navbar-button">
            {text}
        </button>
    </Link>)

}