const basketListItem = (props) => {
    return (
        <>
        <h1>Basket</h1>
         <ul>
            <p>{props.name}</p>
            <p>price: {props.price}</p>
            <p>Count: {props.count}</p>
        </ul>
        </>
    )
}

export default basketListItem