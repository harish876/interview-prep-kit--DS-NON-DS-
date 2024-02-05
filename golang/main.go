package main

import (
	"fmt"
	"golang-ds-practice/ds"
)

func main() {

	lru := &ds.LruCache{
		Capacity:      4,
		Length:        0,
		Lookup:        make(map[int]*ds.CacheNode),
		ReverseLookup: make(map[*ds.CacheNode]int),
	}
	fmt.Println("Instantiated a LRU Cache")
	lru.Update(1, 10)
	lru.Update(2, 20)
	lru.Update(3, 30)
	lru.Update(4, 40)
	lru.Update(5, 50)
	lru.Update(6, 60)
	lru.Update(6, 70)
	lru.DisplayList()

	fmt.Printf("\nValue is %d", lru.Get(6))
	// root := &ds.TreeNode{Val: 5}
	// root.Insert(3)
	// root.Insert(2)
	// root.Insert(6)
	// root.Insert(4)

	// fmt.Println("Before Deletion")
	// root.Preorder()

	// root.Delete(5)

	// fmt.Println("After Deletion")
	// root.Preorder()

	// maxHeap := &ds.MaxHeap{}
	// maxHeap.Push(5)
	// maxHeap.Push(3)
	// maxHeap.Push(9)
	// maxHeap.Push(4)
	// maxHeap.Push(6)

	// maxHeap.PrintContainer()

	// fmt.Printf("Peek Value %d\n", maxHeap.Peek())

	// maxHeap.Pop()
	// maxHeap.Pop()
	// maxHeap.Pop()
	// maxHeap.Pop()

	// fmt.Printf("Peek Value %d\n", maxHeap.Peek())

	// maxHeap.PrintContainer()

	// ll := &ds.LinkedList{
	// 	Length: 0,
	// }

	// ll.Insert(1)
	// ll.Insert(2)
	// ll.Insert(3)
	// ll.Insert(4)

	// ll.PrintList()

	// ll.RemoveFront()

	// ll.PrintList()

}

/*
	100


*/
