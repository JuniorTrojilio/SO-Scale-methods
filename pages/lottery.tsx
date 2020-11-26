import { useState, MouseEvent } from 'react'
import styled from 'styled-components'
import { Process } from '../Round-Robin/Round-Robin'
import theme from '../styles/theme'
import Lottery from '../Lottery/Lottery'
import { shade } from 'polished'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => theme.colors.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Pilha = styled.div`
    background-color: #f1f1f1;
    width: 350px;
    border-radius: 8px;
`

const Paragraph = styled.p`
  margin-top: 15px;
  margin: 10px;
  width: 300px;
  text-align: center;
`

const Title = styled.h1`
  color: ${props => theme.colors.text};
  font-size: 54px;
  margin: 30px;
  text-align: center;
`
const Card = styled.div`
    width: 350px;
    height: 65px;
    border-radius: 8px;
    margin: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${props => theme.colors.primary};
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Button = styled.button`
  width: 250px;
  height: 30px;
  margin: 5px;
  border-radius: 4px;
  background-color: ${props => theme.colors.primary};
  color: ${props => theme.colors.text};
  font-size: 20px;
  border: none;

  &:hover{
    transition: all 0.2s ease-in-out;
    background-color: ${props => shade(0.9, theme.colors.primary)};
  }
`

const Input = styled.input`
    border-radius: 4px;
    height: 30px;
    width: 250px;
    border: none;
    margin: 5px;
    text-align: center;
`

const lottery = new Lottery

const LotteryPage: React.FC = () => {
    const [process, setProcess] = useState<Process[]>([])
    const [count, setCount] = useState(0)
    const [resources, setResources] = useState(100)

    function handleRegister(event: MouseEvent<HTMLButtonElement>){
        event?.preventDefault;
        let num = Math.floor(Math.random() * 10)
        while (num === 0){
            let num = Math.floor(Math.random() * 10)
        }
        
        if((resources - num) > 0){
          setResources(resources - num)
          lottery.addProcessBeginArray('Processo ' + count, num)
        }else{
          lottery.addProcessBeginArray('Processo ' + count, resources)
          setResources(0)
        }
        
        
        setCount(count+1)  
        setProcess(lottery.row)      
    }

    function run() {
        if(process.length > 1){
            process[0].duration = process[0].duration -1
        }        
    }

    return (
      <Container>
        <Title>Lottery</Title>
        <Paragraph>
        Os processos recebem “tickets” para uso de vários recursos, inclusive CPU
        o escalonador sorteia um ticket ao acaso, o processo que possuir esse ticket ganha acesso ao recurso
        cada ticket vale uma certa quantidade de recurso, processos de mais importância podem receber tickets extras
        </Paragraph>
           <Button onClick={(event) => handleRegister(event)}>Adicionar Processos</Button>
        <Paragraph>PILHA</Paragraph>
        <Paragraph>RECURSOS DISPONÍVEIS: {resources}%</Paragraph>
        <Paragraph>TICKET SORTEADO: {Math.floor(Math.random() * 10)}</Paragraph>
          <Pilha>
              {process?.map(item => (
                <Card key={item.id}>
                    <strong>TICKET Nº:{item.id}</strong>
                    <strong>{item.name}</strong>
                    <span>Recursos: {item.duration}%</span>
                </Card>)
              )}       
          </Pilha>
      </Container>
    )
  }
  
  export default LotteryPage