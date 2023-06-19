import styled from "styled-components";
import styles from "./v3.css";
import CardImage from "./Card-image3";

const CommuteCard = () => {
  const Container = styled.div``;
  const Title = styled.h1``;
  const Bold = styled.b``;
  const Image = styled.div``;
  const Content = styled.p``;
  const Row = styled.div``;
  const Col = styled.div``;
  const Button = styled.button``;
  const Link = styled.a``;
  const Btn = styled.button``;

  return (
    <Container className={styles.cardContainer}>
      <Title className={styles.title}>
        Continue your search on <Bold className={styles.bold}>Toataljobs</Bold>
      </Title>
      <Image className={styles.cardImage}>
        <CardImage></CardImage>
      </Image>
      <Content className={styles.content}>
        How Do You
        <br /> Commute To Work?
      </Content>
      <Row className={styles.buttonsRow}>
        <Col className={styles.buttonsCol}>
          <Button className={styles.buttons}>walking is the best</Button>
          <Button className={styles.buttons}>Driver A Car</Button>
        </Col>
        <Col className={styles.buttonsCol}>
          <Button className={styles.buttons}>Take The Train</Button>
          <Btn className={styles.btnLg}>Ride A Bicycle Of Course</Btn>
        </Col>
      </Row>
      <Link className={styles.registerLink} href="/">
        No thanks i alredy have an account
      </Link>
    </Container>
  );
};

export default CommuteCard;
