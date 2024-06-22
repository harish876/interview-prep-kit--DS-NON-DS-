package tests

import (
	"fmt"
	"testing"

	"github.com/harish876/polyglot-dsa/bst"
)

func TestBst(t *testing.T) {
	root := bst.TreeNode{Val: 5}
	root.Insert(3)
	root.Insert(2)
	root.Insert(6)
	root.Insert(4)

	fmt.Println("Before Deletion")
	root.Preorder()

	root.Delete(5)

	fmt.Println("After Deletion")
	root.Preorder()
}
