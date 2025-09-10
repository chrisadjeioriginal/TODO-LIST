const addButton = document.getElementById("add-button");
const display = document.getElementById("window");

//FUNCTION FOR REMOVING TASKS

function removeTask(e) {
  e.currentTarget.parentElement.parentElement.remove();
}

// FUNCTION TO MARK TASKS AS COMPLETE

function markAsCompleted(e) {
  e.currentTarget.parentElement.parentElement.style.color = "ForestGreen";
}

// FUNCTION TO ADD TASK TO LIST.
// EACH TASK HAS A DELETE BUTTON.
// AND A BUTTON TO MARK TASK AS COMPLETE

function addItem() {
  const entry = document.getElementById("entry");

  const parentDiv = document.createElement("div");

  parentDiv.style.backgroundColor = "blue";
  parentDiv.style.height = "120px";
  parentDiv.style.display = "flex";

  display.appendChild(parentDiv);

  const div = document.createElement("div");
  const child = document.createElement("div");
  div.style.width = "370px";

  div.style.backgroundColor = "white";
  div.style.border = " 2px solid black";

  child.style.fontSize = "30px";
  child.style.fontWeight = "bolder";
  child.textContent = entry.value;
  entry.value = "";
  child.style.marginLeft = "30px";
  child.style.fontFamily = "monospace";
  child.style.maxHeight = "100%";
  child.style.overflowY = "scroll";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.style.height = "30px";
  deleteButton.style.width = "30px";
  deleteButton.style.fontSize = "30px";
  deleteButton.style.fontWeight = "bolder";

  deleteButton.style.display = "flex";
  deleteButton.style.justifyContent = "center";
  deleteButton.style.alignItems = "center";

  deleteButton.addEventListener("click", removeTask);

  const markButton = document.createElement("button");
  markButton.innerText = "✓";

  markButton.style.height = "30px";
  markButton.style.width = "30px";

  markButton.style.fontSize = "30px";
  markButton.style.fontWeight = "bolder";

  markButton.style.display = "flex";
  markButton.style.justifyContent = "center";
  markButton.style.alignItems = "center";
  markButton.addEventListener("click", markAsCompleted);

  parentDiv.appendChild(div);
  div.appendChild(child);

  const displayBorderWidth = parseInt(getComputedStyle(div).borderWidth, 10);
  const actionButtonsHolder = document.createElement("div");

  actionButtonsHolder.style.width =
    display.offsetWidth - div.offsetWidth - displayBorderWidth * 2 + "px";
  actionButtonsHolder.style.backgroundColor = "red";
  actionButtonsHolder.style.display = "flex";
  actionButtonsHolder.style.justifyContent = "center";
  actionButtonsHolder.style.alignItems = "center";
  actionButtonsHolder.style.gap = "5px";
  actionButtonsHolder.style.border = div.style.border;

  parentDiv.appendChild(actionButtonsHolder);

  actionButtonsHolder.appendChild(markButton);
  actionButtonsHolder.appendChild(deleteButton);
}

addButton.addEventListener("click", addItem);
