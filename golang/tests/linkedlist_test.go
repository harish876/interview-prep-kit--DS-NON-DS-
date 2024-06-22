package tests

import (
	"testing"

	linkedlist "github.com/harish876/polyglot-dsa/linkedList"
)

func TestLinkedList(t *testing.T) {
	ll := linkedlist.LinkedList{
		Length: 0,
	}

	ll.Insert(1)
	ll.Insert(2)
	ll.Insert(3)
	ll.Insert(4)

	ll.PrintList()

	ll.RemoveFront()

	ll.PrintList()
}
