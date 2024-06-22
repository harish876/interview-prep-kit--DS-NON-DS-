package bst

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
	// Height int
}

func (tree *TreeNode) Insert(Val int) {
	if Val > tree.Val {
		if tree.Right == nil {
			tree.Right = &TreeNode{
				Val: Val,
			}
		} else {
			tree.Right.Insert(Val)
		}
	} else if Val < tree.Val {
		if tree.Left == nil {
			tree.Left = &TreeNode{
				Val: Val,
			}
		} else {
			tree.Left.Insert(Val)
		}
	}
}

func (tree *TreeNode) InorderSuccessor() *TreeNode {
	curr := tree
	for curr != nil && curr.Left != nil {
		curr = curr.Left
	}
	return curr
}

func (tree *TreeNode) Delete(val int) *TreeNode {
	if tree == nil {
		fmt.Println("Value to be deleted not found...")
		return nil
	} else {
		if tree.Val == val {
			if tree.Left == nil && tree.Right == nil {
				tree = nil
			} else if tree.Left == nil && tree.Right != nil {
				tree = tree.Right
			} else if tree.Right == nil && tree.Left != nil {
				tree = tree.Left
			} else {
				tmp := tree.Right.InorderSuccessor()
				tree.Val = tmp.Val
				tree.Right = tree.Right.Delete(tmp.Val)
			}
		} else if tree.Val > val {
			tree.Left = tree.Left.Delete(val)
		} else {
			tree.Right = tree.Right.Delete(val)
		}
	}
	return tree
}

func (tree *TreeNode) Search(val int) *TreeNode {

	if tree.Val == val {
		return tree
	} else {
		if val > tree.Val {
			tree.Right.Search(val)
		} else {
			tree.Left.Search(val)
		}
	}
	return nil
}

func (tree *TreeNode) Preorder() {
	if tree == nil {
		return
	}

	fmt.Println(tree.Val)
	tree.Left.Preorder()
	tree.Right.Preorder()
}

func Max(val1 int, val2 int) int {
	if val1 > val2 {
		return val1
	} else {
		return val2
	}
}
