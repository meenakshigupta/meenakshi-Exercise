function sum(a,b)
{
var c=a+b;
document.getElementById("two").value=c;
}

function prod()
{
var a=document.getElementById("one").value;
alert(a);
}

function date()
{
var a=new Date();
document.getElementById("d").innerHTML=a.getFullYear();
}

function fulldnt()
{
var d=new Date();
var a=d.getMonth();
a=a+1;
var str=d.getDate()+" "+a+" "+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
document.getElementById("dnt").innerHTML=str;

}
		
