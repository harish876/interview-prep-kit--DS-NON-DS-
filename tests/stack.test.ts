import Stack from "../typescript/stack"

test("Queue",()=>{
    const arr = [1,2,3,4,5]

    const s = new Stack<number>()
    s.push(1)
    s.push(2)
    s.push(3)
    s.pop();
    s.pop();
    s.pop();
    s.pop();
    console.log(s)
})