import { CardImage, Icon } from "./Covers";
import styled from "styled-components";
import styles from "./v3.css";

const TotalJobV2 = () => {
  const Container = styled.div``;
  const TjLink = styled.h1``;
  const CardCon = styled.div``;
  const Title = styled.h1``;
  const BtnCon = styled.div``;
  const Btn = styled.button``;
  const Link = styled.a``;

  return (
    <Container className={styles.container}>
      <TjLink className={styles.TjLink}>
        Continue your search on <Icon></Icon>
      </TjLink>
      <div className={styles.icon}> 
      <CardImage></CardImage>
      </div>
      <CardCon className={styles.card}>
        <Title className={styles.title}>What's your <br/> preferred commute?</Title>
        <BtnCon className={styles.btnCon}>
        <Btn className={styles.btns}>walking is the best</Btn>
        <Btn className={styles.btns}>Take the train</Btn>
        </BtnCon>
        <BtnCon className={styles.btnCon}>
        <Btn className={styles.btns}>ride my car</Btn>
        <Btn className={styles.btns}>bicycle - i enjoy the sport</Btn>
        </BtnCon>
        <Link className={styles.registerLing}>No thanks, i already have an account</Link>
      </CardCon>
    </Container>
  );
};

export default TotalJobV2;
