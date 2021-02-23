// const test = () => "test"

function test() {
    return "test"
}

// 1.Передача функции в качестве callback'a
// - передача литерала функции
// - передача имени функции
// 2.Передача результата вызова функции

console.log(test)

let students = [
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

function myMap(arr, callbackFn ) {
    const  newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = callbackFn(arr[i])
    }
    return newArr
}

// function incAge(st) {
//     const copySt = {...st} // spread оператор создаем копию студентов
//     copySt.age = copySt.age + 1 // берем свойство возраст и прибавляем к его значению +1
//     return copySt  // выводим с новым значением свойства
// }
const newSts = myMap(students, st => ({...st, age: st.age + 1}))
console.log(newSts === students) //false
students.map(st => ({...st, age: st.age + 1})) // в функцию мар можно передать литерал стрелочной функции
// const incAges = st => ({...st, age: st.age + 1})

// фильтр

function myFilter(arr, callbackFn) { // самописная функция фильтра
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (callbackFn(arr[i]) === true) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// function isMarried(st) {
//     if (st.isMarried === true) {
//         return true
//     } else {
//         return false
//     }
// }

console.log(myFilter(students,st => st.isMarried))
// console.log(students.filter(isMarried))

const isMarried = st => st.isMarried

// метод поиска

function myFind(arr, callbackFn) {   // самодельный метод поиска
    for (let i = 0; i < arr.length; i++) {
        if (callbackFn(arr[i]) === true) {
            return arr[i]
        }
    }
}

console.log(myFind(students, st => st.name === "Alex"))
console.log(students.find(st => st.name === "Alex"))