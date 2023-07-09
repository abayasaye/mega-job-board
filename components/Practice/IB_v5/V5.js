import styled from "styled-components";
import styles from "./v5.css";
import {Bicycle, Car, Icon, Train, Walk} from "./Images";

const TjV5 = () => {
    const Container = styled.div``
    const TjLink = styled.div``
    const Title = styled.h1``
    const BtnCon = styled.div``
    const Btns = styled.button``
    const Link = styled.p``
  return (
    <Container className={styles.container}>
      <TjLink>
        <Icon></Icon>
      </TjLink>
      <Title className={styles.title}>How do you travel  to work everyday?</Title>
      <BtnCon className={styles.btnCon}>
        <Btns className={styles.btns}><Walk></Walk></Btns>
        <Btns className={styles.btns}><Bicycle></Bicycle></Btns>
        <Btns className={styles.btns}><Car></Car></Btns>
        <Btns className={styles.btns}><Train></Train></Btns>
      </BtnCon>
      <Link className={styles.registerLink}>No thanks, i already have an account</Link>
    </Container>
  );
};

export default TjV5;
