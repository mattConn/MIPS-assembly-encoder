// r-type fn codes
const rTypeFnCodes = {
  "jr": 8,
  "mfhi":16 ,
  "mflo":18 ,
  "mult":24 ,
  "multu":25 ,
  "div":26 ,
  "divu":27 ,
  "add": 32,
  "addu": 33,
  "sub": 34,
  "subu": 35,
  "and": 36,
  "or": 37,
  "slt": 42,
  "sltu": 43,
}

const targetHandler = (e,codes, bitcount) =>{
    const option = e.target.options[e.target.selectedIndex];
    const target = document.querySelector(e.target.dataset.target);
    target.textContent = codes[option.value].toString(2).padStart(bitcount, '0');
};

// r type option handlers
// ======================
// operator
document.querySelector('#r-op').onchange = (e) => targetHandler(e,rTypeFnCodes,6);
// rs
// document.querySelector('#r-rd').onchange = (e) => targetHandler(e,rTypeFnCodes);


const rTypeOp = document.querySelector('#r-op');