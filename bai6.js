let n = +prompt("nhập vào số nguyên dương bất kì:");

function reverse(num) {
  let reversed = 0;
  while (num > 0) {
    reversed = (reversed * 10) + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
}

let reversedNumber = reverse(n);
console.log("Số đảo ngược của", n, "là", reversed);