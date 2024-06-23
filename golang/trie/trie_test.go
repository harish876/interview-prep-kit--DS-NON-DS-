package trie

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestTrie(t *testing.T) {
	wordDictionary := NewTrie()
	wordDictionary.Insert("bad")
	wordDictionary.Insert("dad")
	wordDictionary.Insert("mad")

	assert.Equal(t, wordDictionary.Search(".ad"), true) // return True
	assert.Equal(t, wordDictionary.Search("b.."), true) // return True
}
