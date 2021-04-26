/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, replacement_color) {
    const num_rows = image.length
    const num_cols = image[0].length

    function get_neighbors(coord, color) {
        const neighbors = []
        const row = coord[0]
        const col = coord[1]

        const delta_row = [-1, 0, 1, 0]
        const delta_col = [0, 1, 0, -1]

        for (let i = 0; i < delta_row.length; i++) {
            const neighbor_row = row + delta_row[i]
            const neighbor_col = col + delta_col[i]

            if (0 <= neighbor_row && neighbor_row < num_rows && 0 <= neighbor_col && neighbor_col < num_cols) {
                if (image[neighbor_row][neighbor_col] === color) {
                    neighbors.push([neighbor_row, neighbor_col])
                }
            }
        }
        return neighbors
    }

    function bfs(root) {
        const queue = [root]
        const visited = Array.from( {length: num_rows}, (v,i) => Array(num_cols).fill(false))
        let r = root[0]
        let c = root[1]
        const color = image[r][c]
        image[r][c] = replacement_color // replace root color
        visited[r][c] = true

        while (queue.length > 0) {
            const node = queue.shift()
            for (const neighbor of get_neighbors(node, color)) {
                r = neighbor[0]
                c = neighbor[1]
                if (visited[r][c]) continue
                image[r][c] = replacement_color // replace color
                queue.push(neighbor)
                visited[r][c] = true
            }
        }

    }

    bfs([sr, sc])

    return image
};