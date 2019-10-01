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

fizzbuzz = (val) => {
    for (let i = 1; i <= val; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            $("body").append("fizzbuzz<br>");
        }
        else if (!(i % 5)) {
            $("body").append("buzz<br>");
        }
        else if (!(i % 3)) {
            $("body").append("fizz<br>");
        }
        else {
            $("body").append(i + '<br>');
        }
    }
}