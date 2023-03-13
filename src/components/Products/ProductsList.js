import React, { useEffect, useState } from "react";
import productsData from "../../services/productsData";
import Product from "../Product/Product";
import styles from './ProductsList.module.css'

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsDataResponse = await productsData();
        setProducts(productsDataResponse);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.productsWrapper}>
      {products.map((product) =>{
        return <Product title={product.title} image={product.image} price={product.price} key={product.id}/>
      })}
    </div>
  )
};

export default Products;
