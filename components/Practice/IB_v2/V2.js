import styled from "styled-components";
import styles from "./v2.css";


const TotalJobV1 = () => {
    const Container = styled.div``
    const Title = styled.h1``
    const Span = styled.p``
    const Form = styled.form``
    const Input = styled.input``
    const Button = styled.button``
    return (
        <Container className={styles.container}>
        <Title className={styles.title}>Enter your<br/> detailes & apply<br/> for jobs </Title>
        <Span className={styles.span}>Faster, From anywhere</Span>
        <Form>
        <Input className={styles.inputs} placeholder="Enter your full name"></Input>
        <Input className={styles.inputs} placeholder="Enter email adress"></Input>
        <Button className={styles.button}>Try TotalJobs.com Now</Button>
        </Form>
        </Container>
    );
}

export default TotalJobV1;