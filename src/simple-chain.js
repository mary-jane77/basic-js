const CustomError = require("../extensions/custom-error");

let chainMaker = {
  chain : '',
  arr : [],
  getLength() {
    this.arr.length
  },
  addLink(value) {
    if(value!==''){
      this.arr.push(value) 
      this.chain+=`( ${value} )~~`
    return this
    }else{
      this.arr.push('') 
      this.chain+=`( ${value} )`
    }
      

  },
  removeLink(position) {
    position = position-1
    if(typeof position !== 'NaN' && position<this.arr.length){
      this.chain = ''
      this.arr=this.arr.filter(function(value, index, arr){ return index!=position})
    for (let el of this.arr){
         el=String(el)
         this.chain +=`( ${el} )~~`
         
      }
    return this
    }else {
      throw new Error;
    }
  
  },
  reverseChain() {
    this.chain = ''
      for (let el of this.arr.reverse()){
         el=String(el)
         this.chain +=`( ${el} )~~`
      }
    return this
  },
  finishChain(value) {
    if(value===undefined){
      this.chain = this.chain.substring(0, this.chain.length-2)
    }else{
      this.arr.push(value)
    this.chain += `( ${value} )`
    }
    return this.chain
  }
};
module.exports = chainMaker;
