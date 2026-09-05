/* 現在表示している問題 */

let current = 0;


/* 問題データ */

const puzzles = {

    1: {

        title: "数字の順に並べてできる言葉は？",

        image:
            "images/数字の順に並べてできる言葉は.png",

        puzzleAnsImage:
            "images/数字の順に並べてできる言葉はAns.png",

        question: "",

        answer: "ネオポルテ",

        hint:
            "画像に書かれているキャラ名を考えてみてください",

        explanation:
            "数字の順番にキャラクター名を並べると、「ネオポルテ」という言葉になります。"

    },


    2: {

        title: "？に入る言葉は？",

        image:
            "images/基地徒歩しの.png",

        puzzleAnsImage:
            "images/基地徒歩しのAns.png",

        question: "",

        answer: "しの",

        hint:
            "ひらがなにして考えてみると？",

        explanation:
            "それぞれの文字をひらがなにして考えると、？に入る言葉は「しの」になります。"

    }

};



/* 問題を開く */

function openPuzzle(id){

    /* 現在の問題を記録 */

    current = id;


    /* 問題データを取得 */

    const puzzle = puzzles[id];


    /* 問題表示 */

    document
        .getElementById("puzzle")
        .classList.remove("hidden");


    /* タイトル */

    document
        .getElementById("title")
        .innerText = puzzle.title;


    /* 問題画像 */

    document
        .getElementById("puzzleImage")
        .src = puzzle.image;


    /* 問題文 */

    document
        .getElementById("question")
        .innerText = puzzle.question;


    /* 回答欄をリセット */

    document
        .getElementById("answer")
        .value = "";


    /* ヒントをリセット */

    document
        .getElementById("hint")
        .innerText = "";


    /* 結果をリセット */

    document
        .getElementById("result")
        .innerText = "";


    /* 答えをリセット */

    document
        .getElementById("answerDisplay")
        .innerText = "";

    document
        .getElementById("answerDisplay")
        .classList.add("hidden");


    /* 答え確認画面をリセット */

    document
        .getElementById("answerConfirm")
        .classList.add("hidden");


    /* 解説画像をリセット */

    document
        .getElementById("puzzleAnsImage")
        .classList.add("hidden");


    /* 解説文章をリセット */

    document
        .getElementById("explanation")
        .innerText = "";

    document
        .getElementById("explanation")
        .classList.add("hidden");


    /* 問題の場所までスクロール */

    document
        .getElementById("puzzle")
        .scrollIntoView({
            behavior:"smooth"
        });

}



/* 答えを確認する */

function checkAnswer(){

    /* 入力された答え */

    const userAnswer =
        document
            .getElementById("answer")
            .value
            .trim();


    /* 正解 */

    if(userAnswer === puzzles[current].answer){

        document
            .getElementById("result")
            .innerText = "🎉 正解！";


        /* 解説画像を設定 */

        document
            .getElementById("puzzleAnsImage")
            .src = puzzles[current].puzzleAnsImage;


        /* 解説画像を表示 */

        document
            .getElementById("puzzleAnsImage")
            .classList.remove("hidden");


        /* 解説文章 */

        document
            .getElementById("explanation")
            .innerText = puzzles[current].explanation;


        /* 解説文章を表示 */

        document
            .getElementById("explanation")
            .classList.remove("hidden");

    }


    /* 不正解 */

    else{

        document
            .getElementById("result")
            .innerText =
            "❌ 不正解！もう一度考えてみよう";

    }

}



/* ヒントを表示 */

function showHint(){

    document
        .getElementById("hint")
        .innerText =
        "💡 ヒント：" + puzzles[current].hint;

}



/* 「答えを見る」を押したとき */

function showAnswerConfirm(){

    document
        .getElementById("answerConfirm")
        .classList.remove("hidden");

}



/* 「はい」を押したとき */

function showAnswer(){

    /* 答えを表示 */

    document
        .getElementById("answerDisplay")
        .innerText =
        "答え：" + puzzles[current].answer;


    /* 答えを表示状態にする */

    document
        .getElementById("answerDisplay")
        .classList.remove("hidden");


    /* 確認画面を消す */

    document
        .getElementById("answerConfirm")
        .classList.add("hidden");

}



/* 「いいえ」を押したとき */

function cancelAnswer(){

    /* 確認画面を消す */

    document
        .getElementById("answerConfirm")
        .classList.add("hidden");

}