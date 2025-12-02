// celcius to faranhite conversion



const faranite=(cel)=> (cel*1.8)+32 ;
const celcius=(far)=>(far-32)/1.8;

let input=prompt("Enter 1 for Celcius to faranite\nEnter 2 for faranite to celcius\n ");

while(true){
   
    if(Number(input)===1){
        let value=prompt("Enter Your Temperature in Celcius:");
        console.log(`The temperature in Faranite is : ${faranite(value)}`);
        break;
    }

    else if(Number(input)===2){
        let value=prompt("Enter Your Temperature in Faranite:");
        console.log(`The temperature in Celcius is : ${celcius(value)}`);
        break;
    }


    console.log("invalid input try again:");
    input=prompt("Enter 1 for Celcius to faranite\nEnter 2 for faranite to celcius\n"); 

    
    
}






