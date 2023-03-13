import styles from './Product.module.css'

const Product = (props) =>{
  return(
    <li className={styles.productLi}>
      <h2>{props.title}</h2>
      <img src={props.image} className={styles.productLi__img}/>
      <h4>{props.price}</h4>
    </li>
  )
}

export default Product;