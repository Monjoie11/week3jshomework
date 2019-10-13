//1

function fibonacci(n) {
    let a = 0;
    let b = 1;
    let fibo = 1;
    for (let i = 2; i <= n; i++) {
        fibo = a + b;
        a = b;
        b = fibo;
    }
    return fibo;
};

fibonacci(8);

//2

function bubbleSort(numArray) {
    let temp;
    let counter = 0;
    do {
        counter = 0;
        for (let i = 0; i < numArray.length; i++) {
            if (numArray[i] > numArray[i + 1]) {
                temp = numArray[i];
                numArray[i] = numArray[i + 1];
                numArray[i + 1] = temp;
                counter++;
            }
        }
    } while (counter !== 0);
    return numArray;
}

bubbleSort([5, 7, 8, 55, 6, 1, 99]);

//3 Reverse and return the String.
function reverseStr(someStr) {
    let newStr
    let temp;
    for (let i = 0, j = someStr.length-1; i < j; i++, j-- ) {
       temp = someStr[i];
       someStr[i] = someStr[j];
       someStr[j] = temp;
       newStr = someStr; 
    }
    return newStr;
}


