const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  if (typeof options.separator == 'undefined') {
    options.separator = '+';
  }

  let newStr = '';
  let addStr = '';
  if (
    typeof options.additionRepeatTimes != 'undefined' ||
    typeof options.addition != 'undefined'
  ) {
    if(typeof options.addition == 'undefined'){
          options.additionRepeatTimes = 1;
    }
    if (typeof options.additionSeparator == 'undefined') {
      options.additionSeparator = '|';
    }
    addStr = options.addition;
    for (let i = 1; i < parseFloat(options.additionRepeatTimes); i++) {
      addStr += options.additionSeparator + options.addition;
    }
  }
  if (typeof options.repeatTimes == 'undefined') {
    options.repeatTimes = 1;
  }
  newStr = str + addStr;
  for (let i = 1; i < parseFloat(options.repeatTimes); i++) {
    newStr += options.separator + str + addStr;
  }

  return newStr;
};
