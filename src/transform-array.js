const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Array.isArray(arr) && arr.length > 0){
    const str = (element) =>typeof element == 'string';
    if(arr.some(str)){
    if(typeof arr[0] == 'string' && arr.length===1 ){
      return []
    }
    length= arr.length-1
    nArr=arr.map((item, index)=>{
      if(Array.isArray(item)){
        throw new error
      }
      else{
        if ( item == "--discard-prev" && index == 0 || item == "--double-prev" && index == 0 || item == '--double-next' && index == length || item == '--discard-next' && index == length){
          return arr.splice(index,1)
      }
      else{
          switch(item){
          case '--discard-next':
            if (arr[index+1]!=null){
              if(arr[index+2]=='--double-prev' || arr[index+2]=='--discard-prev'){
                return arr.splice(index,3)
              }
          return arr.splice(index,2)}
          break
          case '--discard-prev':
            if (arr[index-1]!=null){
          return arr.splice(index-1,2)}
          break
          case '--double-next':
            
            if (arr[index+1]!=null){
              if(arr[index+2]=='--double-prev'){
                 arr[index]=arr[index+1]
                 arr[index+2]=arr[index]
              }else{
                return arr[index]=arr[index+1]
              }
              
            }
          break          
          case '--double-prev':
            if (arr[index-1]!=null){
          return arr[index]=arr[index-1]
          }
          break
          default:
          break
      }
      }}
    }
     )
  }
  else{
    return arr
  }
    }else{
      if (arr.length==0){
        return ([])
      } else{
        throw new Error
      }
      
    }
    nArr =[...arr]
    return nArr
};

