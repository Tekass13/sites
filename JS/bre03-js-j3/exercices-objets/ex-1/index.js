let student = {
    name : "Steven",
    age : 19,
    grades : [12, 14, 10],
    average : 0
};

let sum = 0;

for(let i = 0; i < student.grades.length; i++) {
    sum += student.grades[i];
}

student.average = sum / student.grades.length;

console.log(student);
