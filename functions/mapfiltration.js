const arr1=[1,2,3,4,5,6];

const arr3=[];
idx=0;

arr1.map((value,index)=>{
        if((arr1[index])%2===0){
            arr3[idx++]=arr1[index];
        }
})

console.log(arr3);
