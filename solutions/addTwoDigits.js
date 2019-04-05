function addTwoDigits(n){
    var sum=0;
    while(n>0){
        sum+=n%10;
        n=parseInt(n/=10);
    }
    return sum;
  }
  
console.log(addTwoDigits(29));
module.exports=addTwoDigits

