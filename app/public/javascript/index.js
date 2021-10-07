function letsGo() {
    location.href = "../public/pages/tutorial.html";
    console.log('letsGo');
}

function tutorial1() {
    let i = document.getElementsByClassName('tutorialImg')[0];
    let h = document.getElementsByClassName('heading')[0];
    let t = document.getElementsByClassName('text')[0];
    let t2 = document.getElementsByClassName('text')[1];

    i.src = "../assets/piggy.svg";
    h.innerHTML = "Save Consistently";
    t.innerHTML = "Set up specific saving goals, and keep track of your progress. Meet any saving goal within a set timeframe through consistent effort and planning."
    t2.innerHTML = "Skip"
    console.log('viewing tutorial page one');
}

function tutorial2() {
    let i = document.getElementsByClassName('tutorialImg')[0];
    let h = document.getElementsByClassName('heading')[0];
    let t = document.getElementsByClassName('text')[0];
    let t2 = document.getElementsByClassName('text')[1];

    i.src = "../assets/moneygrowth.svg";
    h.innerHTML = "Create long-lasting saving habits";
    t.innerHTML = "Develop strong money habits and become smarter with money the more you use the app."
    t2.innerHTML = "Skip"
    console.log('viewing tutorial page two');
}

function tutorial3() {
    let i = document.getElementsByClassName('tutorialImg')[0];
    let h = document.getElementsByClassName('heading')[0];
    let t = document.getElementsByClassName('text')[0];
    let t2 = document.getElementsByClassName('text')[1];

    i.src = "../assets/moneytrees.svg";
    h.innerHTML = "Get back to enjoying life";
    t.innerHTML = "Learn the concept of thinking objectively, when it comes to money. Be rewarded for meeting your goals."
    t2.innerHTML = "Next";
    console.log('viewing tutorial page three');
}

function skipTutorial() {
    location.href = "openingScreen1.html";
    console.log('viewing opening screen');
}

function customGoal1() {
    location.href = "customizingGoal1.html";
    console.log('viewing custom goal page one');
}

function customGoal2() {
    location.href = "customizingGoal2.html";
    console.log('viewing custom goal page two');
}

function customGoal3() {
    location.href = "customizingGoal3.html";
    console.log('viewing custom goal page three');
}

function homepage() {
    location.href = "homepage.html";
    console.log('viewing homepage');
}