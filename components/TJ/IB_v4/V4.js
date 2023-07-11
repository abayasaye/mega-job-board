import styles from "./v4.css";
import styled from "styled-components";

const TotalJobV4 = () => {
  const Container = styled.div``;
  const Title = styled.h1``;
  const Tj = styled.h2``;
  const Btn = styled.button``;
  return (
    <Container className={styles.container}>
      <Tj className={styles.tjTitle}>Totaljobs</Tj>
      <Title className={styles.title}>ANY OF THESE JOB TITLE FITS YOU?</Title>
      <Container className={styles.btnCon}>
        <Btn className={styles.btn}>Fctory workers</Btn>
        <Btn className={styles.btn}>Delivery drivers</Btn>
      </Container>
      <Container className={styles.btnCon}>
        <Btn className={styles.btn}>Care assistant</Btn>
        <Btn className={styles.btn}>Customer service</Btn>
      </Container>
      <Btn className={styles.searchBtn}>Search 120000 more jobs in the UK</Btn>
    </Container>
  );
};

export default TotalJobV4;
