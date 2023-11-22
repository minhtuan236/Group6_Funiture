import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductInfo from './ProductInfo';
import ProductList from './ProductList';
import ProductDesign from './ProductDesign';
import Review from './Review';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products/:id" element={<ProductDesign />} />
      </Routes>
      <ProductInfo />
      <Review />
      <ProductList />
    </div>
  );
  
}

export default App;
