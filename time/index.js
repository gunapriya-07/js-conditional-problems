let time = 7;

if(time > 5 && time < 12)
{
    console.log("Good Morning");
}
else if(time > 12 && time < 16)
{
    console.log("Good Afternoon");
}
else if(time > 16 && time < 19)
{
    console.log("Good Evening");
}
else{
    console.log("Good Night");
}

//Expected Output :

//7 => Good Morning
//14 => Good Afternoon
//18 => Good Evening
//3 => Good Night

