import { MouseEventHandler } from "react";

interface ButtonProps {
    type?: 'main' | 'secondary';
    content?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ type, onClick, content }: ButtonProps) {

    return (<button className={"button " + (type ?? "")} onClick={onClick}>
        {content}
    </button>)

}