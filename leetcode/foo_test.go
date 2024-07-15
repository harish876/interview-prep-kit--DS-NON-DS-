package lc

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestUnionFind(t *testing.T) {
	uf := NewUnionFind(4)

	fmt.Println("Parent of 2", uf.Find(2))
	uf.Union(1, 2)
	fmt.Println("Parent of 1", uf.Find(1))
	fmt.Println("Parent of 2", uf.Find(2))
	uf.Union(2, 3)
	fmt.Println("Parent of 1", uf.Find(1))
	fmt.Println("Parent of 2", uf.Find(2))
	fmt.Println("Parent of 3", uf.Find(3))
	fmt.Println()
}

func TestMaxNodesToBeRemoved(t *testing.T) {
	res := maxNumEdgesToRemove(4, TwoDArray{{3, 1, 2}, {3, 2, 3}, {1, 1, 3}, {1, 2, 4}, {1, 1, 2}, {2, 3, 4}})
	assert.Equal(t, res, 2)
	fmt.Println("Edges to be removed", res)
}

func TestMaxNodesToBeRemovedV1(t *testing.T) {
	res := maxNumEdgesToRemove(4, TwoDArray{{3, 1, 2}, {3, 2, 3}, {1, 1, 4}, {2, 1, 4}})
	assert.Equal(t, res, 0)
	fmt.Println("Edges to be removed", res)
}
func TestMaxNodesToBeRemovedV2(t *testing.T) {
	res := maxNumEdgesToRemove(4, TwoDArray{{3, 2, 3}, {1, 1, 2}, {2, 3, 4}})
	assert.Equal(t, res, -1)
	fmt.Println("Edges to be removed", res)
}
func TestMaxNodesToBeRemovedV3(t *testing.T) {
	res := maxNumEdgesToRemove(4, TwoDArray{{3, 1, 2}, {3, 3, 4}, {1, 1, 3}, {2, 2, 4}})
	assert.Equal(t, res, 0)
	fmt.Println("Edges to be removed", res)
}
