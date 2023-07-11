import styles from "./v3.css"
import styled from "styled-components"

const CashierV3 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Do You Have<br/> Experience In <bold className={styles.bold}>Cashier?</bold></h1>
       <div className={styles.btnCon}>
        <div className={styles.btns}>
        <h1 className={styles.btnText}>I Do, Actually</h1>
        </div>
        <div className={styles.btns}>
        <h1 className={styles.btnText}>Nope, None.</h1>
        </div>
        </div>
    </div>
  );
};

export default CashierV3;
