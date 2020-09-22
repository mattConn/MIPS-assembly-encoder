// r-type fn codes
const rType = {
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

const targetHandler = (e,codes) =>{
    const option = e.target.options[e.target.selectedIndex];
    const target = document.querySelector(option.dataset.target);
    target.textContent = codes[option.value].toString(2).padStart(6, '0');
};

// r type option handlers
// ======================
// operator
document.querySelector('#r-op').onchange = (e) => targetHandler(e,rType);


const rTypeOp = document.querySelector('#r-op');