 let studentsInfo=[
    ["Harry",18,"Male","B.Com"],
    ["Sunny",19,"Male","B.Com"],
    ["Sarah",18,"Female","B.C.A"].filter(
        function(el){
            return typeof(el)=="string";
        }
    ),
    ["Tom",17,"Male","B.C.A"]
]
console.log(studentsInfo);
//showing age of Sunny
console.log(studentsInfo[1][1]);