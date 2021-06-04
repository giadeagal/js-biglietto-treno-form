var genera = document.getElementById("genera");
var annulla = document.getElementById("annulla");

genera.addEventListener("click", function() {
    document.getElementById("loadingGif").classList.add("d-none");
});

annulla.addEventListener("click", function() {
    document.getElementById("loadingGif").classList.remove("d-none");
});