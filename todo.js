const addButton = document.getElementById("add-button");
const display = document.getElementById("window");

//FUNCTION FOR REMOVING TASKS

function removeTask(e) {
  e.currentTarget.parentElement.remove();
}

// FUNCTION TO MARK TASKS AS COMPLETE

function markAsCompleted(e) {
  e.currentTarget.parentElement.style.color = "ForestGreen";
}

// FUNCTION TO ADD TASK TO LIST.
// EACH TASK HAS A DELETE BUTTON.
// AND A BUTTON TO MARK TASK AS COMPLETE

function addItem() {
  const entry = document.getElementById("entry");

  const div = document.createElement("div");
  const child = document.createElement("div");
  div.style.width = "446px";
  //   div.style.height = "80px";
  div.style.backgroundColor = "white";
  div.style.border = " 2px solid black";
  div.style.display = "flex";
  div.style.alignItems = "center";
  //   div.style.overflow = "hidden";

  child.style.backgroundColor = "white";
  child.style.fontSize = "30px";
  child.style.fontWeight = "bolder";
  child.textContent = entry.value;
  entry.value = "";
  child.style.marginLeft = "30px";
  child.style.overflow = "hidden";
  child.style.fontFamily = "monospace";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";

  deleteButton.style.height = "50px";
  deleteButton.style.width = "50px";

  deleteButton.style.fontSize = "20px";
  deleteButton.style.fontWeight = "bolder";
  deleteButton.style.position = "absolute";
  deleteButton.style.right = "-140px";
  deleteButton.addEventListener("click", removeTask);

  const markButton = document.createElement("button");
  markButton.innerText = "✓";

  markButton.style.height = "50px";
  markButton.style.width = "50px";

  markButton.style.fontSize = "20px";
  markButton.style.fontWeight = "bolder";
  markButton.style.position = "absolute";
  markButton.style.right = "-80px";
  markButton.addEventListener("click", markAsCompleted);

  div.appendChild(markButton);
  div.appendChild(deleteButton);
  display.appendChild(div);
  div.appendChild(child);
}

addButton.addEventListener("click", addItem);
