const red=document.querySelector(".red");
const cyan=document.querySelector(".cyan");
const violet=document.querySelector(".violet");
const orange=document.querySelector(".orange");
const pink=document.querySelector(".pink");
const center=document.querySelector(".center");


//console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor=(selectedElement)=>{
 return window.getComputedStyle(selectedElement).backgroundColor;
 };
// console.log(getBGColor(pink));
//   var pinkelement=getBGColor(pink);
//   pink.addEventListener('mouseenter',()=>{
//      center.style.background=pinkelement;
//  }); 
 const magicColorChange=(element,color)=>{
   return element.addEventListener("mouseenter",()=>{
    center.style.background=color;
 });

};
 magicColorChange (red,getBGColor(red));
 magicColorChange(cyan,getBGColor(cyan));
 magicColorChange (violet,getBGColor(violet));
 magicColorChange (orange,getBGColor(orange));
 magicColorChange (pink,getBGColor(pink));