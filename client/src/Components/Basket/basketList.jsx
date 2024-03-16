import { useSelector } from "react-redux"
import BasketListItem from "./basketListItem"

const basket = () => {
    const list = useSelector(state => {
        return state.product.list.filter(el => {
            const result = searchBasket(el, state.product.basketList)
            if(result){
                return true
            }
        })
    })
    const basketList = useSelector(state => state.product.basketList)
    return (
        <section>
            <h2>Basket</h2>
            <ul>
                {list.map(el =>
                <BasketListItem
                key={el.id}
                name={el.name}
                price={el.price}
                />
                )}
            </ul>
        </section>
    )
}

export default basket