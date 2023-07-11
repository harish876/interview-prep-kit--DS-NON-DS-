//[1<-2*  3]

type Node<T> = {
    value: T,
    prev?: Node<T>
}

export default class Stack<T> {
    
    public length: number
    public top: Node<T>

    constructor(){
        
        this.top = undefined
        this.length = 0
    }

    push(value: T): void {
        const new_node = { value } as Node<T>
        if(this.length === 0){
            this.top = new_node
            this.length ++
            return
        }

        new_node.prev = this.top
        this.top = new_node
        this.length ++
    }

    pop(): T | undefined {
        if(!this.top){
            return undefined
        }

        this.length = Math.max(0,this.length-1)

        const prev_top = this.top
        this.top = this.top.prev
        prev_top.prev = undefined

        return prev_top?.value

    }

    peek(): T | undefined {
        return this.top?.value
    }
}

