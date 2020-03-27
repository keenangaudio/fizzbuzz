$(document).ready(function () {
    let val = prompt("enter a number");
    let num = parseInt(val, 10);
    if (isNaN(num) || val % 1) {
        alert('not a number, or used decimal!');
    }
    else {
        fizzbuzz(num);
    }
});

const fizzbuzz = (val) => {
    for (let i = 1; i <= val; i++) {
        let str = "";
        if (!(i % 3)) str = "fizz";
        if (!(i % 5)) str += "buzz";
 
        $("body").append((str || i) + '<br>');
    }
}
