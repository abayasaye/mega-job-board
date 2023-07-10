import styled from "styled-components";
import styles from "./v7.css";
import { useState } from "react";
import Circle from "react-circle";

const Dashboard = () => {
  const [value, setValue] = useState();

  const rangeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.conCol}>
        <h4 className={styles.title}>Loan Type</h4>
        <div className={styles.btnContainer}>
          <button className={styles.btnTop}>Home Loan</button>
          <button className={styles.btnTop}> Car Loan</button>
          <button className={styles.btnTop}>Personal Loan</button>
        </div>
        <p className={styles.labels}>Loan Amount</p>
        <input
          className={styles.range}
          onChange={rangeValue}
          type="range"
          id=""
          name=""
          placeholder=""
          min="0"
          max="100000"
        />
        <button className={styles.scrollView}>₪ {value}</button>
        <p className={styles.labels}>Interst Amount</p>
        <input
          className={styles.range}
          onChange={rangeValue}
          type="range"
          id=""
          name=""
          placeholder=""
          min="0"
          max="100"
        />
        <button className={styles.scrollView}>{value}</button>{" "}
        <span className={styles.pa}> p.a </span>
        <p className={styles.labels}>Loan Team</p>
        <input
          className={styles.range}
          onChange={rangeValue}
          type="range"
          id=""
          name=""
          placeholder=""
          min="0"
          max="100"
        />
        <button className={styles.scrollView}>{value}</button>
      </div>
      <div className={styles.conCol}>
        <div className={styles.chartCard}>
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
          <div className={styles.cahrtCon}>
            <ul className={styles.uls}>
              <li>Principil </li>
              <li>Interst Payable </li>
              <p>
                Total Amount
                <br /> Payable{" "}
              </p>
            </ul>
            <div>
              <p className={styles.values}>{`₪ ${value}`}</p>
              <p className={styles.values}>{`₪ ${value}`}</p>
              <p className={styles.values}>{`₪ ${value}`}</p>
            </div>
          </div>
          <button className={styles.btn}>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
