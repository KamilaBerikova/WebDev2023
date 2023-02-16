let n = +prompt("Enter your number: "),
    isPrime = false;

for (let i = 2; i <= n; i++) {
    isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
        isPrime = false;
        break;
    }
  }
  if (isPrime) alert( i );
}