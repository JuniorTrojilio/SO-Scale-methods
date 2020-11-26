import RoundRobin from '../Round-Robin/Round-Robin'
import styled from 'styled-components'
import theme from '../styles/theme'
import { shade } from 'polished'
import Router from 'next/router'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${props => theme.colors.background};
`

const Button = styled.button`
  width: 250px;
  height: 65px;
  margin: 5px;
  border-radius: 8px;
  background-color: ${props => theme.colors.primary};
  color: ${props => theme.colors.text};
  font-size: 20px;
  border: none;

  &:hover{
    transition: all 0.2s ease-in-out;
    background-color: ${props => shade(0.9, theme.colors.primary)};
  }
`

const Title = styled.h1`
  color: ${props => theme.colors.text};
  font-size: 54px;
  margin: 30px;
  text-align: center;
  width: 300px;
`

const Paragraph = styled.p`
  margin-top: 15px;
`

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Trabalho de Sistemas Operacionais</Title>
      <Button onClick={() => {Router.push('/round-robins')}}>Round Robin</Button>
      <Button onClick={() => {Router.push('/priority-class')}}>Classes de Prioridade</Button>
      <Button onClick={() => {Router.push('/next-minor-time')}}>Próximo menor tempo</Button>
      <Button onClick={() => {Router.push('/lottery')}}>Loteria</Button>

      <Paragraph><b>NOME:</b> OSMAR TROJILIO JUNIOR <b>RA:</b>2960 </Paragraph>
      <Paragraph><b>NOME:</b> MARCO ANTONIO JANUNZZI <b>RA:</b>3434 </Paragraph>
    </Container>
  )
}

export default Home