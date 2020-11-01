const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  encrypt(message, key) {
    
   
    if(typeof message !== 'undefined' || typeof key !== 'undefined'){
      const alphabet = [
        'A','B','C','D','E','F',
        'G','H','I','J','K','L',
        'M','N','O','P','Q','R',
        'S','T','U','V','W','X',
        'Y','Z','A','B','C','D','E','F',
        'G','H','I','J','K','L',
        'M','N','O','P','Q','R',
        'S','T','U','V','W','X',
        'Y','Z','A','B','C','D','E','F',
        'G','H','I','J','K','L',
        'M','N','O','P','Q','R',
        'S','T','U','V','W','X',
        'Y','Z','A','B','C','D','E','F',
        'G','H','I','J','K','L',
        'M','N','O','P','Q','R',
        'S','T','U','V','W','X',
        'Y','Z',
      ];
       let arr=[]
       
        if(typeof message !== 'undefined' || typeof key !== 'undefined'){
          let mes=[]
          message.split(' ').map(message=>{
                message.split('').map(el=>{
            el=el.toUpperCase()
            if (alphabet.includes(el)){
              mes.push(alphabet.indexOf(el))
            }
          })
          let keyP = []
         
          key.split('').map(el=>{
            el=el.toUpperCase()
            if (alphabet.includes(el)){
              keyP.push(alphabet.indexOf(el))
            }
          })
          let newKey =[]
          let k = message.length/key.length
          for(let j=0; j<k; j++){
           newKey = newKey.concat(keyP)
          }
          newKey=newKey.splice(0,message.length)
        
        let res =''  
     for(let i = 0; i<message.length; i++){
        let location =(mes[i]+newKey[i])%26
        res +=alphabet[location]
         
     }
            arr.push(res)
            
          })
      }

    }else{
      throw new Error
    }
  }    
  decrypt(message, key) {
    if(typeof message !== 'undefined' || typeof key !== 'undefined'){

    }else{
      throw new Error
    }
  }
}

module.exports = VigenereCipheringMachine;
