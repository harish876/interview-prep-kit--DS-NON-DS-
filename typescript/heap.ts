

export default class MinHeap {

    public store: number[];
    private length: number;

    constructor(){
        this.store = []
        this.length = 0
    }

    insert(value: number){
        this.store.push(value)
        this.length ++
        this.heapifyUp(this.store.length-1)
    }

    delete(): number | undefined{
        if(this.length <= 0){
            return undefined
        }
        const result = this.store[0] 
        this.swap(0,this.length-1)
        this.store.pop()
        this.length --;
        this.heapifyDown(0);

        return result
    }

    peek(): number | undefined{
        return this.store[0]
    }

    private parent(idx: number){
        return Math.floor((idx-1)/2)
    }

    private leftChild(idx: number){
        return 2*idx + 1
    }

    private rightChild(idx: number){
        return 2*idx + 2
    }

    private swap(idx1:number,idx2:number): void{
        const tmp = this.store[idx1]
        this.store[idx1] = this.store[idx2]
        this.store[idx2] = tmp
    }

    private heapifyUp(curr_idx: number): void{
        if(curr_idx === 0){
            return
        }

        const parent_idx = this.parent(curr_idx)

        if(this.store[parent_idx] > this.store[curr_idx]){
            this.swap(parent_idx,curr_idx)
            this.heapifyUp(parent_idx);
        }

    }

    private heapifyDown(idx: number){
        if(this.length === 0){
            return
        }
        const l_idx = this.leftChild(idx)
        const r_idx = this.rightChild(idx)
        if(idx >= this.length || l_idx >= this.length){
            return
        }

        const m_idx = this.min(l_idx,r_idx)
        
        if(this.store[idx] > this.store[m_idx]){
            this.swap(m_idx,idx)
        }

        this.heapifyDown(m_idx)

    }

    private min(idx_1: number,idx_2: number): number{

        return this.store[idx_1] > this.store[idx_2] ? idx_2 : idx_1
    }

}