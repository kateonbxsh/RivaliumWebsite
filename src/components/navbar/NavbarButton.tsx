import Link from "next/link";
import { useRouter } from 'next/router';

export default function NavbarButton({text, href, disabled, blank}: {text: string, href: string, disabled?: true, blank?: true}) {

    const router = useRouter();

    return (<Link 
        href={href}
        target={blank ? "_blank" : ""}
        onClick={(e) => {
            if (router.pathname === href || disabled) {
              e.preventDefault();
            }
          }}>
        <button className={"navbar-button mx-3 md:mx-5 my-1 md:my-1.5 " + ((router.pathname === href) ? "selected " : "")
            + ((disabled) ? "disabled" : "")
        }>
            {text}
        </button>
    </Link>)

}