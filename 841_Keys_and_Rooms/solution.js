/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const uniqueKeys = new Set([0]),
        availableKeys = [0]

    while (availableKeys.length) {
        let currentKey = availableKeys.pop()
        rooms[currentKey].forEach(key => {
            if (!uniqueKeys.has(key)) {
                uniqueKeys.add(key)
                availableKeys.push(key)
            }
        })
    }

    return uniqueKeys.size === rooms.length

};
