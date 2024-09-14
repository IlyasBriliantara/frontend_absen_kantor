document.getElementById("toggleButton").addEventListener("click", function() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
});

document.getElementById("closeButton").addEventListener("click", function() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("open");
});
