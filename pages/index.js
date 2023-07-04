import styled from "styled-components";
import CardImage from "../components/Monster/IB_v1/Card-images";
import CardImag from "../components/Monster/IB_v2/Card-images";
import MonsterV1 from "../components/Monster/IB_v1/V1";
import MonsterV2 from "../components/Monster/IB_v2/V2";
import NaturalIntelegentV1 from "../components/Natural_Intelegent/IB_v1/v1";

export default function Home() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f5f5f5;
    text-align: center;
    padding: 50px;
  `;

  return (
    <>
      <Container>
        <NaturalIntelegentV1 />
      </Container>
    </>
  );
}
