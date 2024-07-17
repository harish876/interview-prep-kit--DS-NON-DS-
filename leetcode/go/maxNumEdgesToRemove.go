package lc

import "sort"

type IUnionFind interface {
	Find(child int) int
	Union(p1 int, p2 int)
}

type UnionFind struct {
	N      int
	Parent []int
}

func NewUnionFind(n int) UnionFind {
	var parents []int
	for i := 0; i < n; i++ {
		parents = append(parents, i)
	}
	return UnionFind{
		N:      n,
		Parent: parents,
	}
}

func (u UnionFind) Union(p1, p2 int) {
	parent := u.Find(p1)
	child := u.Find(p2)

	u.Parent[child] = parent
}

// wihtout path compression
func (u UnionFind) Find(child int) int {
	if u.Parent[child] == child {
		return child
	}
	return u.Find(u.Parent[child])

}

func helper(n int, edges TwoDArray, typ int) (int, bool) {
	uf := NewUnionFind(n)
	count := 0
	visitedSet := make(map[int]bool)
	for _, edge := range edges {

		if edge[0] != 3 && edge[0] != typ {
			continue
		}
		if edgeExists(visitedSet, edge[1]-1, edge[2]-1) {
			count++
		} else {
			uf.Union(edge[1]-1, edge[2]-1)
			visitedSet[edge[1]-1] = true
			visitedSet[edge[2]-1] = true
		}
	}
	return count, len(visitedSet) == n
}

func maxNumEdgesToRemove(n int, edges [][]int) int {
	newEdges := TwoDArray(edges)
	sort.Sort(newEdges)

	c1, reachable1 := helper(n, newEdges, 1)
	if !reachable1 {
		return -1
	}
	c2, reachable2 := helper(n, newEdges, 2)
	if !reachable2 {
		return -1
	}
	return c1 + c2

}

func edgeExists(visited map[int]bool, from, to int) bool {
	_, fromExists := visited[from]
	_, toExists := visited[to]
	return fromExists && toExists

}

type TwoDArray [][]int

// Implement the sort.Interface for TwoDArray
func (arr TwoDArray) Len() int {
	return len(arr)
}

func (arr TwoDArray) Swap(i, j int) {
	arr[i], arr[j] = arr[j], arr[i]
}

func (arr TwoDArray) Less(i, j int) bool {
	return arr[i][0] > arr[j][0]
}
