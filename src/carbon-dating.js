const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let result = false
  if (typeof sampleActivity !== "string" || sampleActivity == '' ||  Number(sampleActivity)<=0  || Number(sampleActivity)>15  || (isNaN(sampleActivity) && !parseFloat(sampleActivity))) {
    return false
  }else if (!Number.isInteger(Number(sampleActivity))) {
    let part=0
    let arr= sampleActivity.split('')
    if (arr.includes('.', 3)){
      let part=sampleActivity.split('.')[2]/ Math.pow(10,11)
      sampleActivity=parseFloat(sampleActivity)+part
    }
   sampleActivity=parseFloat(sampleActivity)+part
    }else{
      sampleActivity=Number(sampleActivity)
    }
    let t = 0.693/HALF_LIFE_PERIOD
    let logarithm=Math.abs((Math.log(sampleActivity))-(Math.log(MODERN_ACTIVITY)))
    result= Math.ceil(logarithm / t)
    return (result)
};
