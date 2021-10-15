var imgs = document.querySelectorAll(".item img");
var close = document.getElementById("close");
console.log(imgs);
var lightBoxContainer = document.getElementById("lightBoxContainer");
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function() {
        lightBoxContainer.style.display = "flex";
    })
}
close.addEventListener('click', function() {
    lightBoxContainer.style.display = "none";
})