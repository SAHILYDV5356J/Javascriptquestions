//first approach:  taking user input at same time from both player and then decide winner when one of them guess correct number.


/*

function guess(rdm1,rdm2){


     let count1=0;
     let count2=0;

     let input1=prompt("Player1 enter a number {0-100}");
     let input2=prompt("Player2 enter a number {0-100");
    
     count1++;
     count2++;

     

          if((input1==rdm1 && input2==rdm2) && count1 ==count2){
            console.log("Match tie");
            return;
          }
         else if(input1==rdm1){
            console.log("Player1 is winner");
            return;
          }
          else if(input2==rdm2){
            console.log("Player2 is winner");
            return;
          }

    
     
     while((input1 !=rdm1 ) && (input2 !=rdm2)){
          
          if(Number(input1)<rdm1){
            console.log("Player1 number is too less: ");
          }
          else if(Number(input1)>rdm1){
            console.log("Player1 number is too greater: ");
          }


          if(Number(input2)<rdm2){
            console.log("Player2 number is too less: ");
          }
          else if(Number(input2)>rdm2){
            console.log("Player2 number is too greater: ");
          }



          input1=prompt("Player1 try again :");
          input2=prompt("Player2 try again :");
          
        

          count1++;
          count2++;


          if((input1==rdm1 && input2==rdm2) && count1 ==count2){
            console.log("Match tie");
            break;
          }
          if(input1==rdm1){
            console.log("Player1 is winner");
            break;
          }
          else if(input2==rdm2){
            console.log("Player2 is winner");
            break;
          }

     
     }

    

    
   
}


let rdm1= Math.floor(Math.random()*100+1);
let rdm2= Math.floor(Math.random()*100+1);


 guess(rdm1,rdm2);


console.log(`right answer for player1: ${rdm1}\n right answer for player2 : ${rdm2}`);  

*/








/* ---------------------------------------------------------------- */









//second approach: play complete match for one player then for another player after that decide one winner


 function guess(rdm,count){

    let input=prompt("enter a number {0-100}");
    count++;

    while((input != rdm)){
          if(Number(input)<rdm){
            console.log(" number is too less: ");
          }
          else if(Number(input)>rdm){
            console.log(" number is too greater: ");
          }

          

          input=prompt("try again:");
          count++;
        
        }

     console.log("correct guess: ");


     return count;

    
}




let rdm1= Math.floor(Math.random()*100+1);
let rdm2= Math.floor(Math.random()*100+1);

let count1=guess(rdm1,0);
let count2=guess(rdm2,0);

 if(count1===count2){
  console.log("Match Tie");
 }
 else if(count1<count2){
  console.log("Player1 is winner");
 }
 else{
  console.log("player2 is winner");
 }


console.log(`right answer for player1: ${rdm1}\n right answer for player2 : ${rdm2}`);


 