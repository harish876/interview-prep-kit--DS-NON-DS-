package tests

import (
	"fmt"
	"testing"

	maxheap "github.com/harish876/polyglot-dsa/maxHeap"
)

func TestMaxHeap(t *testing.T) {
	maxHeap := &maxheap.MaxHeap{}
	maxHeap.Push(5)
	maxHeap.Push(3)
	maxHeap.Push(9)
	maxHeap.Push(4)
	maxHeap.Push(6)

	maxHeap.PrintContainer()

	fmt.Printf("Peek Value %d\n", maxHeap.Peek())

	maxHeap.Pop()
	maxHeap.Pop()
	maxHeap.Pop()
	maxHeap.Pop()

	fmt.Printf("Peek Value %d\n", maxHeap.Peek())

	maxHeap.PrintContainer()
}
