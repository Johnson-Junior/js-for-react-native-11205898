function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
  }
  function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num ** 2 : num * 3);
  }
  
  function formatArrayStrings(stringArr, numArr) {
    return stringArr.map((str, index) => {
      const num = numArr[index];
      return num % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
  }