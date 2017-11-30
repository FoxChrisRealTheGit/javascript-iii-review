// creates an object to build array methods on
class MyArray{
    constructor(){
        let tempArr = [];
        for(var i = 0; i < arguments.length; i++){
            tempArr.push(arguments[i])
        }

        this.arr = tempArr;
    }

    // build the map function
    map(callback){
        var tempArr = [];
        for(var i = 0; i<this.arr.length; i+=1){
            tempArr.push(callback(this.arr[i], i, this.arr));
        }
        return tempArr
    }

    // build filter method
    filter(callback){
        var tempArr = [];
        for(var i = 0; i<this.arr.length; i+=1){
            if(callback(this.arr[i], i, this.arr) === true){
                tempArr.push(callback(this.arr[i]));
            }
            
        }
        return tempArr
    }

    // build reduce method
    reduce(callback, startingValue){

    }

}

var myArr1 = new MyArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
myArr1;

// add 5 to each position
var map1  = myArr1.map((x, i, arr) => x + 5);

map1;


// replace numbers divisible by 3 with the string 'cool number'
var map2 // = myArr2.map()

map2;


var myArr2 = new MyArray(1, 2, 3, 1, 5, 4, 7, 3, 2, 1);
myArr2;


//remove evens from myArr2
var filter1 = myArr2.filter((x, i, arr)=> x %2===1);

filter1;


//remove duplicates from myArr2
var filter2 //= myArr2.filter();

filter2;