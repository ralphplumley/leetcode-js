var wallsAndGates = function(rooms) {
    if(rooms.length==0) return;    // if no rooms return
    const EMPTY = 2147483647,
        GATE = 0,
        DIR = [
            [1,0],  // top row
            [-1,0], // bottom row
            [0,1],  // right col
            [0,-1]  // left col
        ];
    let queue = [],
        m=rooms.length,
        n=rooms[0].length;

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(rooms[i][j]==GATE){
                queue.push([i,j]); // Find and save positions of all the GATEs in queue
            }
        }
    }

    while(queue.length != 0){
        const curr = queue.shift();
        let row=curr[0],
            col=curr[1];
        for(let dir of DIR){  // loop through the dirs from DIR created above.
            const r = row+dir[0]; // curr posn+up/down based on iteration
            const c = col+dir[1]; // curr posn+left/right based on iteration

            if(r<0||c<0||r>=m||c>=n||rooms[r][c]!=EMPTY){ // if out of bounds or found empty go to next iteration
                continue;
            }
            rooms[r][c] = rooms[row][col]+1; // value in curr position + 1
            queue.push([r,c]); // add this newly marked position to the queue so that its neighbours also get marked in next iterations.
        }
    }

};
