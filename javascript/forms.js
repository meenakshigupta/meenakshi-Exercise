function check()
{
var n=document.getElementById("name").value;
var a=document.getElementById("age").value;
if(n.length==0)
{
alert("Field cannot be blank!Please enter name");
}
if(!isNaN(n))
{
alert("Enter Valid Name");
}
if(a.length==0)
{
alert("Enter the age,Cannot be Null!!");
}
if(isNaN(a))
{
alert("Enter the number,not a String");
}
if(a<18)
{
alert("Enterr age >18");
}
}
