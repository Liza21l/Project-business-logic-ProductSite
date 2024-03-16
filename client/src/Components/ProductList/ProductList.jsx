import { useSelector } from "react-redux"
import ProductListItem from "./ProductListItem"
import s from "./productList.module.scss"

const ProductList = () => {
    const { filterList, list} = useSelector((state) => state.product);
    const currentList = filterList.length !== 0 ? filterList : list;
    const ProductCollection = currentList.map(item => {
        return (
            <ProductListItem key={item.id} id = {item.id} name={item.name} price={item.price} color={item.color} memory={item.memory} memorySSD={item.memorySSD} diagonal={item.diagonal}/>
        )
    })
    return (
        <ul className={s.list}>
            {ProductCollection}
        </ul>
    )
    
}

export default ProductList