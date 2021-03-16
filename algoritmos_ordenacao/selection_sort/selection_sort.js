let swaps = 0
let iterations = 0

const selectionSort = (unorderedArray) => {
    for(let i = 0; i < unorderedArray.length - 1; i++) {
        let min = i
        iterations++
        for(let j = i + 1; j < unorderedArray.length; j++){
            if(unorderedArray[min] > unorderedArray[j]){
                min = j
            }
        }
        swaps++
        let temp = unorderedArray[i]
        unorderedArray[i] = unorderedArray[min]
        unorderedArray[min] = temp
        console.log(unorderedArray)
    }
    return unorderedArray
}

(()=> {
    const unorderedArray = [ 10000, 5, 3, 1, 0, 6, 10, 111, 11, 2, 24, 9]
    console.time('selectionSort')
    console.log(selectionSort(unorderedArray))
    console.timeEnd('selectionSort')
    console.log('Nº swaps: ', swaps)
    console.log('Nº iterations: ', iterations)
})()