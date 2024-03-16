import { useDispatch } from "react-redux"
import s from "./productList.module.scss"
import { addBasket } from "../../redux/sllice/productSlice"
const ProductListItem = (props) => {
    const dispatch = useDispatch()
    const handleBuyProducy = () => {
        dispatch(addBasket(props.id))
    }
    return (
        <li className={s.card}>
                <p className={s.card_name}>{props.name}</p>
                <p className={s.card_price}>Price: {props.price}$</p>
                <p className={s.card_color}><span className={s.span}>Color </span>{props.color}</p>
                <button>Додати у корзину</button>
        </li>
        
    )
}

export default ProductListItem