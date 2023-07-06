import styles from "./v4.css"


const TotaljobV4 = () => {
  return (
    <div className={styles.container}>
      <h1>How do you travel to work everyday?</h1>
      <div className={styles.containerAbcd}>
      <h3 className={styles.text}><p className={styles.abcd}>A</p>i love walking!</h3>
      <h3 className={styles.text}><p className={styles.abcd}>B</p>Riding a bike is my thing</h3>
      <h3 className={styles.text}><p className={styles.abcd}>C</p>I have my own car</h3>
      <h3 className={styles.text}><p className={styles.abcd}>D</p>I take the train, it’s the best.</h3>
      </div>
    </div>
  );
};

export default TotaljobV4;
