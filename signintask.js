const details={
    email:"sy05092005@gmail.com",
    mobile:8690548852,
    password: "rocksta5356j",
    name:"Sahil Yadav",
    age:"19",
    course: "B-Tech",
    year: "1st",
    sem:"1st",
    cgpa: 9.5,
    parentsnumber:8690548852

}

console.log("Enter Below Details To Access Your Account:");

let count=0;


while(true){
    let input1=prompt("enter your mobile Number / email id: ");
    let input2=prompt("enter your password: ");
    count++;

    if((Number(input1)===details.mobile || input1===details.email) &&  input2===details.password){
    
    console.log("You are Sign in Successfully!\n");


    for(let ans in details){
        console.log(`${ans} : ${details[ans]}`);
    }

    break;
    }
    else if(count===3){
        console.log("Please try again after 24 hours");
        break;
    }  
    else{
    console.log("invalid inputs try again:");

    }
}