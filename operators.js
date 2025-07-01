var eng= 80;
var phy= 90;
var chy= 85;
var mat= 70;
var cs= 93;

var cutoff = ((phy + chy)/2 + mat);
var total = (eng+phy+chy+mat+cs);
var percentage = (total)/500 * 100 ;
var eligible = true;
eligible ? console.log("eligible  ") : console.log("Not");


console.log(`
    the cut off the student is : ${cutoff} 
    total marks scored : ${total}
    percentage obtained : ${percentage}% 
    Eligibilty : ${eligible}
    `);
console.log (Math.round(percentage));