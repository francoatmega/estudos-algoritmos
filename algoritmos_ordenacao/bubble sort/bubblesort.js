let swaps = 0
let iterations = 0

const bubbleSort = (unorderedArray) => {
    for (let i = 0; i < unorderedArray.length; i++) {
        for(let j = 0; j < unorderedArray.length - i; j++) {
            iterations++
            if( unorderedArray[j] > unorderedArray[j+1] ) {
                swaps++
                let temp = unorderedArray[j]
                unorderedArray[j] = unorderedArray[j+1]
                unorderedArray[j+1] = temp
            }
        }
    }
    return unorderedArray
}

(()=> {
    const unorderedArray = [ 10000, 5, 3, 1, 0, 6, 10, 111, 11, 2, 24, 9]
    console.time('bubbleSort')
    console.log(bubbleSort(unorderedArray))
    console.timeEnd('bubbleSort')
    console.log('Nº swaps: ', swaps)
    console.log('Nº iterations: ', iterations)
})()