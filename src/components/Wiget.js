const Widget = props => (
    <div className="widget">
        <div>{props.title}</div>
        {props.children}
    </div>
)

export default Widget