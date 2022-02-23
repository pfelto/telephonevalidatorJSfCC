function telephoneCheck(str) {
  let digitCount = str.match(/\d/g).length;

  if (str.length < 10) return false;

  if (/[^ -\d)(]/g.test(str)) return false;

  if (digitCount > 11) return false;

  if (digitCount === 11 && !/^1/.test(str)) return false;

  if (str.length === 10 && !/^\d+$/.test(str)) return false;

  if (str.length === 11 && !/^1\d+$/.test(str)) return false;

  if (str.length >= 12) {
    if (!/-\d\d\d\d$| \d\d\d\d$/.test(str)) return false;
    if (/\(/.test(str) || /\)/.test(str)) {
      if (!/\(\d{3}\)/.test(str)) return false;
    }
  }

  return true;
}

console.log(telephoneCheck("555)-555-5555"));
console.log(telephoneCheck("(555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("555-555-5555"));

module.exports = telephoneCheck;
