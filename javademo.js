var head= document.getElementById("head")
console.log(head.textContent)

function change(){
    var name = prompt("what's your name")
    head.textContent=head.textContent + name.textContent
}

var one=document.getElementById("num1")
var two=document.getElementById("num2")
var val=document.getElementById("val")

function add(){
    var oneval= Number(one.value)
    var twoval= Number(two.value)
    val.textContent= "Result:"+ (oneval+twoval)
}


var nam=document.getElementById("nam")
var dom =document.getElementById("dom")

function rename(){
    nam.textContent=dom.textContent
}

var bomb=document.getElementById("bomb")

function call(event){
    bomb.textContent=event.target.textContent
}

function del(event){
    event.target.remove()
}

var number=document.querySelectorAll(".cl")
function vaa(){
        for(i=0;i<number.length;i++){
            number[i].textContent=i+1
        }
}


var hi=document.getElementById("hi")
function append()
{
    hi.append("World")
}

var div=document.getElementById("div")
function again(){
    var item=document.createElement("h1")
    item.textContent="hello"
    div.append(item)
}


var div1=document.getElementById("div1")
var div2=document.getElementById("div2")
function join(){
    var joindiv1=div1.innerText
    div2.append(joindiv1)
}



var todoin=document.getElementById("todoin")
var todo=document.getElementById("todo")

function todoadd(){
    var listitem=document.createElement("li")
    listitem.innerHTML=todoin.value + "<button onclick='deleteitems(event)'>Delete</button>"
    todo.append(listitem)
}
function deleteitems(event){
    event.target.parentElement.remove()
}

inputvalue = document.getElementById("inputvalue")
result = document.getElementById("result")

function calcu(){
    result.innerText = result.textContent + ((inputvalue.value * 9 / 5) + 32).toFixed(2)
}


let collection = ['home', 'car', 'bike', 'moblie', 'laptop', 'chocolate', 'bed', 'dress', 'ps5', 'jewels']
let luckresult = document.getElementById("luckresult")
let luckynumber = document.getElementById("luckynumber")

function myluck(){
    luckresult.innerText =collection[luckynumber.value - 1]
}

let inname = document.getElementById("inName")
let here = document.querySelector(".here")
function ramcall(){
    let outname = String(inname.value)
    here.innerHTML = outname[Math.floor((Math.random()) * outname.length )]
}


const textplace = document.getElementById("textplace")
const sayslength = document.getElementById("sayslength")

function callength(){
    let textlength = textplace.textContent
    console.log(textlength.length)
    sayslength.textContent = textlength.length
}

//Switch - Example
let result_div = document.createElement("div").setAttribute("id", "result")
document.getElementById("button").addEventListener("click", function(){

    switch (document.getElementById(mark).value > 80 && document.getElementById("radio1").ariaChecked){
        
    }
    result_div.innerHTML = `<h1>  </h1>`
    document.getElementById("container").appendChild(result_div)
})

//random color generation

var box = document.getElementById("box")
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
document.getElementById("clr_btn").addEventListener("click", rdm_clr)

function rdm_clr(){
    let clr = '#'
    for (i = 0; i < 6; i++){
        clr += add_clr()
    }
    console.log(clr)
    box.style.backgroundColor = clr
    document.getElementById("clr_name").textContent = clr
}

function add_clr(){
    let rdm_index = Math.floor(Math.random() * 16)
    console.log(rdm_index)
    return arr[rdm_index]
}

//ForEach Example
let arr2 = ['confier', 'siga', 'Gvnt', 'sivasakthi']

arr2.forEach( val =>{
    const opt = document.createElement('option')
    opt.textContent = val
    opt.value = val
    document.getElementById("select").appendChild(opt)
})

//Map Example
let arr3 = [25, 50, 75, 100, 125]

arrofsum = arr3.map(x => x + x)
console.log(arrofsum)

//Filter Example-1

let arrOfFiltered = arr3.filter(arr_filter)
function arr_filter(val){
    return val <= 100
}
console.log(arrOfFiltered)

//Example-2

let arr2d = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g']
]
//flat used to convert multi dimensional array into single dimensional array
let count = arr2d.flat().reduce((accumulator, curval) => {
    if (accumulator[curval])
        accumulator[curval]++
    else
        accumulator[curval] = 1
    return accumulator
}, {})
console.log(count)


//Closure Example-1
function add(x){
    return function(y){
        return x + y
    }
}

let addWithY = add(10)
console.log(addWithY(5))

//Example-2
let fstnum = 10

function funSum(num){
    let sndNum =20
    function funSum2(num2){
        return fstnum + sndNum + num + num2
    }
    return funSum2
}

let Addition = funSum(30)
console.log(Addition(40))

//Exercise
//Ex1
let numArr = [4, 6, 2, 3, 1, 1, 3, 5, 7, 8, 4, 3]

pureArr = numArr.reduce((accumulator, x) => {
    if(accumulator[x])
        null
    else
        accumulator.push(x) 
    return accumulator
}, [])
console.log(pureArr)

