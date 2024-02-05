package ds

type TrieNode struct {
	mp    map[byte]*TrieNode
	isEnd bool
}

type Trie struct {
	Root *TrieNode
}

func (t *Trie) Insert() {

}
