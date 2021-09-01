const ListItem = props =>
    <li className={props.className} style={props.style}>
        {props.children}
    </li>;

    export default ListItem