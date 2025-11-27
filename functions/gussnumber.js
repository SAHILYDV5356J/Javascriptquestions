function guess(rdm){

     let input=prompt("enter a number {0-100}");
     while(input!=rdm){
          
          if(Number(input)<rdm){
            console.log("your number is too less: ");
          }
          else if(Number(input)>rdm){
            console.log("your number is too greater: ");
          }

          input=prompt("try again :");
     
     }
     console.log(`correct guess`);
   
}

let random=Math.random();
let rdm= Math.floor(random*100+1);


guess(rdm);