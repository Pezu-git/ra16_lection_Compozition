function OfferModal(props) {
    console.log(props.children)
    return (
        <div className="modal">
            <div className="modal-body">
                {props.children}
            </div>
            <button className="modal-close">закрыть</button>
        </div>
    )
}

export default OfferModal