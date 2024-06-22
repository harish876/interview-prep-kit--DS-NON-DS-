
const edges = [
    [
        {from :0 , to: 1 , weight: 1},
        {from :0 , to: 2 , weight: 9},
    ],
    [
        {from: 1, to: 0 , weight: 1},
        {from: 1, to: 2 , weight: 8},
        {from: 1, to: 4 , weight: 7},
        {from: 1, to: 3 , weight: 2},
    ],
    [
        {from: 2, to: 0 , weight: 9},
        {from: 2, to: 1 , weight: 8},
        {from: 2, to: 3 , weight: 3},
    ],
    [
        {from: 3, to: 1 , weight: 2},
        {from: 3, to: 2 , weight: 3},
        {from: 3, to: 4 , weight: 4},
        {from: 3, to: 5 , weight: 6},
    ],
    [
        {from: 4, to: 1 , weight: 7},
        {from: 4, to: 3 , weight: 4},
        {from: 4, to: 5 , weight: 5},
    ],
    [
        {from: 5, to: 4 , weight: 5},
        {from: 5, to: 3 , weight: 6},
    ],

]

function Prims(edges){

    const visited = new Array(edges.length).fill(false)
    const mst = []

    let currIdx = 1
    visited[currIdx] = true 
    const allNodes = []

    do {
        let smallestEdgeDistance = Infinity
        let smallestEdge = null

        for(const edge of edges[currIdx]){
            allNodes.push(edge)
        }

        for(const edge of allNodes){ 
            if(edge.weight < smallestEdgeDistance && !visited[edge.to]){
                smallestEdgeDistance = edge.weight
                smallestEdge = edge
            }
        }

        if(!smallestEdge) break

        visited[smallestEdge.to] = true
        currIdx = smallestEdge.to
        mst.push(smallestEdge)

    } while(visited.includes(false) && edges.length > 0)

    return mst

}


console.log(Prims(edges))

