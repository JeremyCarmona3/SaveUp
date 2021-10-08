function needs () {
    //change the icons
    var square1 = document.getElementById("square1")
    var square2 = document.getElementById("square2")
    var square3 = document.getElementById("square3")
    var square4 = document.getElementById("square4")
    var square5 = document.getElementById("square5")
    var square6 = document.getElementById("square6")

    square1.style.backgroundColor = "#91C499"
    square2.style.backgroundColor = "#91C499"
    square3.style.backgroundColor = "#91C499"
    square4.style.backgroundColor = "#91C499"
    square5.style.backgroundColor = "#91C499"
    square6.style.backgroundColor = "#91C499"

    //change the images
    document.getElementById("img1").src ="../assets/groceries.svg"
    document.getElementById("img2").src ="../assets/transportation.svg"
    document.getElementById("img3").src ="../assets/medicine.svg"
    document.getElementById("img4").src ="../assets/supplies.svg"
    document.getElementById("img5").src="../assets/pizza.svg"   

    //change the text
    document.getElementById("txt1").innerHTML ="Groceries"
    document.getElementById("txt2").innerHTML ="Transportation"
    document.getElementById("txt3").innerHTML ="Medicine"
    document.getElementById("txt4").innerHTML ="Supplies"
    document.getElementById("txt5").innerHTML ="Food"

    document.getElementById("needs").style.color = "black"
    document.getElementById("wants").style.color = "#A4A4A4"
}


function wants () {
    var square1 = document.getElementById("square1")
    var square2 = document.getElementById("square2")
    var square3 = document.getElementById("square3")
    var square4 = document.getElementById("square4")
    var square5 = document.getElementById("square5")
    var square6 = document.getElementById("square6")

    square1.style.backgroundColor = "#FFA1A1"
    square2.style.backgroundColor = "#FFA1A1"
    square3.style.backgroundColor = "#FFA1A1"
    square4.style.backgroundColor = "#FFA1A1"
    square5.style.backgroundColor = "#FFA1A1"
    square6.style.backgroundColor = "#FFA1A1"

    //change the images
    document.getElementById("img1").src ="../assets/shoes.svg"
    document.getElementById("img2").src ="../assets/shirt.svg"
    document.getElementById("img3").src ="../assets/makeup.svg"
    document.getElementById("img4").src ="../assets/travel.svg"
    document.getElementById("img5").src="../assets/ipad.svg"

    //change the text
    document.getElementById("txt1").innerHTML ="Shoes"
    document.getElementById("txt2").innerHTML ="Clothes"
    document.getElementById("txt3").innerHTML ="Makeup"
    document.getElementById("txt4").innerHTML ="Gadgets"
    document.getElementById("txt5").innerHTML ="Travel"

    document.getElementById("needs").style.color = "#A4A4A4"
    document.getElementById("wants").style.color = "black"
    
}