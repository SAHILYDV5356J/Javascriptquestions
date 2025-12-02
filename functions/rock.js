// rock paper secissor game with computer:


let input1=prompt("enter 1 for rock\nenter 2 for paper\nenter 3 for secissor\n");
let input2=Math.floor(Math.random()*3+1);

if(input1==1 || input1==2 || input1==3){
   winner(input1,input2); 
}
else{
    console.log("invalid selection");
}



function winner(input1,input2){
    if(input1==input2){
        console.log("Match Tie");
    }
    else if(input1==1 && input2==2){
        console.log(`Computer won by choosing paper`);
    }
    else if(input1==1 && input2==3){
        console.log("You won : computer choose secissor");
    }
     else if(input1==2 && input2==1){
        console.log(`You won : computer choose rock`);
    }
     else if(input1==2 && input2==3){
        console.log(`Computer won by choosing secissor`);
    }
     else if(input1==3 && input2==1){
        console.log(`Computer won by choosing rock`);
    }
     else if(input1==3 && input2==2){
        console.log(`You won : computer choose paper`);
    }
    
    
}

