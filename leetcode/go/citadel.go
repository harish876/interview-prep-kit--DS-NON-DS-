package lc

func max(a int, b int) int {
	if a > b {
		return a
	} else {
		return b
	}
}

func Q1(arr []int) int {

	n := len(arr)
	result := 0

	for i := 0; i < n; i++ {
		mp := make(map[int]int, 0)
		for j := i; j < n; j++ {
			mp[arr[j]]++

			count := 0
			for _, value := range mp {
				if value == mp[arr[j]] {
					count++
				}
			}
			if len(mp) == count {
				result = max(result, j-i+1)
			}

		}
		//clearing the map
		for k := range mp {
			delete(mp, k)
		}

	}
	return result
}
