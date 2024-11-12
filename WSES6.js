function TestScoop(){

    // {
    //  var a = 9
  
    //  console.log(a) 
    // }
  
    // console.log(a)
  
    // {
    //   let a = 66
      
    //   console.log(a)
    // }
  
    // console.log(a)
  
    {
      const a = 22
      console.log(a)
    }
    console.log(a)
    return "Test Scoop"
  }
  
  
  console.log(TestScoop())



  // var a = 9

// a = 7

// console.log(a)

// let b = 6

// b = 10

// console.log(b)

// const a = 7

// a = 9

// const bool = true

// bool = false

// const t = [3,7,9,7,2]

// t[2] = 2024

// console.log(t)

// t.push(2026)

// console.log(t)

// t = 8


const user = {name : "Wajdi", age : 20}

user.city = "Zaghouan"

console.log(user)

user = 77


// function Somme (a,b){
//   return a+b
// }

// console.log(Somme(5,4))


// var Somme =(a,b)=> a+b

// var Somme =(a,b)=>{
//   var c = a+b
//   return c
// }

// console.log(Somme(2,4))


const SayHello =()=> "Hello ES6"

console.log(SayHello())

let Hello=name=> "Hello "+ name

console.log(Hello("Rahma"))

var name = "Wajdi"
var age = 20
var city = "France"

// console.log("Hello i am " + name+ " 
// i am "+age+ " from "+city)

console.log(`Hello i am ${name} 
i am ${age} 
from ${city}`)


// var age = 100


// if(age<18){
//   console.log('Child')
// }else{
//   console.log('Adult')
// }

// console.log(age<18?"Child":"Adult")

// var rania = 9


// var resultat = rania % 2 == 0 ? "Pair" : "Impair"

// console.log(resultat)


var VerifPair=(a)=> a%2 == 0 ? "Pair" : "Impair"

console.log(VerifPair(9))
console.log(VerifPair(4))

function Ver(a){
  if(a%2 == 0){
    return "Pair"
  }else{
    return "Impair"
  }
}


var a = 7


if(a >0){
  console.log("Positif")
}

console.log(a>0 && "Positif" )

var user = {
    name : "Wajdi",
    age : 20,
    loc : {
      city : "Zaghouan",
      cp : 1800
    }
  }
  
  var {name, age} = user
  var {city, cp} = user.loc
  // console.log(`Hello i am ${user.name}, i am ${user.age}, from ${user.loc.city}, code postale ${user.loc.cp}`)
  console.log(`Hello i am ${name}, i am ${age}, from ${city}`)

  var t = [2,4,5,7,9,3]

var d = [9,7,8]

console.log([...t,...d,"Rahma"])
console.log([...t,"Rahma"])
console.log(t)
console.log(d)
// var s = []
// // console.log(t+d)
// // console.log([t+d])

// for(var i = 0; i<d.length;i++){
//   t.push(d[i])
// }
// console.log(t)
// console.log(d)
// // console.log(s)

// // for(var i = 0; i <d.length;i++){
// //   s.push(d[i])
// // }
// // console.log(t)
// // console.log(d)

// // console.log(s)


const user = { name: "Wajdi", age: 20 }

// user.city = 'Italy'

// console.log(user)

console.log({...user,city :"Italy", name :'walid'})

console.log(user)

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
var initalRania = 0

console.log(array1.reduce((accum,val)=>accum+val*2,initalRania))

var tab = [2,4,5]

var x = tab.map((yesser,wajdi,rahma) =>  rahma)
console.log(x)

console.log(tab)



var tab = [2,4,5]

console.log(tab.forEach((el,i,t)=>el+1))


tab.forEach((el,i,t)=> t[i] = el+2)

console.log(tab)

var t = ["Rahma",3,5,3,"hadir",3]


console.log(t.filter((el,i,t)=> typeof(el)== "number"))


var d = [3,9,5,77,1000,333,4]

console.log(d.filter((el,i,t)=>el>5))

var t = ["Rahma",3,5,3,"hadir",2]


console.log(t.find((el,i,t)=> el == 10))

console.log(t.findIndex((el,i,t)=>el == "had"))


var tab = [2,6,9,7,-7,8,-1000]

console.log(tab.sort((a,b)=> b-a))

var tab = [2,6,9,7,-7,8,-1000]



console.log(tab.splice(2,3))

console.log(tab)

var jomla = "Hello princess Rania from Megrine capital"

console.log(jomla.split("l").join('/'))



// var tab = [2,3,4,8]

// console.log(tab.join('Hello'))



