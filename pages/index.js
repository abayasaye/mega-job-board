import styled from "styled-components";
import CardImage from "../components/Monster/IB_v1/Card-images";
import CardImag from "../components/Monster/IB_v2/Card-images";
import MonsterV1 from "../components/Monster/IB_v1/V1";
import MonsterV2 from "../components/Monster/IB_v2/V2";
import NaturalIntelegentV1 from "../components/Natural_Intelegent/IB_v1/v1";
import TestV1 from "../components/Practice/IB_v1/V1";
import TotalJobV1 from "../components/Practice/IB_v2/V2";
import TotalJobV2 from "../components/Practice/IB_v3/V3";
import TotaljobV4 from "../components/Practice/IB_v4/V4";

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
        <TestV1 />
      </Container>
      <Container>
        <TotalJobV1 />
      </Container>
      <Container>
        <TotalJobV2 />
      </Container>
      <Container>
        <TotaljobV4 />
      </Container>
    </>
  );
}
