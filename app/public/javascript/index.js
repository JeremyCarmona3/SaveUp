function letsGo() {
    location.href = "../public/pages/tutorial.html";
    console.log('letsGo');
}

function tutorial1() {
    location.href = "../public/pages/tutorial.html";
    console.log('viewing tutorial page one');
}

function tutorial2() {
    let i = document.getElementsByClassName('tutorialImg')[0];

    i.src = "../assets/moneygrowth.svg";
    console.log('viewing tutorial page two');
}

function tutorial3() {
    console.log('viewing tutorial page three');
}