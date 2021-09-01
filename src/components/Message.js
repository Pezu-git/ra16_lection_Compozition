function Message(props) {
    console.log(props)
    return (
        <div className={`message message-${props.type}`}>
            {props.text}
        </div>
    );
}

export default Message