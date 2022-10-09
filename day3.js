// (1) For given JSON iterate over all for loops;

var student = [{
    "name":"Srini",
    "department":"IT",
    "skill":"FSD",
    "language":"Tamil"
}]
//for in
for(var details in student) {
    console.log(student[details]);
}
//for loop
for(var i=0; i<student.length; i++) {
    var res = student[i];
    console.log(res.name);
    console.log(res.department);
    console.log(res.skill);
    console.log(res.language);
}
//for of
let dis = "";
for(let a of student){
    dis = a.name;
}
console.log(dis)


//