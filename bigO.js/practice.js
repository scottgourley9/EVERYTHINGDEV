function randomArr(size) {
  var a = [];
  for (var i = 0; i < size; i++){
    a.push(parseInt(Math.random()* 100))
  }
  return a;

}


function bubbleSort(array){
  var swapped = true;
  while(swapped){
    swapped = false;
    for (var i = 0; i<array.length-1; i++){
      if(array[i] > array[i+1]){
        swapped = true;
        var tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
      }
    }
  }
}

function bucketSort(array){
  var buckets = [];
  for (var i = 0; i <= 100; i++){
    buckets.push(0);
  }
  for(var i = 0; i < array.length; i++){
    var number = array[i];
    buckets[number]++;
  }
  var arrayIndex = 0;
  for (var number = 0; number <= 100; number++){
    var count = buckets[number];
    for(var i=0; i<count; i++){
      array[arrayIndex] = number;
      arrayIndex++;
    }
  }
}
var array = randomArr(10000000);
console.time("timer");
bucketSort(array)
console.timeEnd("timer");
