var num = 1

function previous() {
    if (num > 0){
        num --
    }
    else {
        num = 2;
    }
    console.log(num) 
    changeProject()
}

function next() {
    if (num < 2){
        num ++
    }

    else{
        num = 0;
    }
    console.log(num)
    changeProject()
}

function changeProject() {
    const projectOne = document.querySelector('.projectOne');
    const projectTwo = document.querySelector('.projectTwo');
    const projectThree = document.querySelector('.projectThree');

    if (num == 0){
        projectOne.style.display = "flex";
        projectTwo.style.display = "none";
        projectThree.style.display = "none";
    }
    else if (num == 1){
        projectOne.style.display = "none";
        projectTwo.style.display = "flex";
        projectThree.style.display = "none";
    }
    else {
        projectOne.style.display = "none";
        projectTwo.style.display = "none";
        projectThree.style.display = "flex";
    }
}


function redirect_projectOne() {
    document.location.href = "https://strgiorgio.github.io/ProjetoDoe/";
}

function redirect_projectTwo() {
    document.location.href = "https://github.com/strGiorgio/PyMob2.1";
}

function redirect_projectThree() {
    document.location.href = "https://github.com/strgiorgio";
}