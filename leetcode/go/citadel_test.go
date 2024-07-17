package lc

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestQ1(t *testing.T) {
	assert.Equal(t, 8, Q1([]int{1, 2, 1, 3, 4, 2, 4, 3, 3, 4}))
	assert.Equal(t, 3, Q1([]int{9, 9, 9}))
	assert.Equal(t, 6, Q1([]int{1, 1, 2, 2, 3, 3, 4}))
	assert.Equal(t, 9, Q1([]int{1, 2, 3, 1, 2, 3, 1, 2, 3}))
	assert.Equal(t, 4, Q1([]int{1, 2, 3, 4}))
}
