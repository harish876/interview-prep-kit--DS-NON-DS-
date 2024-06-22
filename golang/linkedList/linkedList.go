package linkedlist

import "fmt"

type Node struct {
	val  int
	next *Node
}

type LinkedList struct {
	head   *Node
	tail   *Node
	Length int
}

func (l *LinkedList) Insert(val int) {
	nnode := &Node{
		val: val,
	}

	if l.Length == 0 {
		l.head = nnode
		l.tail = nnode
	} else {
		l.tail.next = nnode
		l.tail = nnode
	}
	l.Length++
}

func (l *LinkedList) RemoveFront() {
	if l.Length == 0 {
		fmt.Println("Cannot Remove...")
		return
	}
	if l.head.next == nil {
		l.head = nil
	} else {
		l.head = l.head.next
	}
	l.Length--
}

func (l *LinkedList) PrintList() {
	curr := l.head
	for i := 0; i < l.Length; i++ {
		fmt.Println(curr.val)
		curr = curr.next
	}
}
