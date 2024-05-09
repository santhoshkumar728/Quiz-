let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

btn1.onclick = function() {
    btn1.style.backgroundColor = "green";
    btn2.style.backgroundColor = "white";
    btn3.style.backgroundColor = "white";
    btn4.style.backgroundColor = "white";

};

btn2.onclick = function() {
    btn1.style.backgroundColor = "white";
    btn2.style.backgroundColor = "red";
    btn3.style.backgroundColor = "white";
    btn4.style.backgroundColor = "white";
};

btn3.onclick = function() {
    btn1.style.backgroundColor = "white";
    btn2.style.backgroundColor = "white";
    btn3.style.backgroundColor = "red";
    btn4.style.backgroundColor = "white";
};

btn4.onclick = function() {
    btn1.style.backgroundColor = "white";
    btn2.style.backgroundColor = "white";
    btn3.style.backgroundColor = "white";
    btn4.style.backgroundColor = "red";
};


let btn11 = document.getElementById("btn11");
let btn12 = document.getElementById("btn12");
let btn13 = document.getElementById("btn13");
let btn14 = document.getElementById("btn14");

btn11.onclick = function() {
    btn11.style.backgroundColor = "red";
    btn12.style.backgroundColor = "white";
    btn13.style.backgroundColor = "white";
    btn14.style.backgroundColor = "white";

};

btn12.onclick = function() {
    btn11.style.backgroundColor = "white";
    btn12.style.backgroundColor = "red";
    btn13.style.backgroundColor = "white";
    btn14.style.backgroundColor = "white";
};

btn13.onclick = function() {
    btn11.style.backgroundColor = "white";
    btn12.style.backgroundColor = "white";
    btn13.style.backgroundColor = "red";
    btn14.style.backgroundColor = "white";
};

btn14.onclick = function() {
    btn11.style.backgroundColor = "white";
    btn12.style.backgroundColor = "white";
    btn13.style.backgroundColor = "white";
    btn14.style.backgroundColor = "green";
};


let btn21 = document.getElementById("btn21");
let btn22 = document.getElementById("btn22");
let btn23 = document.getElementById("btn23");
let btn24 = document.getElementById("btn24");

btn21.onclick = function() {
    btn21.style.backgroundColor = "red";
    btn22.style.backgroundColor = "white";
    btn23.style.backgroundColor = "white";
    btn24.style.backgroundColor = "white";

};

btn22.onclick = function() {
    btn21.style.backgroundColor = "white";
    btn22.style.backgroundColor = "green";
    btn23.style.backgroundColor = "white";
    btn24.style.backgroundColor = "white";
};

btn23.onclick = function() {
    btn21.style.backgroundColor = "white";
    btn22.style.backgroundColor = "white";
    btn23.style.backgroundColor = "red";
    btn24.style.backgroundColor = "white";
};

btn24.onclick = function() {
    btn21.style.backgroundColor = "white";
    btn22.style.backgroundColor = "white";
    btn23.style.backgroundColor = "white";
    btn24.style.backgroundColor = "red";
};

let btn31 = document.getElementById("btn31");
let btn32 = document.getElementById("btn32");
let btn33 = document.getElementById("btn33");
let btn34 = document.getElementById("btn34");

btn31.onclick = function() {
    btn31.style.backgroundColor = "red";
    btn32.style.backgroundColor = "white";
    btn33.style.backgroundColor = "white";
    btn34.style.backgroundColor = "white";

};

btn32.onclick = function() {
    btn31.style.backgroundColor = "white";
    btn32.style.backgroundColor = "green";
    btn33.style.backgroundColor = "white";
    btn34.style.backgroundColor = "white";
};

btn33.onclick = function() {
    btn31.style.backgroundColor = "white";
    btn32.style.backgroundColor = "white";
    btn33.style.backgroundColor = "red";
    btn34.style.backgroundColor = "white";
};

btn34.onclick = function() {
    btn31.style.backgroundColor = "white";
    btn32.style.backgroundColor = "white";
    btn33.style.backgroundColor = "white";
    btn34.style.backgroundColor = "red";
};

let btn41 = document.getElementById("btn41");
let btn42 = document.getElementById("btn42");
let btn43 = document.getElementById("btn43");
let btn44 = document.getElementById("btn44");

btn41.onclick = function() {
    btn41.style.backgroundColor = "red";
    btn42.style.backgroundColor = "white";
    btn43.style.backgroundColor = "white";
    btn44.style.backgroundColor = "white";

};

btn42.onclick = function() {
    btn41.style.backgroundColor = "white";
    btn42.style.backgroundColor = "red";
    btn43.style.backgroundColor = "white";
    btn44.style.backgroundColor = "white";
};

btn43.onclick = function() {
    btn41.style.backgroundColor = "white";
    btn42.style.backgroundColor = "white";
    btn43.style.backgroundColor = "green";
    btn44.style.backgroundColor = "white";
};

btn44.onclick = function() {
    btn41.style.backgroundColor = "white";
    btn42.style.backgroundColor = "white";
    btn43.style.backgroundColor = "white";
    btn44.style.backgroundColor = "red";
};
let countervalue = document.getElementById("value");
let submitbtn = document.getElementById("submit");
let note = document.getElementById("note");
let note1 = document.getElementById("note1");
let counter = 100;

let countertimer = function() {
    counter = counter - 1;
    countervalue.textContent = counter;
    if (counter == 0) {
        note1.textContent = "Time up!!";
        clearInterval(intervelid);
    } else {
        submitbtn.onclick = function() {
            clearInterval(intervelid);
            note.textContent = "Sucessfully Completed The Quiz!!";
        }
    }
};
let intervelid = setInterval(countertimer, 1000);