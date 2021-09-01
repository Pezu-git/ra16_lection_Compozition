const List = props =>
    <ul className={props.className} style={props.style}>
        {props.children}
    </ul>;

    export default List