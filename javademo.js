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

//Filter Example

let arrOfFiltered = arr3.filter(arr_filter)
function arr_filter(val){
    return val <= 100
}
console.log(arrOfFiltered)

let arr2d = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g']
]

let count = arr2d.flat().reduce((accumulator, curval) => {
    if (accumulator[curval])
        accumulator[curval]++
    else
        accumulator[curval] = 1
    return accumulator
}, {})
console.log(count)

//Closure example
function add(x){
    return function(y){
        return x + y
    }
}

let addWithY = add(10)
addWithY(5)

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