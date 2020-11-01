const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let result=0
  backyard.forEach(cats=> {
    cats.forEach(cat=>cat==='^^'? result++ : '' )
  })
  return result
};
