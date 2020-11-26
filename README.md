# TRABALHO DE SISTEMAS OPERACIONAIS

Em Sistemas Operacionais o escalonador de processo é um processo que deve ser
executado quando da mudança de contexto (troca de processo), ao passo que ele
escolhe o processo que será executado pela CPU, sendo o escalonamento realizado
com o auxílio do hardware. São utilizados algoritmos de escalonamento para
determinar qual processo será executado em determinado momento e por quanto
tempo. Dada essa definição, vimos na disciplina algumas formas de como o
escalonador se comporta, ou seja, seu algoritmo. Alguns desses algoritmos, são:
 - Escalonamento Round Robin;
 - Escalonamento com Classes de Prioridade;
 - Escalonamento do Próximo Menor Tempo;
 - Escalonamento da Loteria;
 - Escalonamento do Compartilhamento Justo;
 - Escalonamento de Tempo Real.
O trabalho consiste na implementação de quatro desses problemas. Apesar de
parecer trabalhoso a implementação é simples, basta criar um vetor ou uma pilha/fila e
preencher utilizando a lógica de cada um desses algoritmos.

---

REQUISITOS PARA RODAR PROJETO:

NODE 12.18+
YARN ou NPM

### Para YARN
```
    yarn &&
    yarn dev
```
### Para NPM
```
    npm install &&
    npm run dev
```

