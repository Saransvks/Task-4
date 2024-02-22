// print odd numbers in an array
(function(array){
    for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i])
               } 
          }
    })([1,2,3,4])



// convert all the string to title caps in a string array
(function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  })("SARAN IS MY NAME");



// Sum of all numbers in an array
(function (array) {
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
    })([1,2,3,4,5,6])



// Return all the prime numbers in an array
(  
    function(numArray){
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(numArray);
   })([1,2,3,4,5,6,7,8,9])


// Return all the palindromes in an array
(  function (arr, n)
{
    // Traversing each element of the array
    // and check if it is palindrome or not
    for (let i = 0; i < n; i++)
    {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
})([1,5,3] , 3)


// Return median of two sorted arrays of the same size.
<script>

/* This function returns
median of ar1[] and ar2[].
Assumptions in this function:
Both ar1[] and ar2[]
are sorted arrays
Both have n elements */
function getMedian(ar1, ar2, n){
let j = 0;
let i = n - 1;
while (ar1[i] > ar2[j] && j < n && i > -1)
{
    let temp = ar1[i];
    ar1[i] = ar2[j];
    ar2[j] = temp;
    i--; j++;
}
ar1.sort(function(a, b){return a - b});
ar2.sort(function(a, b){return a - b});
return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
}

let ar1 = [ 1, 12, 15, 26, 38 ];
let ar2 = [ 2, 13, 17, 30, 45 ];

let n1 = 5;
let n2 = 5;
if (n1 == n2)
document.write("Median is "+ getMedian(ar1, ar2, n1));
else
document.write("Doesn't work for arrays of unequal size");


// Remove duplicates from an array
(function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4])

//  Rotate an array by k times
function reverse(array , li , ri){
    while(li < ri){
          temp = a[li];
         a[li]= a[ri];
         a[ri] = temp;
         
         li++;
         ri--;
       }
   }



