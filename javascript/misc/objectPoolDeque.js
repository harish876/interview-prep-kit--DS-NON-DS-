class PoolObject {
    constructor(data){
        this.data = data
        this.free = true
        this.prev = null
        this.next = null
    }
}

class Pool {
    constructor(objectConstructor,objectReseter,initialSize=500){
        this.objectConstructor = objectConstructor
        this.objectReseter = objectReseter
        this.head = null
        this.tail = null
        for(let i=0 ; i< initialSize ;i++){
            this.addObjectToPool(newPoolObject())
        }
    }

    addObjectToPool(obj){
        if(!this.head){
            this.head = this.tail = obj
        } else {
            link(obj)
        }

    }
    link(obj){
        obj.next = this.tail
        this.tail.prev = obj
        this.tail = obj

    }
    get(){
        if(this.head){
            const freeObj = this.head
            freeObj.free = false
            this.head = freeObj.next 
            freeObj.next = null
            freeObj.prev = null
            return freeObj
        }
    }
    release(obj){

    }
    newPoolObject(){
        return new PoolObject(this.objectConstructor())
    }
    releaseAll(){

    }
}