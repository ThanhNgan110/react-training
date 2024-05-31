import FilterableProductTable from "./components/FilterableProductTable";
import dataProducts from "./data/data";

const App = () => {
  return (
    <FilterableProductTable products ={dataProducts}/>
  )
}

export default App;
