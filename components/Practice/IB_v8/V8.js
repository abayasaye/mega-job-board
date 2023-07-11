import styled from "styled-components";
import styles from "./v8.css";
import Popup from "reactjs-popup";
import { useState } from "react";
import { Dog, Car, Bicycle } from "./Image";

const PopUp = () => {
  const Div = styled.div``
  const Text = styled.p``
  const Input = styled.input``
  const Button = styled.button``

  const [value, setValue] = useState();

  const rangeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <Div>
      <Popup trigger={<Button> Gig Job Type</Button>} position="top">
        {(close) => (
          <Div className={styles.container}>
            <Div className={styles.close}>
              <a onClick={close}>&times;</a>
            </Div>
            <Text className={styles.topTitle}>Click The Gig job Type</Text>
            <Div className={styles.cardsCon}>
              <Div className={styles.cardCol}>
                <Car></Car>
                <Text className={styles.titls}>Uber Driver</Text>
              </Div>
              <Div className={styles.cardCol}>
                <Dog  className={styles.dog}></Dog>
                <Text className={styles.titls}>Dog Walker</Text>
              </Div>
              <Div className={styles.cardCol}>
                <Bicycle></Bicycle>
                <Text className={styles.titls}>Food Delivery</Text>
              </Div>
            </Div>
            <hr/>
            <Div className={styles.scrols}>
              <Text className={styles.titls}>Extra ${value} A Week</Text>
              <Input
                className={styles.range}
                onChange={rangeValue}
                type="range"
                id=""
                name=""
                placeholder=""
                min="0"
                max="300"
              />
              <Text className={styles.titls}>Extra ${value} A Week</Text>
              <Input
                className={styles.range}
                onChange={rangeValue}
                type="range"
                id=""
                name=""
                placeholder=""
                min="0"
                max="1200"
              />
              <Text className={styles.titls}>Extra ${value} A Week</Text>
              <Input
                className={styles.range}
                onChange={rangeValue}
                type="range"
                id=""
                name=""
                placeholder=""
                min="0"
                max="14400"
              />
            </Div>
            <Button className={styles.btnLink}>
              Show Me Some Gig Job Offers
            </Button>
          </Div>
        )}
      </Popup>
    </Div>
  );
};

export default PopUp;
