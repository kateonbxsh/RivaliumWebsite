import "./container.scss"

export default function Container({ children, id }) {

    return (<div className="container container-left" id={id}>{children}</div>);

}