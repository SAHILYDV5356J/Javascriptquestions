//Assignment 1: by using tostring method
//convert in binary using filter

const arr=[1,2,3,4,5,6,7];
const ans=[];
arr.filter((value)=>{
   ans.push(value.toString(2));
})
console.log(ans);




//covert in binary using map

const arr1=[1,2,3,4,5,6,7];
const ans1=arr1.map((value)=>{
    return value.toString(2);
})
console.log(ans1);




//Assignment 2: convert in binary if number is greater than 20 and less than 40==> by using seprate method



function tobinary(value){
    
    let ans=0;
    let power=1;
    let rem;
    if(value==0){
       return 0;
    }
    while(value>0){
        rem=value%2;
        ans=ans+rem*power;
        power*=10;
        value=Math.floor(value/2);
    }
    return ans;
}


const arr2=[1,80,34,22,2,10,39,35,12];

const ans2=[];
arr2.filter((value,idx)=>{
    
    if(value>20 && value<40){
        ans2.push(tobinary(value));
    }
})

console.log(ans2);

