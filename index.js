// r-type fn codes
const rTypeFnCodes = {
  "NONE":0,
  "sll":0,
  "srl":2,
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

// 32 registers
const registers = [];
for(let i = 0; i < 32; i++) registers.push(i);

const targetHandler = (e,codes, bitcount) =>{
    const option = e.target.options[e.target.selectedIndex];
    console.log(e.target.dataset.target);
    const target = document.querySelector(e.target.dataset.target);
    target.textContent = codes[option.value].toString(2).padStart(bitcount, '0');

    let binStr = "";
    document.querySelectorAll('#r-instruction span').forEach(i => {binStr += i.textContent; console.log(i.textContent)});
    console.log(binStr,binStr.length,parseInt(binStr,2).toString(16).padStart(8,'0').toUpperCase());
    document.querySelector('#r-instruction .hex').textContent = parseInt(binStr,2).toString(16).padStart(8,'0').toUpperCase();
};

// show/hide info section
document.querySelector('.toggle-btn').addEventListener('click',()=>{
    document.querySelector('#info').classList.toggle('hidden');
    const text = document.querySelector('.toggle-btn').textContent;
    document.querySelector('.toggle-btn').textContent = text == '[Show]' ? '[Hide]' : '[Show]';


});

// r type option handlers
// ======================
// operator
document.querySelector('#r-op').onchange = (e) => targetHandler(e,rTypeFnCodes,6);
// rd
document.querySelector('#r-rd').onchange = (e) => targetHandler(e,registers,5);
// rs
document.querySelector('#r-rs').onchange = (e) => targetHandler(e,registers,5);
// rt
document.querySelector('#r-rt').onchange = (e) => targetHandler(e,registers,5);
// shamt 
document.querySelector('#r-shamt').onchange = (e) => targetHandler(e,registers,5);


const rTypeOp = document.querySelector('#r-op');