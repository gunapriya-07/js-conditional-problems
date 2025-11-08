let age = 65;
let person = "aged";

if(age > 60 && person==="aged")
{
    console.log("Lower Birth");
}
else if(age >= 30 && age <= 50 && gender==="ladies")
{
    console.log("Middle Birth");
}
else{
    console.log("Upper Birth");
}

//Expected Output :

//65 => Lower Birth
//45 => Middle Birth
//25 => Upper Birth