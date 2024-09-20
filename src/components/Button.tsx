import { MouseEventHandler } from "react";
import { IconType } from "react-icons/lib";


interface ButtonProps {
    type?: 'main' | 'secondary';
    content?: string;
    Icon?: IconType
    small?: boolean;
    big?: boolean
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ type, onClick, content, small, big, disabled, Icon }: ButtonProps) {

    return (<button className={"flex items-center button " + (type ?? "") + (small ? " s" : "") + (big ? " b" : "")} onClick={onClick} disabled={disabled}>
        {Icon && <Icon className="mr-2" />}
        {content}
    </button>)

}