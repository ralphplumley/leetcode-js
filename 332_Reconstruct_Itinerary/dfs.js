const findItinerary = function(tickets) {
    let map = new Map()
    let result = []

    for (let i = 0; i < tickets.length; i++) {
        let departure = tickets[i][0]
        let destination = tickets[i][1]

        // setup our map
        if (map.has(departure)) {
            map.get(departure).push(destination)
        } else {
            map.set(departure, [destination])
        }

    }

    // sort each destination array
    for (let [departure, destinationArr] of map) {
        destinationArr.sort()
    }

    // our dfs function
    const dfs = function(node) {
       let destination = map.get(node)
        while (destination && destination.length > 0) {
           dfs(destination.shift())
        }
        result.push(node)
    }

    // kick it off
    dfs("JFK")
    return result.reverse()
};

const input = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
// console.log(findItinerary(input)) //=> ["JFK", "MUC", "LHR", "SFO", "SJC"]

const input2 = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
console.log(findItinerary(input2)) //=> ["JFK","ATL","JFK","SFO","ATL","SFO"]
                                     // ["JFK","ATL","JFK","SFO","ATL","SFO"]