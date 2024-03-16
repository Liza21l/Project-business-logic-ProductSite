import { useDispatch } from "react-redux";
import { changeCategory} from "../../redux/sllice/productSlice"
import s from "./categories.module.scss"

const CategoryListItem  = (props)=> {
    const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeCategory(props.text));
  };
  return (
    <li>
      <button
        onClick={handleClick}
        className={`${props.isActive ? s.btn_active : s.btn}`}
      >
        {props.text}
      </button>
    </li>
  );
}

export default CategoryListItem