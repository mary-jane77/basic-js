const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
    if(Array.isArray(members )){
      let result = members.filter(item => typeof item == "string").map(item=> item.replace(/ /g,'').charAt(0).toUpperCase().charCodeAt()).sort().map(item=>String.fromCharCode(item)).join('')
      return result
    }else{
      return false
    }

};
