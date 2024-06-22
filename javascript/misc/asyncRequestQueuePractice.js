class AsyncRequestQueue {

  constructor(capacity=3){
    this.capacity = capacity
    this.currentTasks = 0
    this.queue = []
  }

  enqueue(promiseFactory){
    const task = async() => {
      try{
        this.currentTasks++
        await promiseFactory()
      }catch(error){
        console.log(error)
      }finally {
        this.currentTasks-- 
        this.execute()
      }
    }

    if(this.currentTasks < this.capacity){
      task()
    }
    else {
      this.queue.push(task)
    }
  }

  execute(){
    if(this.queue.length == 0 || this.currentTasks >= this.capacity){
      return 
    }
    const nextTask = this.queue.shift()
    nextTask()
  }

}


function promiseFactory(ms,message){
  return async() => {
    console.log(`Waiting for ${ms/1000}s`)
    await new Promise(resolve => setTimeout(resolve,ms))
    console.log(`Message ${message}`)
  }
}
async function start(){
  const fn1 = promiseFactory(1000,"Waddup Dawg 1")
  const fn2 = promiseFactory(2000,"Waddup Dawg 2")
  const fn3 = promiseFactory(3000,"Waddup Dawg 3")
  const fn4 = promiseFactory(4000,"Waddup Dawg 4")
  const fn5 = promiseFactory(5000,"Waddup Dawg 5")

  const q = new AsyncRequestQueue(3)
  q.enqueue(fn1)
  q.enqueue(fn2)
  q.enqueue(fn3)
  q.enqueue(fn4)
  q.enqueue(fn5)
}

start()