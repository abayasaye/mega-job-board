import styles from "./v9.css";
import styled from "styled-components";
import Popup from "reactjs-popup";

const JobV9 = () => {
  const Div = styled.div``;
  const Text = styled.p``;
  const Button = styled.button``;
  const Title = styled.h1``;
  return (
    <Div>
      <Popup trigger={<Button>Job Type</Button>} position="top">
        {(close) => (
          <Div className={styles.container}>
            <Div className={styles.close}>
              <a onClick={close}>&times;</a>
            </Div>
            <Text className={styles.topTitle}>Select An Answer</Text>
            <Title className={styles.title}>
              What type of side hustle fits your lifestyle best?
            </Title>
            <hr />
            <Div className={styles.btns}>
              <Button className={styles.btn}>
                <Text className={styles.answers}>
                  <bold className={styles.abcd}>A</bold> Dog Walker
                </Text>
              </Button>
              <Button className={styles.btn}>
                <Text className={styles.answers}>
                  <bold className={styles.abcd}>B</bold> Uber Driver
                </Text>
              </Button>
              <Button className={styles.btn}>
                <Text className={styles.answers}>
                  <bold className={styles.abcd}>C</bold> Food Delivery
                </Text>
              </Button>
              <Button className={styles.btn}>
                <Text className={styles.answers}>
                  <bold className={styles.abcd}>D</bold> Package Delivery
                </Text>
              </Button>
            </Div>
            <Div className={styles.prevNext}>
              <Button className={styles.btnN}>Back</Button>
              <Button className={styles.btnN}>Next</Button>
            </Div>
          </Div>
        )}
      </Popup>
    </Div>
  );
};

export default JobV9;
