let inputData=[95,38,86,68,100,92,47]
sortDesc(inputData)
console.log("Array Sorted in Descending Order is:"+inputData)

function sortDesc(inputData){
    for(let i=0;i<inputData.length-1;i++){
        for(let j=i+1;j<inputData.length;j++){
            if(inputData[i]<inputData[j]){
                let temp=inputData[i]
                inputData[i]=inputData[j]
                inputData[j]=temp
            }
        }
    }
}
