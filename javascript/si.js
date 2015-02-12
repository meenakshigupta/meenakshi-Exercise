function calculate()
{
var p=prompt("Enter the Principal","1000");
var r=prompt("Enter the Rate","10");
var t=prompt("Enter the Time","4");
interest=(p*r*t)/100;
document.getElementById("calc").innerHTML=interest;
}
