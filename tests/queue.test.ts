import Queue from "../typescript/queue"

test("Queue",()=>{
    const arr = [1,2,3,4,5]

    const q = new Queue<number>()
    q.enqueue(arr[0])
    q.enqueue(arr[1])

    q.deque()
    q.deque()
    q.deque()
    
    console.log(q)
})