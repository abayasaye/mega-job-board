import styled from 'styled-components'
import Icon from "./Images";
import styles from "./v4.css"


const TotaljobV4 = () => {
  const TjLink = styled.h1``
  return (
    <div className={styles.container}>
      <TjLink className={styles.tjLink}>Continue your search on <Icon></Icon></TjLink>
      <h1 className={styles.title}>How do you travel to work everyday?</h1>
      <div className={styles.containerAbcd}>
      <h3 className={styles.text}><span className={styles.abcd}>A</span>i love walking!</h3>
      <h3 className={styles.text}><span className={styles.abcd}>B</span>Riding a bike is my thing</h3>
      <h3 className={styles.text}><span className={styles.abcd}>C</span>I have my own car</h3>
      <h3 className={styles.text}><span className={styles.abcd}>D</span>I take the train, it’s the best.</h3>
      <a className={styles.registerLink}>No thanks, i already have an account</a>
      </div>
    </div>
  );
};

export default TotaljobV4;
