
import quickSort from "../typescript/quicksort"

test("Quick Sort",()=>{
    const arr = [8,5,10,1,3]
    const expected = arr.sort()
    quickSort(arr)
    expect(arr).toEqual(expected)
})