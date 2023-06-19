import styled from 'styled-components'
import Test from '../components/Test'
import TJ_IB_v1 from '../components/TJ/IB_v1/V1'
import TypeCard from '../components/TypeCard'

export default function Home() {
const Container = styled.div`
display: flex;
  flex-direction: column;
background-color:#F5F5F5;
text-align:center;
padding:50px;
`

const Row = styled.div`

`
  return (
    <Container>
      <TJ_IB_v1/>
    </Container>
  )
}
