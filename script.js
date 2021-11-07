
let income = document.getElementById("income");
let div = document.getElementById("para");
let ex = document.getElementById("expence");
let div2 = document.getElementById("para2")
let dis = document.getElementById("display");
let table = document.getElementById("list");


var display;
let amount;
let examount;
let spend;
let remeaningamount;




income.addEventListener("click", function () {

    let inputbox1 = document.createElement("input")
    div.appendChild(inputbox1);

    inputbox1.addEventListener("change", function () {
        display = this.value;
        console.log(display);
    })





    let inputbox2 = document.createElement("input");

    div.appendChild(inputbox2);

    inputbox2.addEventListener("change", function () {
        amount = this.value;
        console.log(amount);
    })


    let btn = document.createElement("button");
    btn.innerText = "Add";
    div.appendChild(btn);

    btn.addEventListener("click", function () {

        alert(`You added ${amount} for Salary`)
    })





})

ex.addEventListener("click", function () {

    let inputbox3 = document.createElement("input");
    div2.appendChild(inputbox3);

    inputbox3.addEventListener("change", function () {
        examount = this.value;
        console.log(examount);
    })


    let inputbox4 = document.createElement("input");
    div2.appendChild(inputbox4);

    inputbox4.addEventListener("change", function () {
        spend = this.value;
        console.log(spend);
    })

    let btn1 = document.createElement("button");
    btn1.innerText = "Add";
    div2.appendChild(btn1);

    btn1.addEventListener("click", function () {

        //alert(`You added  for Salary${spend}`)
        alert(`You added ${spend} for Salary`)
    })

})



dis.addEventListener('click', function () {
    console.log(amount);
    console.log(amount - spend);

    remeaningamount = amount - spend;

    let data = [display, amount, examount, spend, remeaningamount];

    let list = document.getElementById("list");

    data.forEach((item) => {

        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li)

    })











})
