var afinn;

function preload() {
  afinn = loadJSON('afinn111.json');
}


function setup() {
  noCanvas();
  console.log(afinn);

  var txt = select('#txt');
  txt.input(typing);

  function typing() {
    var textinput = txt.value();
    var words = textinput.split(/\W/);
    console.log(words);
    var scoredwords = [];
    var totalScore = 0;
    for (var i = 0; i < words.length; i++) {
      var word = words[i].toLowerCase();
      if (afinn.hasOwnProperty(word)) {
        var score = afinn[word];
        console.log(word, score);
        totalScore += Number(score);
        scoredwords.push(' ' + word + ': ' + score);
      }
    }
    var scoreP = select('#score');
    scoreP.html('score: ' + totalScore);
    var comp = select('#comparative');
    comp.html('comparative: ' + totalScore / words.length);
    var wordlist = select('#wordlist');
    wordlist.html(scoredwords);

    // console.log(txt.value());
  }
}

function draw() {

}


// var table;
// var afinn = {}
//
// function preload() {
//   table = loadTable('AFINN-111.txt', 'tsv');
// }
//
// function setup() {
//   noCanvas();
//   console.log(table);
//   for (var i = 0; i < table.getRowCount(); i++) {
//     var row = table.getRow(i);
//     var word = row.get(0);
//     var score = row.get(1);
//
//     afinn[word] = score;
//     // console.log(word, score);
//   }
//   console.log(afinn);
//   save(afinn, 'afinn111.json')
// }
//
// function draw() {
//
// }




// function setup() {
//     createCanvas(300, 200);
//     drawData();
//     console.log('running');
//
//     var button = select('#submit');
//     button.mousePressed(submitWord);
// }
//
// function drawData() {
//   loadJSON('/all', gotData);
// }
//
// function submitWord() {
//   var word = select('#word').value();
//   var score = select('#score').value();
//   console.log(word, score);
//
//   loadJSON('add/' + word + '/' + score, finished);
//   function finished(data) {
//     console.log(data);
//     drawData();
//   }
// }
//
// function gotData(data) {
//   background(51);
//   console.log(data);
//   var keys = Object.keys(data);
//   for (var i = 0; i < keys.length; i++) {
//     var word = keys[i];
//     var score = data[word];
//     var x = random(width);
//     var y = random(height);
//     fill(255);
//     textSize(12);
//     text(word, x, y);
//   }
//   // console.log(keys);
// }
