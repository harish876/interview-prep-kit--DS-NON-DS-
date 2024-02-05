package ds

import "fmt"

type CacheNode struct {
	val  int
	next *CacheNode
	prev *CacheNode
}

type LruCache struct {
	Head          *CacheNode
	Tail          *CacheNode
	Capacity      int
	Length        int
	Lookup        map[int]*CacheNode
	ReverseLookup map[*CacheNode]int
}

type Lru interface {
	Update()
	Get() int
}

func (l *LruCache) Update(key int, val int) {
	if cacheNode, found := l.Lookup[key]; found {
		l.Detach(cacheNode)
		cacheNode.val = val
		l.Prepend(cacheNode)
	} else {
		node := CreateNode(val)
		l.Prepend(node)
		l.Length++
		l.ArrangeCache()

		l.Lookup[key] = l.Head
		l.ReverseLookup[l.Head] = key
	}
}

func CreateNode(val int) *CacheNode {
	return &CacheNode{
		val: val,
	}
}

func (l *LruCache) Detach(node *CacheNode) {

	if l.Head == node {
		l.Head = l.Head.next
	}
	if l.Tail == node {
		l.Tail = l.Tail.prev
	}

	if node.prev != nil && node.next != nil {
		node.next.prev = node.prev
		node.prev.next = node.next
	}

	node.next = nil
	node.prev = nil
}

func (l *LruCache) Prepend(node *CacheNode) {
	if l.Head == nil {
		l.Head = node
		l.Tail = l.Head
		return
	}
	node.next = l.Head
	l.Head.prev = node
	l.Head = node

}

func (l *LruCache) ArrangeCache() {
	if l.Length <= l.Capacity {
		return
	}
	tmp := l.Tail
	l.Detach(tmp)
	tailKey := l.ReverseLookup[tmp]
	delete(l.Lookup, tailKey)
	delete(l.ReverseLookup, tmp)
	l.Length--

}

func (l *LruCache) Get(key int) int {
	if node, found := l.Lookup[key]; found {
		return node.val
	} else {
		return -1
	}
}
func (l *LruCache) DisplayList() {
	curr := l.Head
	for curr != l.Tail.next {
		fmt.Println(curr.val)
		curr = curr.next
	}
}
