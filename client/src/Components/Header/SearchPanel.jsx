import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeSearch } from "../../redux/sllice/productSlice"
const SearchPanel = ({searchValue}) => {
    const dispatch = useDispatch()
    const handleChangeSearch = (newValue) => {
        dispatch(changeSearch(newValue))
    }
    return (
        <div>
            <input value={searchValue} onChange={e => handleChangeSearch(e.target.value)} placeholder="Write name product"/>
        </div>
    )
}

export default SearchPanel