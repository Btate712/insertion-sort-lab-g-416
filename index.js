function findMinAndRemove(array){
  let minIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[minIndex]) {
      minIndex = i;
    }
  }
  const min = array.splice(minIndex, 1)[0];
  console.log(min, array);
  return min;
}

function insertionSort(array){
  const returnArray = [];
  let numPasses = array.length;
  for(let i = 0; i < numPasses; i++) {
    console.log("Pass", i);
    returnArray.push(findMinAndRemove(array));
  }
  return returnArray;
}
