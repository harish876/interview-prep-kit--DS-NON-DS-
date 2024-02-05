export default class MaxHeap {

    container: Array<number>

    constructor(){
        this.container = []
    }

    private getParent(idx: number){
        return Math.max(0,Math.floor((idx-1)/2))
    }

    private swap(idx1:number,idx2:number):void {
        const tmp = this.container[idx1]
        this.container[idx1] = this.container[idx2]
        this.container[idx2] = tmp
    }

    private heapifyUp(idx: number): void{
        if(this.container.length === 0 || this.container.length === 1){
            return
        }
        const pIdx = this.getParent(idx) 
        const p = this.container[pIdx] 
        const c =this.container[idx]
        if(c > p) {
            this.swap(idx,pIdx)
            this.heapifyUp(pIdx)
        }

    }
    private heapifyDown(idx:number): void{
        if(idx >= this.container.length - 1){
            return
        }
        const lcIdx = 2*idx + 1
        const rcIdx = 2*idx + 2
        let mcIdx = 0
        if(this.container[lcIdx] && this.container[rcIdx]){
            mcIdx = this.container[lcIdx] > this.container[rcIdx] ? lcIdx : rcIdx
        }
        else if(this.container[lcIdx] || this.container[rcIdx]){
            mcIdx = this.container[lcIdx] ? lcIdx : rcIdx
        }
        else{
            return
        }

        if(this.container[mcIdx] > this.container[idx]) {
            this.swap(mcIdx,idx)
        }
        this.heapifyDown(mcIdx)


    }

    push(value: number): void{
        this.container.push(value)
        this.heapifyUp(this.container.length-1)
    }

    pop(): Number | undefined{
        if(this.container.length === 0){
            return undefined
        }
        const val = this.container[0]
        this.swap(this.container.length-1,0)
        this.container.pop()
        this.heapifyDown(0)
        return val
    }

    peek(): Number | undefined {
        return this.container[0]
    }


}
