const total = document.getElementById("total-counter");
const remaining = document.getElementById("remaining-counter");
const textarea = document.getElementById("textarea");

function update() {
  total.innerText = textarea.value.length;
  remaining.innerText =
    textarea.getAttribute("maxlength") - textarea.value.length;
}

update();

textarea.addEventListener("keyup", () => {
  update();
});
