import s from "./productList.module.scss"
const ProductListItem = (props) => {
    return (
        <li className={s.card}>
                <p className={s.card_name}>{props.name}</p>
                <p className={s.card_price}>Price: {props.price}$</p>
                <p className={s.card_color}><span className={s.span}>Color </span>{props.color}</p>
        </li>
        
    )
}

export default ProductListItem