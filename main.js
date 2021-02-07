//  Типы данных:
//  1. Примитивы -
//  number, string, boolean, null, undefined, NaN, Infinity, Symbol
//  2. Объекты -
//  object, array, function

//  - сложная структура
//  - имебт свойства и методы
//  - ссылочный тип данных

const num = 5;
const student = { //#356 - ссылка или адрес
    name: "Bob",
    age: 23,
    friends: ["Alex", "Pol", "John" ], // #0099
    isStudent: true
}

const newStudent = student //#356 - ссылка или адрес
// newStudent.name = "Helga"
// console.log(newStudent)
// console.log(student === newStudent)

const copyStudent = {...student} //#357
console.log(copyStudent)
console.log(copyStudent === student) // false
copyStudent.name = "Mike"
console.log(copyStudent)
console.log(student)
console.log(copyStudent.friends === student.friends)
student.friends.push("Helga")
console.log(student)
console.log(copyStudent)

const deepCopyStudent = {...student, friends: [...student.friends]}
//  создаем новый пустой объект - {}
//  внутрь нового пустого объекта кладем свойства старого объекта "student" - ...student
//  в свойства "friends" записываем ссылку на новый пустой массив - friends: []
//  в нового пустого массива кладем значения старого массива "student.friends" - ...student.friends

console.log(deepCopyStudent)
deepCopyStudent.name = "Donald"
deepCopyStudent.friends.pop()
console.log(deepCopyStudent)
console.log(student)

//  map - преобразовать массива элементов одного типа в массив элементов другого типа
//  взовращает (создает) новый массив
//  совпадать количество элементов

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const studentsNames = students.map(s => {
    return s.name
})
console.log(studentsNames)

console.log(students.map(st => ({...st, scores: st.scores + 10})) === students)

console.log(students.map(item => {
    if(item.name === "Bob") {
        return {...item, scores: item.scores + 10}
    } else {
        return {...item}
    }
}))
