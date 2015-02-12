function palindrome()
{
var flag=0;
var ans,i,j;
var p=document.getElementById("box").value;
var len=p.length;
     
for(i=len,j=0;i>j;i--,j++)
{
if(p[i]!=p[j])
{
flag=1;
break;
}


}
if(flag==0)
ans="Palindrome";
else
if(flag==1)
ans="NotAPalindrome";

document.getElementById("pal").innerHTML=ans;
}
