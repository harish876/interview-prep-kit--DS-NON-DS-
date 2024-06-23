package trie

type TrieInterface interface {
	Insert(string)
	Search(string) bool
	SearchPrefix(string) bool
}

type TrieNode struct {
	mp    map[byte]*TrieNode
	isEnd bool
}

func newTrieNode() *TrieNode {
	return &TrieNode{
		mp:    make(map[byte]*TrieNode),
		isEnd: false,
	}
}

type Trie struct {
	Root *TrieNode
}

func NewTrie() TrieInterface {
	return &Trie{
		Root: newTrieNode(),
	}
}

func (t *Trie) Insert(word string) {
	curr := t.Root
	for i := 0; i < len(word); i++ {
		if _, ok := curr.mp[word[i]]; !ok {
			curr.mp[word[i]] = newTrieNode()
		}
		curr = curr.mp[word[i]]
	}
	curr.isEnd = true
}

func (t *Trie) Search(word string) bool {
	curr := t.Root
	return searchHelper(word, 0, curr)
}

func searchHelper(word string, idx int, curr *TrieNode) bool {
	if idx >= len(word) {
		return true
	}
	if word[idx] == '.' {
		for _, val := range curr.mp {
			return searchHelper(word, idx+1, val)
		}
	} else {
		if _, ok := curr.mp[word[idx]]; !ok {
			return false
		} else {
			return searchHelper(word, idx+1, curr.mp[word[idx]])
		}
	}
	return false
}

func (t *Trie) SearchPrefix(word string) bool {
	curr := t.Root
	for i := 0; i < len(word); i++ {
		if _, ok := curr.mp[word[i]]; !ok {
			return false
		}
		curr = curr.mp[word[i]]
	}
	return true
}
