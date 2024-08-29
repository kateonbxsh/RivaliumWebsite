import { MouseEventHandler } from "react";

interface ButtonProps {
    type?: 'main' | 'secondary';
    content?: string;
    small?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ type, onClick, content, small }: ButtonProps) {

    return (<button className={"button " + (type ?? "") + (small ? " s" : "")} onClick={onClick}>
        {content}
    </button>)

}