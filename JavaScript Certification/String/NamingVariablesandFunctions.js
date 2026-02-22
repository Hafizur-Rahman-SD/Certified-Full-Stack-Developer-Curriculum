// let isLoading = true;
// let hasPermission = false;
// let canEdit = true;


let arr = new Array(3).fill(1);
console.log(arr);


let arr2 = [1, 2, 3, , 5];
console.log(arr2.length);



function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2


function multiply(a){
    return function(b){
        return a*b;
    };

}

let double =multiply(2);
console.log(double(5));
console.log(double(15));
console.log(double(50));