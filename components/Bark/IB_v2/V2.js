import Pic from "./Images";
import styles from "./v2.css";
import styled from "styled-components";
const JobReqV2 = () => {
  const Div = styled.div``;
  const Btn = styled.button``;
  const H1 = styled.h1``;
  const Text = styled.p``;  
  return (
    <Div className={styles.conatiner}>
      <Div className={styles.img}>
        <Pic></Pic>
      </Div>
      <H1 className={styles.title}>
        This <bold className={styles.bold}>Baggage handler</bold> Job <br />
        Requires These Skills <br /> Which Of them Do You Have?
      </H1>
      <Div className={styles.btnCon}>
        <Div>
          <Btn className={styles.btn}>Reliability</Btn>
          <Btn className={styles.btn}>Physical work</Btn>
        </Div>
        <Div>
          <Btn className={styles.btn}>Multitasking </Btn>
          <Btn className={styles.btn}>Attention to Detail</Btn>
        </Div>
        <Div>
          <Btn className={styles.btn}>Teamwork</Btn>
          <Btn className={styles.btn}>Problem Solving</Btn>
        </Div>
        <Div>
          <Btn className={styles.btn}>Organization</Btn>
          <Btn className={styles.btn}>Flexibility</Btn>
        </Div>
      </Div>
      <Btn className={styles.linkBtn}>Take Me Baggage Handler Job</Btn>
      <Text className={styles.link}>
        I dont have most of these skills,
        <br /> take me back to search
      </Text>
    </Div>
  );
};

export default JobReqV2;
