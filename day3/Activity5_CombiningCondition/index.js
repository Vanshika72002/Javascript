const year=2001;
if((year%4==0 && year%100!=0)||year % 400 ==0)
    console.log("leap year");
else 
    console.log("Not a leap year");