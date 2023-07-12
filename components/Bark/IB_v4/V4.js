import { Logo, Picture } from "./Images";
import styles from "./v4.css"
import styled from "styled-components"

const BarkV4 = () => {
    return (
        <div className={styles.container}>
            <p className={styles.bark}>Continue your search on<Logo></Logo></p>
            <Picture></Picture>
            <h1 className={styles.title}>Embrace flexible hours: Take charge of your schedule!</h1>
            <div className={styles.btnCon}>
                <div>
                <button className={styles.btn}>Dog Walker</button>
                <button className={styles.btn}>House Cleaning</button>
                </div>
                <div>
                <button className={styles.btn}>General Builders</button>
                <button className={styles.btn}>Gardening</button>
                </div>
            </div>
        </div>
    );
}

export default BarkV4;