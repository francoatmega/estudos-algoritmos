let swaps = 0
let iterations = 0

const bubbleSort = (unorderedArray, arrayLength = unorderedArray.length) => {
    if (arrayLength === 0) return unorderedArray
    for (let i = 0; i < arrayLength - 1; i++) {
        iterations += 1
        if( unorderedArray[i] > unorderedArray[i+1] ) {
            swaps += 1
            let temp = unorderedArray[i]
            unorderedArray[i] = unorderedArray[i+1]
            unorderedArray[i+1] = temp   
        }
    }
    return bubbleSort(unorderedArray, arrayLength - 1)
}

(()=> {
    const unorderedArray = [ 10000, 5, 3, 1, 0, 6, 10, 111, 11, 2, 24, 9]
    console.time('bubbleSort')
    console.log(bubbleSort(unorderedArray))
    console.timeEnd('bubbleSort')
    console.log('Nº swaps: ', swaps)
    console.log('Nº iterations: ', iterations)
})()
