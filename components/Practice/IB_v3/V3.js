import { CardImage, Icon } from "./Covers";
import styled from "styled-components";
import styles from "./v3.css";

const TotalJobV2 = () => {
  const Container = styled.div``;
  const TjLink = styled.h1``;
  const CardCon = styled.div``;
  const Title = styled.h1``;
    const BtnCon = styled.div``;

  return (
    <Container className={styles.container}>
      <TjLink className={styles.TjLink}>
        Continue your search on<Icon></Icon>
      </TjLink>
      <CardImage></CardImage>
      <CardCon className={styles.card}>
        <Title className={styles.title}>What's your preferred commute?</Title>
        <BtnCon className={styles.btnCon}>
        <button className={styles.btns}>walking is the best</button>
        <button className={styles.btns}>Take the train</button>
        </BtnCon>
        <BtnCon className={styles.btnCon}>
        <button className={styles.btns}>ride my car</button>
        <button className={styles.btns}>bicycle - i enjoy the sport</button>
        </BtnCon>
      </CardCon>
    </Container>
  );
};

export default TotalJobV2;
