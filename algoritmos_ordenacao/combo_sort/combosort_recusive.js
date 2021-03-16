let swaps = 0
let iterations = 0

const comboSort = (unorderedArray, arrayLength = unorderedArray.length, gap = unorderedArray.length - 1) => {
    if (arrayLength === 0) return unorderedArray
    gap = gap - 1
    for (let i = 0; i < arrayLength - 1; i++) {
        if( unorderedArray[i] > unorderedArray[gap + 1] ) {
            swaps++
            let temp = unorderedArray[i]
            unorderedArray[i] = unorderedArray[gap + 1]
            unorderedArray[gap + 1] = temp
        }
    }
    return comboSort(unorderedArray, arrayLength - 1, gap)
}

(()=> {
    const unorderedArray = [ 10000, 5, 3, 1, 0, 6, 10, 111, 11, 2, 24, 9]
    console.time('comboSort')
    console.log(comboSort(unorderedArray))
    console.timeEnd('comboSort')
    console.log('Nº swaps: ', swaps)
    console.log('Nº iterations: ', iterations)
})()
