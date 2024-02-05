import CQueue from "../typescript/circularQueue";

test("Cq",()=>{

    const cq = new CQueue<Number>(5)
    cq.enqueue(1)
    cq.enqueue(2)
    cq.enqueue(3)
    cq.enqueue(4)
    cq.enqueue(5)

    cq.deque()
    cq.deque()

    cq.enqueue(6)
    cq.enqueue(7)
    cq.deque()
    cq.deque()
    cq.deque()
    cq.deque()
    cq.deque()

    console.log(cq)
})