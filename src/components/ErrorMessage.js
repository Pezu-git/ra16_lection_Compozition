import Message from "./Message";


function ErrorMessage(props) {
    console.log(props)
    const base = {
        type: 'error',
        icon: '/path/to/error.png'
    }
    const newProps = Object.assign({}, props, base);
    return (
        <Message {...newProps} />
    );
}

export default ErrorMessage