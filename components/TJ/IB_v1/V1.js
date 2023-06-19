import styled from "styled-components";
import styles from './v1.css';
import cardImage from './card-image.svg';




const Test = () => {
  const Container = styled.div`

  `;
  const Title = styled.h1`
   
  `;

  const Bold = styled.b`
    font-size: 18px;
    width: 75px;
    height: 17px;
  `;
  const Image = styled.img`
    background: #ffffff;
    width: 70%;
  `;
  const Content = styled.p`
    font-family: "Poppins";
    width: 312px;
    height: 48px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    text-transform: capitalize;
  `;
  const Row = styled.div`
    display: flex;
    gap: 18.58px;
  `;

  const Col = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;
  const Button = styled.button`
    background: #3cbf0a;
    font-weight: 700;
    font-size: 11.7337px;
    color: white;
    border: none;
    border-radius: 28.6474px;
    cursor: pointer;
    padding: 0px 14.3237px;
    gap: 14.32px;
    width: 110.65px;
    height: 24px;
    text-transform: capitalize;
  `;
  const Link = styled.a`
    color: #3cbf0a;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    line-break: 2;
    text-decoration-line: underline;
  `;

  const Cashier = styled.a`
    text-decoration-line: underline;
  `;

  return (
    <>
      <Container className={styles.cardContainer}>
        <Title className={styles.title}>
          Continue your search on <Bold>Toataljobs</Bold>
        </Title>
        <Image src="phone.png" />
        <Content>
          Preferred Commuting<br />
          Distance For A <Cashier href="/">Cashier</Cashier> Job?
        </Content>
        <Row>
          <Col>
            <Button>20 Min Away</Button>
            <Button>2 Hours Away</Button>
          </Col>
          <Col>
            <Button>45 Min Away</Button>
            <Button>1 Hour Away</Button>
          </Col>
        </Row>
        <Link href="/">No thanks i alredy have an account</Link>
      </Container>
    </>
  );
};

export default Test;
