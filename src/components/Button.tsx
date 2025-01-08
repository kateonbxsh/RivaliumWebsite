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

    if (disabled) type = undefined;
    let className = "text-md px-3 py-0.5 mx-1 md:text-3xl md:px-8 md:py-2 md:mx-2 md:my-2";
    if (small) className = "text-xs px-2 py-0.5 mx-0.5 md:text-xl md:px-5 md:py-0.5 md:mx-1";
    if (big) className = "text-lg px-3 py-1 mx-1 md:text-4xl md:px-10 md:py-4 md:mx-5";

    return (<button className={`flex items-center button ${type ?? ""} ${className}`} onClick={onClick} disabled={disabled}>
        {Icon && <Icon className="mr-2" />}
        {content}
    </button>)

}