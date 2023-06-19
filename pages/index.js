import styled from 'styled-components'
import Test from '../components/Test'
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
flex: 1;
display: flex;
justify-content: center;
align-items: center;
`
  return (
    <Container>
      <Row>
         <Test/>
      </Row>
      <Row>
      <TypeCard/>
      </Row>
     
    </Container>
  )
}
