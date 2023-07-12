import { Logo, Picture } from "./Images";
import styles from "./v4.css"
import styled from "styled-components"

const BarkV4 = () => {
    const Div = styled.div``;
    const P = styled.p``;
    const Title = styled.h1``;
    const Btn = styled.button``;
    return (
        <Div className={styles.container}>
            <P className={styles.bark}>Continue your search on<Logo></Logo></P>
            <Picture></Picture>
            <Title className={styles.title}>Embrace flexible hours: Take charge of your schedule!</Title>
            <Div className={styles.btnCon}>
                <Div>
                <Btn className={styles.btn}>Dog Walker</Btn>
                <Btn className={styles.btn}>House Cleaning</Btn>
                </Div>
                <Div>
                <Btn className={styles.btn}>General Builders</Btn>
                <Btn className={styles.btn}>Gardening</Btn>
                </Div>
            </Div>
        </Div>
    );
}

export default BarkV4;