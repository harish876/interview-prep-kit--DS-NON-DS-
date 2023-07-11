type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>
}

export default class DLL<T>{

    public length: number
    public head?: Node<T>
    public tail?: Node<T>

    constructor(){
        this.length = 0
        this.head = undefined
        this.tail = undefined
    }

    insertAt(position: number , value: T): void {

        if(position > this.length){
            throw new Error("No Wayy")
        }
        else if(position === this.length){
            this.append(value)
            return
        }

        else if(position === 0){
            this.prepend(value)
            return
        }

        let curr  = this.head
        this.length ++
        for(let i=0; curr && i < position ; i++){
            curr = curr.next
        }
        curr = curr as Node<T>
        const new_node = { value } as Node<T>
        const next_to_new_node = curr
        const prev_to_new_node = curr?.prev

        new_node.next = next_to_new_node
        next_to_new_node.prev = new_node 

        new_node.prev = prev_to_new_node
        prev_to_new_node.next = new_node

    }

    append(value: T): void{
        const new_node = { value } as Node<T>
        this.length ++

        if(!this.tail){
            this.head = this.tail = new_node
            return
        }
 
        this.tail.next = new_node
        new_node.prev = this.tail
        this.tail = new_node
    }

    prepend(value: T): void{
        
        const new_node = { value } as Node<T>
        this.length ++;
        if(!this.head){
            this.head = this.tail = new_node
            return
        }

        new_node.next = this.head
        this.head.prev = new_node
        this.head = new_node
    }

    peek_top(): void {

    }
    remove(value: T): T | undefined {
        let curr = this.head
        for(let i=0 ; curr && i< this.length ; ++i){
            if(curr.value === value){
                break
            }
            curr = curr.next
        }

        if(!curr)
            return undefined

        this.length --;
        if(this.length === 0){
            this.head = this.tail = undefined
            return undefined
        }

        const prev_node  = curr.prev

        if(prev_node){

        }

        const next_node = curr.next

    }

    get(value: T): T | undefined {

        return undefined
    }
}