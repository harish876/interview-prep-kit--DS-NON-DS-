type Node<T> = {
    value: T,
    next?: Node<T>
}
export default class Queue<T>{
    public head?: Node<T>
    public tail?: Node<T>
    public length: number

    constructor(){
        this.head = this.tail = undefined
        this.length = 0

    }

    enqueue(value: T) : void {
        const new_node = { value } as Node<T>
        if(!this.tail){
            this.tail = this.head = new_node
            return
        }
        else{

            this.tail.next = new_node
            this.tail = new_node 
        }
        this.length ++
    }

    deque() : T | undefined {
        if(!this.head){
            return undefined
        }
        this.length --;
        this.length = Math.max(0,this.length)
        
        const head = this.head
        this.head = this.head.next

        head.next = undefined

        if(this.length === 0 ){
            this.tail = undefined
        } 

        return head.value
    }

    peek(): T | undefined {
        return this.head?.value
    }

}