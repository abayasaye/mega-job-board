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
import TjV5 from "../components/Practice/IB_v5/V5";
import TjV6 from "../components/Practice/IB_v6/V6";
import Dashboard from "../components/Practice/IB_v7/V7";
import TotalJobV4 from "../components/TJ/IB_v4/V4";
import PopUp from "../components/Practice/IB_v8/V8";
import JobV9 from "../components/Practice/IB_v9/V9";
import BarkV1 from "../components/Bark/IB_v1/V1";
import JobReqV2 from "../components/Bark/IB_v1/IB_v2/V2";

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
      <Container>
        <TjV5 />
      </Container>
      <Container>
        <TjV6 />
      </Container>
      {/* <Container>
        <Dashboard />
      </Container> */}
      <Container>
        <TotalJobV4 />
      </Container>
      <Container>
        <PopUp />
      </Container>
      <Container>
        <JobV9 />
      </Container>
      <Container>
        <BarkV1 />
      </Container>
      <Container>
        <JobReqV2 />
      </Container>
    </>
  );
}
