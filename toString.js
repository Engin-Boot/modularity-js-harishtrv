const MajorColors = [
  "white",
  "red",
  "black",
  "yellow",
  "violet"
];
const MinorColors = [
  "blue",
  "orange",
  "green",
  "brown",
  "slate"
]; 
function toString(){
  let pairNumber=1;
  let str = '';
  for(let majorIndex = 0; majorIndex < MajorColors.length; majorIndex++) {
    for(let minorIndex = 0; minorIndex < MinorColors.length; minorIndex++) {
      str = str + `${MajorColors[majorIndex]} ${MinorColors[minorIndex]} = ${pairNumber}\n`;
      pairNumber++;
    }
}
return str;
}
module.exports=toString;
