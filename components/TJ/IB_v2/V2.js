import styled from "styled-components";
import CardImage from "./Card-image2";
import styles from "./v2.css";

const TypeCard = () => {
  const Container = styled.div``;
  const Title = styled.h1`
  `;

  const Bold = styled.b`

  `;
  const Image = styled.div`

  `;
  const Content = styled.p`

  `;
  const Row = styled.div`;
  `;

  const Col = styled.div`

  `;
  const Button = styled.button`

  `;
  const Link = styled.a`

  `;

  const Cashier = styled.a`
;
  `;

  return (

      <Container className={styles.cardContainer}>
        <Title className={styles.title}>
          Continue your search on <Bold className={styles.bold}>Toataljobs</Bold>
        </Title>
        <Image className={styles.cardImage}>
            <CardImage></CardImage>
        </Image>
        <Content className={styles.content}>
          What job type suits
          <br /> you the must?
        </Content>
        <Row className={styles.buttonsRow}>
          <Col className={styles.buttonsCol}>
            <Button className={styles.buttons}>Temporary</Button>
            <Button className={styles.buttons}>Parmanent</Button>
          </Col>
          <Col className={styles.buttonsCol}>
            <Button className={styles.buttons}>Part Time</Button>
            <Button className={styles.buttons}>Contract</Button>
          </Col>
        </Row>
        <Link className={styles.registerLink} href="/">No thanks i alredy have an account</Link>
      </Container>
  );
};
export default TypeCard;
