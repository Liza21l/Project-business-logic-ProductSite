import ProductList from "./Components/ProductList/ProductList"
import { useSelector } from "react-redux";
import SearchPanel from "./Components/Header/SearchPanel";
import CategoryList from "./Components/category/categoryList";
import Basket from './Components/Basket/basketList';


const App = () => {
  const { list, filterList, searchValue } = useSelector(
    (state) => state.product
  );
  return (
    <>
    <CategoryList/>
    <SearchPanel searchValue={searchValue}/>
    <ProductList productsStore={searchValue.length === 0 ? list : filterList}/>
    <Basket/>
    </>
  )
}

export default App
