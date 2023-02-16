function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("Enter your x: ", '');
let n = prompt("Enter your n: ", '');

if (n < 1) alert("You made a mistake"); 
else alert(pow(x, n));