import styled from 'styled-components'
import Test from '../components/Test'

export default function Home() {
const Container = styled.div`
background-color:#fff;
text-align:center;
padding:50px;
`
  return (
    <Container>
      <Test/>
    </Container>
  )
}
