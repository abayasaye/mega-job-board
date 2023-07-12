import styles from "./v3.css"
import styled from "styled-components"

const CashierV3 = () => {
  const Div = styled.div``;
  const H1 = styled.h1``;
  return (
    <Div className={styles.container}>
      <H1 className={styles.title}>Do You Have<br/> Experience In <bold className={styles.bold}>Cashier?</bold></H1>
       <Div className={styles.btnCon}>
        <Div className={styles.btns}>
        <H1 className={styles.btnText}>I Do, Actually</H1>
        </Div>
        <Div className={styles.btns}>
        <H1 className={styles.btnText}>Nope, None.</H1>
        </Div>
        </Div>
    </Div>
  );
};

export default CashierV3;
