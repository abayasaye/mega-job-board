import styled from "styled-components";
import TJ_IB_v1 from "../components/TJ/IB_v1/v1";
import TJ_IB_v2 from "../components/TJ/IB_v2/v2";
import TJ_IB_v3 from "../components/TJ/IB_v3/V3";

export default function Home() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    background-color: #f5f5f5;
    text-align: center;
    padding: 50px;
  `;

  return (
    <Container>
      <TJ_IB_v1 />
      <TJ_IB_v2 />
      <TJ_IB_v3/>
    </Container>
  );
}
