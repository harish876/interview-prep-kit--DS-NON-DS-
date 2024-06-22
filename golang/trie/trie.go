package trie

type TrieNode struct {
	mp    map[byte]*TrieNode
	isEnd bool
}

type Trie struct {
	Root *TrieNode
}

// todo
func (t *Trie) Insert() {

}
