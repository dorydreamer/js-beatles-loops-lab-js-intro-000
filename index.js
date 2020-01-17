// add solution here
function theBeatlesPlay(musicians, instruments) {
var allBeatles = [];
for (var i=0; i < musicians.length; i++) {
  allBeatles.push(musicians[i] + " plays " + instruments[i]);
}
return allBeatles;
}

function johnLennonFacts(facts) {
  var results = [];
  var count = 0;
  while (count < facts.length) {
    results.push(facts[count] + "!!!");
    count++;
  }
  return results;
}
