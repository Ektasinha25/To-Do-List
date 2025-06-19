const ul = document.getElementById("myUL");

ul.addEventListener("click", function (e) {
  if (e.target.tagName === "li") {
    e.target.classList.toggle("checked");
  } else if (e.target.classList.contains("close")) {
    e.target.parentElement.remove();
  }
});

function addTask() {
  const input = document.getElementById("myInput");
  const task = input.value.trim();

  if (!task) {
    alert("You must write something!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `${task} <span class="close">\u00D7</span>`;
  ul.appendChild(li);

  input.value = "";
}


