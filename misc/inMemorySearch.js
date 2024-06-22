/** Simple frontned challenge for learnersBucket */
class InMemorySearch{
    constructor(){
        this.map = new Map()
    }

    addDocuments(namespace,...documents){
        this.map.set(namespace,documents)
    }

    search(namespace,closure,sort){

        if(!this.map.has(namespace)){
            return undefined
        }

        let documents = this.map.get(namespace)
        const result = documents.filter(d => closure(d))
        const { key="" , asc = true } = sort || {}
        result.sort((a,b) =>  asc ? a[key] - b[key] : b[key] - a[key])
        return result
    }
}

function run() {
    const searchEngine = new InMemorySearch()
    searchEngine.addDocuments(
        "Movies",
        { name: "Avengers", rating: 8.5, year: 2017 },
        { name: "Black Adam", rating: 8.7, year: 2022 },
        { name: "Jhon wick 4", rating: 8.2, year: 2023 },
        { name: "Black Panther", rating: 9.0, year: 2022 }
    )

    const result = searchEngine.search("Movies", (e) => e.year >= 2000, {
        key: "rating",
        asc: true
    });

    console.log(result)
}

run()