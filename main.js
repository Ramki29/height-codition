let height=parseInt(prompt("enter height"));
if(height<150)
{
	console.log("height"+"Dwarf");
}
else if(height>=150 && height<165)
{
	console.log("average person");
}
else if(height>=165 && height<=195)
{
	console.log("tallest person");
}
else
{
	console.log("abnormal");
}