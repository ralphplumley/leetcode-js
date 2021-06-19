var shipWithinDays = function(weights, D) {

    function getDays(capacity) {
        let days = 1, total = 0;

        for(let n of weights) {
            total += n;
            if(total > capacity) {
                total = n;
                days++;
            }
        }
        return days;
    }

    let start = Math.max(...weights),
        end = weights.reduce((acc, cur) => acc + cur, 0);

    while(start < end) {
        const mid = Math.floor((end+start)/2);
        const days = getDays(mid);
        if(days > D) start = mid+1;
        else end = mid;
    }
    return end;
};

let weights = [1,2,3,4,5,6,7,8,9,10], days = 5
console.log(shipWithinDays(weights, days))
