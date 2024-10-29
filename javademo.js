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
    // var three= oneval+twoval
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
    result.innerText= result.textContent + ((inputvalue.value * 9 / 5) + 32).toFixed(2)
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
let sayslength = document.getElementById("sayslength")

function callength(){
    let textlength = textplace.innerText
    console.log(textlength.length)
    sayslength.innerText = textlength.length
}