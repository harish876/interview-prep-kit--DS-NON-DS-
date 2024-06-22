package tests

import (
	"fmt"
	"testing"

	lrucache "github.com/harish876/polyglot-dsa/lruCache"
)

func TestLruCache(t *testing.T) {
	lru := &lrucache.LruCache{
		Capacity:      4,
		Length:        0,
		Lookup:        make(map[int]*lrucache.CacheNode),
		ReverseLookup: make(map[*lrucache.CacheNode]int),
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

	fmt.Printf("\nValue is %d\n", lru.Get(6))
}
