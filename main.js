let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0;
let counterDOM = document.querySelector("#counter");
let decreaseDOM = document.querySelector("#decrease");
let increaseDOM = document.querySelector("#increase");

counterDOM.innerHTML = counter;

decreaseDOM.addEventListener("click", clickEvent);
increaseDOM.addEventListener("click", clickEvent);

function clickEvent(){
    // console.log(this.id);
    this.id == "increase" ? counter += 1 : counter -= 1;
    localStorage.setItem('counter', counter);
    counterDOM.innerHTML = counter;
}