const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  turns=Math.pow(2,disksNumber)-1
  speed=3600/turnsSpeed
  seconds=Math.floor(turns*speed)
  return {turns, seconds}
};
