const kClosest = require('./solution')

test('#1', ()=>{
   let arr = [[1,3], [-2,2]]
   let k = 1
   let answer = [[-2,2]]
   expect(kClosest(arr, k)).toEqual(answer)
})

test('#2', ()=>{
   let arr = [[3,3], [5,-1], [-2,4]]
   let k = 2
   let answer = [[3,3], [-2,4]]
   expect(kClosest(arr, k)).toEqual(answer)
})
