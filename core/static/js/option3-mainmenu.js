const projectTwo = document.querySelector(".projectTwo")
var num = 1

function previous() {
    if (num > 0){
        num --
    }
    else {
        num = 2;
    }
     console.log(num) 
}

function next() {
    if (num < 2){
        num ++
    }
    else{
        num = 0;
    }
    console.log(num)
}