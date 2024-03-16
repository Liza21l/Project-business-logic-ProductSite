import s from "./categories.module.scss"
import { useSelector } from "react-redux"
import CategoryListItem from "./categoryListItem"

const CategoryList = () => { 
    const {categories, categoryActive} = useSelector(state => state.product)
    return (
        <ul className={s.list}>
            {
                categories.map(item => 
                    <CategoryListItem key={item} text={item} isActive={item === categoryActive}/>
                )
            }
        </ul>
    )
}

export default CategoryList