import { Logo, Icon } from "./Images";
import styles from "./v1.css";
import styled from "styled-components";

const BarkV1 = () => {
    const Div = styled.div``;
    const H1= styled.h1``;
    const Btn= styled.button``;
  return (
    <Div className={styles.container}>
      <H1 className={styles.barkTitle}>
        Continue your search on <Logo></Logo>
      </H1>
      <Icon></Icon>
      <H1 className={styles.title}>
      Hey <bold className={styles.bold}>handyworkers!</bold><br/> Win local jobs<br/> and grow your business!
      </H1>
      <Btn className={styles.btn}>{`TRY BARK NOW>`}</Btn>
    </Div>
  );
};

export default BarkV1;
