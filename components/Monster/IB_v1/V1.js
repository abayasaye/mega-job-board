import styled from "styled-components";
import styles from "./v1.css";
import {CardImage, LogoImage} from "./Card-images";



const MonsterV1 = () => {
    const Container = styled.div``
    const Title = styled.h1``
    const Logo = styled.a``
    const Img = styled.div``
    const Content = styled.p``
    const BtnRow = styled.div``
    const BtnCol = styled.div``
    const Button = styled.button``
    const Link = styled.a``
  return(
    <Container className={styles.cardContainer}>
        <Title className={styles.title}>Continue your search on <Logo href="/"  className={styles.logo}> <LogoImage></LogoImage> </Logo> </Title>
    <Img><CardImage></CardImage></Img>
    <Content className={styles.content}>Get Paid To<br/> Work From Home!</Content>
    <BtnRow className={styles.btnRow}>
        <BtnCol>
        <Button className={styles.buttons}>Search jobs</Button>
        <Button className={styles.buttons}>Career Advice</Button>  
        <Button className={styles.buttons}>Salary Calculator</Button>
        </BtnCol>
    </BtnRow>
    <Link className={styles.registerLink} href="/">No thanks i alredy have an account</Link>
    </Container>
  )

};

export default MonsterV1;
