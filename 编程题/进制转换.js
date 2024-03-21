const data = "2BC";

function transform(input) {
  let result = 0;
  for (let i = input.length - 1, j = 0; i >= 0; i--, j++) {
    const curNumber = parseInt(input[i], 16);
    result += curNumber * 16 ** j;
    console.log(result);
  }
  return result;
}
console.log(transform(data));
console.log("1".toLowerCase() === "1".toUpperCase());
