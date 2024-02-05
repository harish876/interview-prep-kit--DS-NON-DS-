package ds

import "fmt"

type MaxHeap struct {
	container []int
}

func (h *MaxHeap) Push(val int) {

	h.container = append(h.container, val)
	h.heapifyUp(len(h.container) - 1)
}

func (h *MaxHeap) Pop() {
	if len(h.container) == 0 {
		fmt.Println("Empty...")
		return
	}

	h.swap(0, len(h.container)-1)
	h.container = h.container[:len(h.container)-1]
	h.heapifyDown(0)
}

func (h *MaxHeap) Peek() int {
	if len(h.container) == 0 {
		return -1
	}
	return h.container[0]
}

func (h *MaxHeap) getParentIdx(idx int) int {

	return (idx - 1) / 2
}

func (h *MaxHeap) getLeftChildIdx(idx int) int {

	return 2*idx + 1
}

func (h *MaxHeap) getRightChildIdx(idx int) int {

	return 2*idx + 2
}

func (h *MaxHeap) withinBounds(idx int) bool {
	return idx >= 0 && idx < len(h.container)
}
func (h *MaxHeap) heapifyUp(idx int) {

	if idx == 0 {
		return
	}

	parentIdx := h.getParentIdx(idx)
	if !h.withinBounds(parentIdx) {
		return
	}
	parentVal := h.container[parentIdx]
	currVal := h.container[idx]
	if currVal > parentVal {
		h.swap(parentIdx, idx)
		h.heapifyUp(parentIdx)
	}

}

func (h *MaxHeap) swap(idx1 int, idx2 int) {
	h.container[idx1], h.container[idx2] = h.container[idx2], h.container[idx1]
}

func (h *MaxHeap) PrintContainer() {
	for _, val := range h.container {
		fmt.Printf("\nValue is %d", val)
	}
	fmt.Println()
}

func (h *MaxHeap) heapifyDown(idx int) {

	if !h.withinBounds(idx) {
		return
	}
	lIdx := h.getLeftChildIdx(idx)
	rIdx := h.getRightChildIdx(idx)

	if h.withinBounds(lIdx) && h.withinBounds(rIdx) {

		if h.container[lIdx] > h.container[rIdx] && h.container[lIdx] > h.container[idx] {
			h.swap(lIdx, idx)
			h.heapifyDown(lIdx)
		} else if h.container[rIdx] > h.container[lIdx] && h.container[rIdx] > h.container[idx] {
			h.swap(rIdx, idx)
			h.heapifyDown(rIdx)
		}
	} else if h.withinBounds(lIdx) {

		if h.container[lIdx] > h.container[idx] {
			h.swap(lIdx, idx)
			h.heapifyDown(lIdx)
		}

	} else if h.withinBounds(rIdx) {
		if h.container[rIdx] > h.container[idx] {
			h.swap(rIdx, idx)
			h.heapifyDown(rIdx)
		}
	}

}
