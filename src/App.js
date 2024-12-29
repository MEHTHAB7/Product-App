import logo from './logo.svg';
import './App.css';
import ProductDetails from './components/ProductForm';
import SearchProduct from './components/ProductSearch';
import ProductList from './components/ProductList';
function App() {
  return (
    <div>
     <ProductDetails />
     <SearchProduct />
     <ProductList />

    </div>
  );
}

export default App;
