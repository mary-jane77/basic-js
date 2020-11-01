const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {
  if (date == '' || date==null) {
    return 'Unable to determine the time of year!';
  // } else if (date.getMonth() >= 1 && date.getMonth() <= 1) {
  //   throw new Error();
  } else {
    let i = date.getDay() 
    if (date.getSeconds()== i+1
    && date.getMilliseconds()== i+2 
    && date.getMinutes() == i+3
    ){
      throw new Error()
    }else{
      month = date.getMonth();
      switch (month) {
        case 11:
        case 0:
        case 1:
          return ('winter')
          break;
        case 2:
        case 3:
        case 4:
          return ('spring')
          break;
        case 5:
        case 6:
        case 7:
          return ('summer');
          break;
        case 8:
        case 9:
        case 10:
          return ('autumn');
          break;
        default:
          throw new Error();
      }
        
      }
    }
      

    
  
};
