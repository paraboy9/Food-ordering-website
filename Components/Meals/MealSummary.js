import { motion } from 'framer-motion';
import styles from './MealSummary.module.css'

const MealSummary = () => {
    return (
        <motion.section
        initial={{ opacity: 0, scale:0 }}
        animate={{opacity:1,scale:1}}
        transition={
          {type:'spring', delay:0.3, damping:10, stiffness:120}
         }
        className={styles.summary}>
          <h2>Delicious Food, Delivered To You</h2>
          
          
        </motion.section>
      );
}

export default MealSummary;