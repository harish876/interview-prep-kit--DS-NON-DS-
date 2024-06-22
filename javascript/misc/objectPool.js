class ObjectPool {
    constructor(objectConstructor,objectReseter,initialSize=500){
        this.objectConstructor = objectConstructor
        this.objectReseter = objectReseter
        this.pool = new Array(initialSize).fill(this.addObjectToPool())
    }

    addObjectToPool(){
        const newObj = {
            alive: false,
            data: this.objectConstructor()
        }
        return newObj
    }

    allocate(object){
        object.alive = true
        return obj
    }

    getNew(){
        for(let i=0;i<this.pool.length;i++){
            if(pool[i].alive === false){
                return this.allocate(pool[i])
            }
        }
        this.pool.push(addObjectToPool())
    }

    release(object){
        object.alive = false
    }
}

console.table([{
    "name":"foo",
    "value":"bar"
}],["name","value"])