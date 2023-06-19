import styled from "styled-components";
import styles from "./v3.css";
import CardImage from "./Card-image3";

const CommuteCard = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding: 20px;
    gap: 18.58px;
    width: 352px;
    background: #ffffff;
    border-radius: 18.5809px;
    flex: none;
    order: 1;
    flex-grow: 0;
  `;
  const Title = styled.h1`
    font-family: "Poppins";
    color: #3cbf0a;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  `;

  const Bold = styled.b`
    font-size: 18px;
    width: 75px;
    height: 17px;
  `;
  const Image = styled.div`
    background: #ffffff;
    width: 70%;
  `;
  const Content = styled.p`
    width: 312px;
    height: 56px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    /* or 117% */

    text-align: center;
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
    line-height: 23px;
    font-weight: 700;
    font-size: 11.7337px;
    color: white;
    border: none;
    border-radius: 28.6474px;
    cursor: pointer;
    padding: 0px 14.3237px;
    gap: 14.32px;
    width: 141.65px;
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

  const Btn = styled.button``


  return (
    <Container>
      <Title>
        Continue your search on <Bold>Toataljobs</Bold>
      </Title>
      <Image>
        <CardImage></CardImage>
      </Image>
      <Content>
        How Do You
        <br /> Commute To Work?
      </Content>
      <Row>
        <Col>
          <Button>walking is the best</Button>
          <Button>Driver A Car</Button>
        </Col>
        <Col>
          <Button>Take The Train</Button>
          <Btn className={styles.btnLg}>Ride A Bicycle Of Course</Btn>
        </Col>
      </Row>
      <Link href="/">No thanks i alredy have an account</Link>
    </Container>
  );
};

export default CommuteCard;
