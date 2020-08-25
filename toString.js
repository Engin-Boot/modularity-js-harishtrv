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
  console.log("manual color coder");
  let pairNumber=1;
  for(let majorIndex = 0; majorIndex < MajorColors.length; majorIndex++) {
    for(let minorIndex = 0; minorIndex < MinorColors.length; minorIndex++) {
      console.log(`${MajorColors[majorIndex]} ${MinorColors[minorIndex]} = ${pairNumber}`);
      pairNumber++;
    }
}
}
module.exports=toString;
