console.log("hello windows");
function coins(Totalcoins, denomination) {
  denomination.sort((a, b) => b - a);
  let result = {};
  let totals = Totalcoins;
  for (let deno of denomination) {
    if (totals >= deno) {
      let count = Math.floor(totals / deno);
      totals -= count * deno;
      if (count > 0) {
        result[deno] = count;
      }
    }
  }
  return result;
}
console.log(coins(47, [1, 5, 10, 20]));
