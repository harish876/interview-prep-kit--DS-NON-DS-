type Node<T> = {
    value: T,
    next?:Node<T>,
    prev?:Node<T>
}

export default class LRU<K,V> {
    private length:number;
    private head?: Node<V>;
    private tail?: Node<V>;
    private capacity: number

    private lookup: Map<K,Node<V>>;
    private reverseLookup: Map<Node<V>,K>

    constructor(capacity = 10){
        this.length = 0
        this.head = undefined
        this.tail = undefined
        this.capacity = capacity
        this.lookup = new Map<K,Node<V>>()
        this.reverseLookup = new Map<Node<V>,K>()

    }
    private createNode(value: V){
        const node = { value } as Node<V>
        return node
    }

    update(key: K ,value: V){
        let node = this.lookup.get(key)
        if(!node){
            node = this.createNode(value)
            this.length++
            this.prepend(node)
            this.trimCache()

            this.lookup.set(key,node)
            this.reverseLookup.set(node,key)
            
        }else{
            this.detach(node)
            this.prepend(node)
            node.value = value 
        }
    }

    get(key: K){
        const node = this.lookup.get(key)
        if(!node){
            return undefined
        }
        this.detach(node)
        this.prepend(node)
        return node?.value
    }

    private detach(node: Node<V>){
        const prev_node: Node<V> | undefined = node.prev
        const next_node: Node<V> | undefined = node.next
        if(this.head === node){
            this.head = this.head.next
        }
        if(this.tail === node){
            this.tail = this.tail.prev
        }
        
        if(prev_node) prev_node.next = next_node
        if(next_node) next_node.prev = prev_node

        node.prev = undefined
        node.next = undefined 


    }
    private prepend(node: Node<V>){
        if(!this.head){
            this.head = this.tail = node
            return
        }
        node.next = this.head
        this.head.prev = node
        this.head = node
    }
    private trimCache(): void {
        if(this.length <= this.capacity){
            return
        }

        const tail = this.tail as Node<V>
        this.detach(tail)
        this.length --

        const key = this.reverseLookup.get(tail)
        this.lookup.delete(key)
        this.reverseLookup.delete(tail)
    }


}