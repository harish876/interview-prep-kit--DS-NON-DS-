package tests

import (
	"testing"

	"github.com/harish876/polyglot-dsa/trie"
	"github.com/stretchr/testify/assert"
)

func TestTrieSearch(t *testing.T) {
	trie := trie.NewTrie()
	trie.Insert("foo")
	trie.Insert("bar")
	trie.Insert("baz")

	assert.Equal(t, trie.Search("bar"), true)
	assert.Equal(t, trie.SearchPrefix("bi"), false)
	assert.Equal(t, trie.SearchPrefix("ba"), true)
}
