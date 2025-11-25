// character is vowel or consonent

var n= prompt("enter a character: ");

if(n==='a' || n==='e' || n==='i' || n=== 'o' || n==='u' || n==='A' || n==='E' || n==='I' || n==='O' || n==='U' ){

    console.log(`${n} is an vowel`);

}
else{
    console.log(`${n} is an consonent`);
}





// find sum of n natural numbers

var n=prompt("enter a number:");

var sum=0;

for(let i=1;i<=n;i++){
    sum+=i;
}

console.log(sum);





// printing element in an array using for loop

const arr= [1,2,3,4,5,56];

for(let i=0;i<arr.length;i++){
    console.log(arr[i]+" ");
}


