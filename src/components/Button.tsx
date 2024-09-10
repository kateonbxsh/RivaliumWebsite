import { MouseEventHandler } from "react";

interface ButtonProps {
    type?: 'main' | 'secondary';
    content?: string;
    small?: boolean;
    big?: boolean
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ type, onClick, content, small, big, disabled }: ButtonProps) {

    return (<button className={"button " + (type ?? "") + (small ? " s" : "") + (big ? " b" : "")} onClick={onClick} disabled={disabled}>
        {content}
    </button>)

}