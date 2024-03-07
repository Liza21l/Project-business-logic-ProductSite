import { useSelector } from "react-redux"
import ProductListItem from "./ProductListItem"
import s from "./productList.module.scss"

const ProductList = () => {
    const storeList = useSelector(state => state.product.list)
    console.log(storeList)
    const ProductCollection = storeList.map(item => {
        return (
            <ProductListItem key={item.id} name={item.name} price={item.price} color={item.color} memory={item.memory} memorySSD={item.memorySSD} diagonal={item.diagonal}/>
        )
    })
    return (
        <ul className={s.list}>
            {ProductCollection}
        </ul>
    )
    
}

export default ProductList