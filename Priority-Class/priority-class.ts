export interface Process {
    id: number
    name?: string
    duration?: number
}

export default class ClassPrioriry {    
    row = new Array<Process>()
    num = 0

    public addProcessBeginArray(name: string, duration: number){
        if(this.row.length === 7){
            alert('Pilha cheia!')
            return
        }

        this.num = this.num + 1
        var process: Process = {
            id : this.num,
            name,
            duration
        }

        this.row.unshift(process)
    }

    public addProcessEndArray(name: string, duration: number){
        if(this.row.length === 7){
            alert('Pilha cheia!')
            return
        }

        this.num = this.num + 1
        var process: Process = {
            id : this.num,
            name,
            duration
        }

        this.row.push(process)
    }

    public deleteProcess(index: number){
        this.row.splice(index, 1)
    }

    public printArray() {        
        console.log(this.row)
    }
}