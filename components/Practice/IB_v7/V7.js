import styled from "styled-components";
import styles from "./v7.css";
import { useState } from "react";
import Circle from "react-circle";

const Dashboard = () => {
    const Div = styled.div``
    const Btn = styled.button``
    const Title = styled.h4``
    const Text = styled.p``
    const Span = styled.span``
    const Input = styled.input``
    const Ul = styled.ul``
    const Li = styled.li``
  const [value, setValue] = useState();

  const rangeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <Div className={styles.container}>
      <Div className={styles.conCol}>
        <Title className={styles.title}>Loan Type</Title>
        <Div className={styles.btnContainer}>
          <Btn className={styles.btnTop}>Home Loan</Btn>
          <Btn className={styles.btnTop}> Car Loan</Btn>
          <Btn className={styles.btnTop}>Personal Loan</Btn>
        </Div>
        <Text className={styles.labels}>Loan Amount</Text>
        <Input
          className={styles.range}
          onChange={rangeValue}
          type="range"
          id=""
          name=""
          placeholder=""
          min="0"
          max="100000"
        />
        <Btn className={styles.scrollView}>₪ {value}</Btn>
        <Text className={styles.labels}>Interst Amount</Text>
        <Input
          className={styles.range}
          onChange={rangeValue}
          type="range"
          id=""
          name=""
          placeholder=""
          min="0"
          max="100"
        />
        <Btn className={styles.scrollView}>{value}</Btn>{" "}
        <Span className={styles.pa}> Text.a </Span>
        <Text className={styles.labels}>Loan Team</Text>
        <Input
          className={styles.range}
          onChange={rangeValue}
          type="range"
          id=""
          name=""
          placeholder=""
          min="0"
          max="100"
        />
        <Btn className={styles.scrollView}>{value}</Btn>
      </Div>
      <Div className={styles.conCol}>
        <Div className={styles.chartCard}>
          <Circle
            progress={`₪${value}`}
            animate={true}
            animationDuration="1s"
            size={150}
            lineWidth={30}
            progressColor="#30A2FF"
            bgColor="#0E2954"
            textColor="#0E2954"
            percentSpacing={10}
            showPercentage={true}
            showPercentageSymbol={false}
          />
          <Div className={styles.cahrtCon}>
            <Ul className={styles.uls}>
              <Li>Principil </Li>
              <Li>Interst Payable </Li>
              <Text>
                Total Amount
                <br /> Payable{" "}
              </Text>
            </Ul>
            <Div>
              <Text className={styles.values}>{`₪ ${value}`}</Text>
              <Text className={styles.values}>{`₪ ${value}`}</Text>
              <Text className={styles.values}>{`₪ ${value}`}</Text>
            </Div>
          </Div>
          <Btn className={styles.btn}>Apply Now</Btn>
        </Div>
      </Div>
    </Div>
  );
};

export default Dashboard;
