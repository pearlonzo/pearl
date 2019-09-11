var array1=[1,2,3,4,5,6]
var array2=[1,2,3,4,8,9,6,6,7]

function FizzBuzz(List1,list2){
    let newList = List1.concat(list2);
    let totallet  = newList.length;
    if(((totallet % 3) === 0 ) && (totallet % 5) === 0){
        console.log('Fizzbuzz');
    } else if(totallet % 3 === 0){
        console.log('Fizz');
    } else if(totallet % 5=== 0){
        console.log('Buzz');
    } else {
        console.log(totallet);
    }
};
FizzBuzz(array1,array2);