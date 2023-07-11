import DLL from "../typescript/doublyLinkedList";

test("Test DLL",()=>{
    const dll = new DLL<number>()
    dll.append(1)
    dll.append(2)
    dll.prepend(0)
    //[0,1,4,2]
    dll.insertAt(2,4)

    console.log(dll)
})