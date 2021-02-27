 module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr = new Array();
  let open = new Array();
  let close = new Array();

  for (let i = 0; i < str.length; i++)
    arr.push(str[i]);
  if (arr.length % 2 != 0)
    return false;
  for (let i = 0; i < bracketsConfig.length; i++) {
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < open.length; j++) {
      if (arr[i] == open[j] && arr[i + 1] == close[j]) {
        arr.splice(i, 2);
      }
    }
  }
  return arr.length > 0 ? false : true;
}
