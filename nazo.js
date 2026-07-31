let current = 0;

const puzzles = {

1:{
title:"一つ目",

image:"images/数字の順に並べてできる言葉は.png",

puzzleAnsImage:"images/数字の順に並べてできる言葉はAns.png",

question:"数字の順に並べてできる言葉は？",

answer:"ネオポルテ",

hint:
"画像に書かれているキャラ名を考えてみてください"
},

};


function openPuzzle(id){

current=id;

document
.getElementById("puzzle")
.classList
.remove("hidden");

document
.getElementById("title")
.innerText=
puzzles[id].title;

document
.getElementById("puzzleImage")
.src=
puzzles[id].image;

document
.getElementById("question")
.innerText=
puzzles[id].question;

document
.getElementById("hint")
.innerText="";

document
.getElementById("result")
.innerText="";

window.scrollTo({
top:600,
behavior:"smooth"
});

}



function checkAnswer(){


let input=
document
.getElementById("answer")
.value;

if(input===puzzles[current].answer){

document
.getElementById("result")
.innerText=
"🎉 正解！";

document
.getElementById("puzzleAnsImage")
.src=
puzzles[current].puzzleAnsImage;

document
.getElementById("puzzleAnsImage")
.classList
.remove("hidden");

}else{
document
.getElementById("result")
.innerText=
"❌ 不正解！もう一度考えてみよう";
}
}

function showHint(){
document
.getElementById("hint")
.innerText=
"💡 "+puzzles[current].hint;
}