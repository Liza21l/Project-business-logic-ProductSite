import ProductList from "./Components/ProductList/ProductList"
import { useSelector } from "react-redux";
import SearchPanel from "./Components/Header/SearchPanel";

const App = () => {
  const { list, searchList, searchValue } = useSelector(
    (state) => state.product
  );
  return (
    <>
    <SearchPanel searchValue={searchValue}/>
    <ProductList productsStore={searchValue.length === 0 ? list : searchList}/>
    </>
  )
}

export default App
