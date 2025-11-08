let month = "Sep";

if(month === "Jan" || month === "Mar" || month === "May" || month === "Jul" || month === "Aug" || month === "Oct" || month === "Dec")
{
    console.log("This month has 31 days");
}
else if(month === "Feb")
{
    console.log("Feb has only 28 or 29 days in a Leap year");
}
else
{
    console.log("This month has 30 days");
}

//Expected Output :

//Aug => This month has 31 days
//Feb => Feb has only 28 or 29 days in a Leap year
//Sep => This month has 30 days