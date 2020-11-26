import { useState, MouseEvent } from 'react'
import styled from 'styled-components'
import { Process } from '../Round-Robin/Round-Robin'
import theme from '../styles/theme'
import RoundRobin from '../Round-Robin/Round-Robin'
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

const roundRobins = new RoundRobin

const RoundRobins: React.FC = () => {
    const [process, setProcess] = useState<Process[]>([])
    const [count, setCount] = useState(0)
    const [quantum, setQuantum] = useState(0)
    const [interv, setInterv] = useState();

    function handleRegister(event: MouseEvent<HTMLButtonElement>){
        event?.preventDefault;
        let num = Math.floor(Math.random() * 10)
        while (num === 0){
            let num = Math.floor(Math.random() * 10)
        }
        
        roundRobins.addProcess('Processo ' + count, num) 
        setCount(count+1)  
        setProcess(roundRobins.row)      
    }

    async function update(){
        const firstProcess = process[0]
        await roundRobins.deleteProcess(0)
        await roundRobins.addProcess(firstProcess.name, firstProcess.duration)
        setProcess(roundRobins.row)
    }

    function run() {
        setQuantum(quantum + 1)

        if(quantum === 10){
            if(process.length > 0){
                update()
            }
            
            setQuantum(0)
        }
    }

    function handleStart(){
        setTimeout(run, 1000)                      
    }

    handleStart()

    return (
      <Container>
        <Title>Round-Robin</Title>
        <Paragraph>
            Cada processo recebe um quantum, no final do quantum, se o processo estiver executando, ele sofre uma
            preempção e a CPU é entregue ao próximo processo, o processo pausa seu tempo restante e vai para o fim da fila onde aguarda chegar sua vez novamente.
            Neste caso nosso quantum terá um valor determinado de 10s.
        </Paragraph>
           <Button onClick={(event) => handleRegister(event)}>Adicionar Processo</Button>
        <Title>Quantum: {quantum}</Title>
        <Paragraph>PILHA</Paragraph>
          <Pilha>
              {process?.map(item => (
                <Card key={item.id}>
                    <strong>{item.name}</strong>
                    <span>{item.duration}s</span>
                </Card>)
              )}       
          </Pilha>
      </Container>
    )
  }
  
  export default RoundRobins