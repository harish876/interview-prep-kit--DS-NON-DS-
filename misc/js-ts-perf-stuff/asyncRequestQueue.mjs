/* Queue which can hold 3 promises at once */
import fetch from "node-fetch"
class AsyncRequestQueue {
    
    constructor(capacity=3){
        this.queue = []
        this.capacity = capacity
        this.current = 0
    }

    enqueue(promiseFactory) {
        const task = async() => {
            this.current ++
            try{
                await promiseFactory()
            }catch(error){
                console.log(error)
            }finally{
                this.current --
                this.execute()
            }
        }

        if(this.current < this.capacity){
            task()
        } else {
            this.queue.push(task)
        }

    }

    deque() {
        return this.queue.shift()
    }

    execute() {
        if(this.queue.length === 0 || this.current >= this.capacity){
            return
        }
        const nextTask = this.deque()
        nextTask()
    }
}

function promiseFactory(idx){
    return async() => {
        try{
            const apiUrl = `https://jsonplaceholder.typicode.com/todos/${idx}`
            console.log(`Running Task for idx ${idx}`)
            const response = await fetch(apiUrl)
            if (!response.ok) {
                throw new Error('Failed to fetch data from the dummy API.');
              }
              const data = await response.json();
              console.log(`Id: ${data.id} Title: ${data.title}`)
              console.log(`Finished Task for index ${idx}`)
        }catch(error){
            console.log(error)
        }
    }
}
function test(){
    const queue = new AsyncRequestQueue(3)
    queue.enqueue(promiseFactory(1))
    queue.enqueue(promiseFactory(2))
    queue.enqueue(promiseFactory(3))
    queue.enqueue(promiseFactory(4))
    queue.enqueue(promiseFactory(5))
    queue.enqueue(promiseFactory(6))

}

test()