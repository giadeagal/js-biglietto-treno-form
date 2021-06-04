var genera = document.getElementById("genera");
var annulla = document.getElementById("annulla");
var fullName = document.getElementById("fullname").value;
var km = document.getElementById("km").value;
var age = document.getElementById("age").value;


genera.addEventListener("click", function() {
    document.getElementById("loadingGif").classList.add("d-none");
});

annulla.addEventListener("click", function() {
    document.getElementById("loadingGif").classList.remove("d-none");
});