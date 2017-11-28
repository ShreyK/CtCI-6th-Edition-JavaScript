var urlify = function(str, length) {
  var strArr = str.split('');
  var pointer = 0;
  var outputStr = "";
  while (pointer < str.length) {
    if (strArr[pointer] === ' ') 
    {
      while(strArr[pointer] === ' ') 
      {
        pointer++; 
      }
      outputStr += '%20';
    } else 
    {
      outputStr += strArr[pointer];
      pointer++;
    }
  }
  return outputStr;
};

console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');
