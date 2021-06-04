document.getElementById("genera").addEventListener("click", function() {
    document.getElementById("loadingGif").classList.add("d-none");
    document.getElementById("biglietto").classList.remove("d-none");

    var fullName = document.getElementById("fullname").value;
    var km = document.getElementById("km").value;
    var age = document.getElementById("age").value;

    document.getElementById("tname").innerHTML = fullName;
    document.getElementById("tprice").innerHTML = (km * 0.21).toFixed(2) + " €";

    if (age == "minorenne") {
        document.getElementById("tdiscount").innerHTML = "Sconto Junior"; 
        document.getElementById("tprice").innerHTML = (km * 0.21 * 80 / 100).toFixed(2) + " €";
    } else if (age == "over") {
        document.getElementById("tdiscount").innerHTML = "Sconto Senior";
        document.getElementById("tprice").innerHTML = (km * 0.21 * 60 / 100).toFixed(2) + " €"; 
    };

    document.getElementById("tcarriage").innerHTML = Math.floor(Math.random()*9)+1;
    document.getElementById("tcode").innerHTML = Math.floor(Math.random() * 100001);
});

document.getElementById("annulla").addEventListener("click", function() {
    document.getElementById("loadingGif").classList.remove("d-none");
    document.getElementById("biglietto").classList.add("d-none");
    document.getElementById("fullname").value = "";
    document.getElementById("km").value = "";
    document.getElementById("age").value = "seleziona";
});