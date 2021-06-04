var genera = document.getElementById("genera");
var annulla = document.getElementById("annulla");
var fullName = document.getElementById("fullname").value;
var km = document.getElementById("km").value;
var age = document.getElementById("age").value;


genera.addEventListener("click", function() {
    document.getElementById("loadingGif").classList.add("d-none");
    document.getElementById("biglietto").classList.remove("d-none");
    document.getElementById("tname").innerHTML = fullName;
    if (age == "minorenne") {
        document.getElementById("tdiscount").innerHTML = "Sconto Junior"; 
    } else if (age == "over") {
        document.getElementById("tdiscount").innerHTML = "Sconto Senior"; 
    };
    document.getElementById("tcarriage").innerHTML = Math.floor(Math.random()*9)+1;
});

annulla.addEventListener("click", function() {
    document.getElementById("loadingGif").classList.remove("d-none");
    document.getElementById("biglietto").classList.add("d-none");

});