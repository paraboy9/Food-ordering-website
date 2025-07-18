import classes from './CartList.module.css'
import { motion } from 'framer-motion';

const CartList = (props) => {
    return (
        <li className={classes['cart-item']}>
        <motion.div
        initial={{ opacity: 0, y: 40 }}
    animate={{opacity:1,y:0}}
    transition={
      {type:'spring', delay:0.2, damping:10, stiffness:120}
     }>
          
          <div className={classes.heading}>
          <img src={props.image} alt='image' />
          <h2>{props.name}</h2>
          </div>
          <div className={classes.summary}>
            <span className={classes.price}>Rs.{props.price}</span>
            <span className={classes.amount}>x {props.amount}</span>
          </div>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{opacity:1,y:0}}
        transition={
          {type:'spring', delay:0.4, damping:10, stiffness:120}
         }
        className={classes.actions}>
          <button onClick={props.onRemove}>−</button>
          <button onClick={props.onAdd}>+</button>
        </motion.div>
      </li>
    );
}
export default CartList;