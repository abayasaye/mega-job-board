import styled from "styled-components";
import styles from "./v1.css";
import {Cover, Logo} from "./Cover";



const TestV1 = () => {
    const Container = styled.div``
    const Title = styled.h1``
    const Monsterlink = styled.p``
    const  BtnCon =styled.div``
    const BtnRow = styled.div``
    const Btn = styled.button``
    const Link = styled.a``       
    return (
        <Container className={styles.container}>
            <Monsterlink className={styles.monsterLink}>Continue your search on <Logo></Logo></Monsterlink>
            <Cover></Cover>
            <Title className={styles.title}>Work From Anywhere<br/> Find A Remote Job!</Title>
            <BtnCon className={styles.btnContainer}>
            <BtnRow className={styles.btnRow}>
            <Btn className={styles.button}>Search Jobs</Btn>
            <Btn className={styles.button}>Career Advice</Btn>
            </BtnRow>
            <Btn className={styles.button}>Salary Calculator</Btn>
            </BtnCon>
            <Link className={styles.registerLing}>No thanks, i already have an account</Link>
        </Container>
    );
}

export default TestV1;
