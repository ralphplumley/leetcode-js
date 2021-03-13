/*
    variable key = "JFK"
    variable candidates = []
    variable ans = [] // ["JFK", "ABC", "DEF"]

    while tickets.length is greater than 0
        for loop each ticket
            if ticket[0] = key
                candidates.push([tickets[1], i])

        if candidates = 1
            ans.push(candidates[0][0])
            key = candidates[0][0]
            index = candidates[0][1]
            tickets.splice(index, 1)
        else
            variable candidate = candidates[0]
            for each candidate (start at i = 1)
                if this candidate[0] is less than candidate[0] ("ABC" < "ABD")
                    then this candidate becomes candidate

            ans.push(candidate[0])
            key = candidates[0]
            index = candidate[1]
            tickets.splice(index, 1)

 */
const findItinerary = function(tickets) {
    let key = "JFK"
    let candidates = []
    let ans = ["JFK"]

    while (tickets.length > 0) {
        for (let i = 0; i < tickets.length; i++) {
            let ticket = tickets[i]
            if (ticket[0] === key) {
                candidates.push([ticket[1], i])
            }
        }

        let candidate = candidates[0]

        for (let j = 1; j < candidates.length; j++) {
            if (candidates[j][0] < candidate[0]) {
               candidate = candidates[j]
            }
        }

        if (candidate !== undefined) {
            ans.push(candidate[0])
            key = candidate[0]
            let index = candidate[1]
            tickets.splice(index, 1)
            candidates = []
        }
    }

    return ans
};

const input = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
// console.log(findItinerary(input)) //=> ["JFK", "MUC", "LHR", "SFO", "SJC"]

const input2 = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
console.log(findItinerary(input2)) //=> ["JFK","ATL","JFK","SFO","ATL","SFO"]
