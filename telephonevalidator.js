function telephoneCheck(str) {
  if (str.length < 10) return false;

  if (/[^ -\d)(]/g.test(str)) return false;

  //Could also have a counter for number of numbers in str? and if those are not both 10 false?
  //need the number of digits later as if there are 11 then 1st place has to be a 1
  if (str.length === 10 && !/^\d+$/.test(str)) return false;

  if (str.length === 11 && !/^1\d+$/.test(str)) return false;

  if (str.length >= 12) {
    if (!/-\d\d\d\d$| \d\d\d\d$/.test(str)) return false;
  }

  return true;
}

//console.log(telephoneCheck("555-555-5555"));
//console.log(telephoneCheck("555 555 5555"));
//console.log(telephoneCheck("555 5555 5 55"));
console.log(telephoneCheck("123**&!!asdf#"));
console.log(telephoneCheck("5555555555"));

module.exports = telephoneCheck;
