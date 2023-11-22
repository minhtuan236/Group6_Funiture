import Product from "./Product";
import { useState, useEffect } from 'react';




function ProductList() {
    const [products, setProducts] = useState([]);
    
    const getProducts = () => {
        fetch("https://653f52019e8bd3be29e0421c.mockapi.io/products")
        .then((data) =>data.json())
        .then((productList) => setProducts(productList));
    }


    useEffect(() => getProducts(), []);
    
    return ( 
        <div className="product-container-list">
            {products.map( (product, index) => <Product 
                                            id={product.id}
                                            name={product.name} 
                                            image={product.image} 
                                            price={product.price} 
                                            key={index} 
                                            /> )}
        </div>
     );
}

export default ProductList;