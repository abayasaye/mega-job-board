import styled from "styled-components";
import styles from "./v1.css";



const NaturalIntelegentV1 = ()=>{
    const Container = styled.div``
    const Span = styled.span``
    const Title = styled.h1``
    const Content = styled.p``
    const Link = styled.button``

    return(
    <Container className={styles.cardContainer}>
        <Span className={styles.AdSpan}>Ad</Span>
        <Title className={styles.title}>Save Money On Your Mobile Plan Today</Title>
        <Content className={styles.content}>Discover The Best Mobile plans Of 2023. Compare Our Top Picks For April</Content>
    <Link className={styles.link}>Compare & Find Top Mobile Plans</Link>
    </Container>
    )
}
export default NaturalIntelegentV1;