/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

/*
1: build a map to store each departure location and its destinations array.
2: sort the destinations array.
3: now we assume that the departure airport 'JFK' is the root node for this tree,
    and its destinations are the children. Since the destinations are sorted, the children are arranged alphabetically
    from left to right. For each destination, if it is also a departure airport, then its children
    are the related destinations.
4: run a post order traversal of the tree , as a result, 'JFK' now is the last airport visited
5: finally we reverse the result as the return value.
 */

const findItinerary = function(tickets) {
    // Build a map and store each departure location and its destinations array
    /* something like:
    {
        "JFK" : ["AAA", "BBB"],
        "DTW" : ["JFK" ]
    }
     */

    let map = new Map()
    tickets.forEach((itinerary) => {
        const departure = itinerary[0]
        const destination = itinerary[1]
        if (map.has(departure)) {
            map.get(departure).push(destination)
        } else {
            map.set(departure, [destination])
        }
    })

    // Sort each destinations array
    map.forEach((destinations, departure) => {
        destinations.sort()
    })

    let result = []
    // Our DFS function
    const dfs = function(airport) {
        let destinations = map.get(airport)
        while (destinations && destinations.length > 0) {
            dfs(destinations.shift())
        }
        result.push(airport)
    }

    // Kick off our DFS function
    dfs("JFK")
    return result.reverse()
};

const input = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
// console.log(findItinerary(input)) //=> ["JFK", "MUC", "LHR", "SFO", "SJC"]

const input2 = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
console.log(findItinerary(input2)) //=> ["JFK","ATL","JFK","SFO","ATL","SFO"]
// ["JFK","ATL","JFK","SFO","ATL","SFO"]