//Ex2

let Name = 'Robert Downey Jr'

abbservation = Name.split(" ").map(x =>{
    return x.charAt(0)
})
console.log(abbservation.join(''))

//Ex3

let Input = [6, -5, 8, -2, 5, 6, -1]

let findPos = Input.filter(x => x > 0)
console.log(findPos)

function sumOfPos(){
    let sum = findPos.reduce((sum, x) => sum += x)
    return sum
}
findSum = sumOfPos()
console.log(findSum)

let findSumOfPos = Input.filter(x => x > 0).reduce((sum, x) => sum += x)
console.log(findSumOfPos)

//Digital Clock

function digitalClock(){
    let time = new Date();

    hr = time.getHours()
    min = time.getMinutes()
    sec = time.getSeconds()

    if(hr > 12){
        hr - 12;
        document.getElementById("am-pm").textContent = "PM"
    }

    document.getElementById("hours").textContent = padZero(hr);
    document.getElementById("mins").textContent = padZero(min);
    document.getElementById("secs").textContent = padZero(sec);
}

setInterval(digitalClock, 500)

function padZero(num){
    return num < 10 ? "0" + num: num;
}

//PROMISE - Example

let frdA = new Promise((resolve, reject) => {
    let reach = true
    if(reach)
        setTimeout(resolve, 3000, "Ram reached")
    else
        reject("Ram not reached")
})

let frdB = new Promise((resolve, reject) => {
    let reach = false
    if(reach)
        setTimeout(resolve, 2000, "mani reached")
    else
        reject("mani not reached")
})

let frdC = new Promise((resolve, reject) => {
    let reach = false
    if(reach)
        setTimeout(resolve, 1000, "Raja reached")
    else
        reject("Raja not reached")
})

//STATIC METHODS IN PROMISE

//Promise.all 
Promise.all([frdA, frdB, frdC])
.then((message) => console.log(message))
.catch((message) => console.log(message))

//Promise.allSettled
Promise.allSettled([frdA, frdB, frdC])
.then((message) => console.log(message))
.catch((message) => console.log(message))

//Promise.any
Promise.any([frdA, frdB, frdC])
.then((message) => console.log(message))
.catch((message) => console.log(message))

//Promise.race
Promise.race([frdA, frdB, frdC])
.then((message) => console.log(message))
.catch((message) => console.log(message))

//ERROR HANDLING - Example

try{
    let num = 10 //prompt("Enter a number")
    if(isNaN(num))
        throw "Enter a Valid Number"
    console.log(num ** 2)
       
}
catch(error){
    console.log(error)
}
finally{
    console.log("Try again")
}

//API - Example

// Step 1 - Requesting info from server
fetch('https://official-joke-api.appspot.com/jokes/programming/random')

// Step 2 - Converting response from json content to javascript object
.then((res) => res.json())

// Step 3 - Accessing info from an array of object (javascript)
.then((msg) => console.log(msg[0].setup, msg[0].punchline))

// Step 4 - To caught an error, incase there is an error on fetching
.catch((error) => console.log(error)) 

//Example 2 - Checking before conterting json format into javascript object

fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then( response => {
    //checking before converting
    if( response.ok )
        console.log("Success")
    else
        console.log("failed")
    //converting json to javascript object
    // console.log(response.json())
    return response.json()
})
.then( msg => console.log(msg[0].setup, msg[0].punchline))
.catch(error => console.log(error))


// Real-Time currency converter using API
fetch(`https://api.frankfurter.app/currencies`)
.then(response => response.json())
.then(result => displayDropDown(result))

let select = document.querySelectorAll(".currency")

function displayDropDown(result){
    // console.log(result) - result in object
    // Object.entries() - Used to convert an object to array format
    // After that the result in object format convert into 2D array
    let currency = Object.entries(result)
    //currency - 2D array
    for( let i = 0; i < currency.length; i++ ){
        let option = `<option value="${currency[i][0]}">${currency[i][0]}</option>`
        select[0].innerHTML += option
        select[1].innerHTML += option
    }
}

let inputAmt = document.getElementById("amt-from")
let covertedAmt = document.getElementById("amt-to")
let errorText = document.getElementById("errorMsg")

document.getElementById("convert").addEventListener("click", () => {
    let curr1 = select[0].value
    let curr2 = select[1].value
    let amount = inputAmt.value
    if (curr1 === curr2)
        errorText.style.color = "red"
    else
        errorText.style.color = "transparent"
        convertAmt(curr1, curr2, amount)
})

function convertAmt(curr1, curr2, amount){
    fetch(`https://api.frankfurter.dev/v1/latest?base=${curr1}&symbols=${curr2}`)
    .then((resp) => resp.json())
    .then((data) => {console.log(data)
      const convertedAmount = (amount * data.rates[curr2]).toFixed(2);
      covertedAmt.value = convertedAmount
    });
}