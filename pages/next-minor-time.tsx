import { useState, MouseEvent } from 'react'
import styled from 'styled-components'
import { Process } from '../Round-Robin/Round-Robin'
import theme from '../styles/theme'
import NextSmallTimes from '../Next-Minor-Time/next-minor-time'
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
    width: 300px;
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
    width: 300px;
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

const nextMinorTime = new NextSmallTimes

const NextMinorTime: React.FC = () => {
    const [process, setProcess] = useState<Process[]>([])
    const [count, setCount] = useState(0)

    function handleRegister(event: MouseEvent<HTMLButtonElement>){
        event?.preventDefault;
        let num = Math.floor(Math.random() * 10)
        while (num === 0){
            let num = Math.floor(Math.random() * 10)
        }

        if(process.length !== 0){
            let boolean
            process.map(item => {
                if (num < item.duration){
                    boolean = true
                }            
            })

            if(boolean){
                nextMinorTime.addProcessBeginArray('Processo ' + count, num)
            }else{
                nextMinorTime.addProcessEndArray('Processo ' + count, num)
            }
        }else{
            nextMinorTime.addProcessBeginArray('Processo ' + count, num)
        }    
        
        setCount(count+1)  
        setProcess(nextMinorTime.row)      
    }

    function run() {
        if(process.length > 1){
            process[0].duration = process[0].duration -1
        }        
    }

    return (
      <Container>
        <Title>Classes de Prioridade</Title>
        <Paragraph>
        Os processos recebem “tickets” para uso de vários recursos, inclusive CPU o escalonador sorteia um ticket ao acaso, o processo que possuir esse ticket ganha acesso ao recurso cada ticket vale uma certa quantidade de recurso, processos de mais importância podem receber tickets extras.
        </Paragraph>
           <Button onClick={(event) => handleRegister(event)}>Adicionar Processos</Button>
        <Paragraph>PILHA</Paragraph>
          <Pilha>
              {process?.map(item => (
                <Card key={item.id}>
                    <strong>{item.name}</strong>
                    <span>Tempo: {item.duration}s</span>
                </Card>)
              )}       
          </Pilha>
      </Container>
    )
  }
  
  export default NextMinorTime
