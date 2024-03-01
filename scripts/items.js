const addButton = document.getElementById("add-button");
const removeAllButton = document.getElementById("remove-all-button");
const grid = document.getElementById("grid");
let currentId = 0;

const resize = (id) => {
  const editInput = document.getElementById(`edit-input-${id}`);
  console.log(editInput)
  editInput.style.width = `${editInput.value.length}ch`;
};

addButton.addEventListener("click", () => {
  const newGridItem = document.createElement("div");
  newGridItem.setAttribute("id", `grid-item-${currentId}`);
  newGridItem.setAttribute("class", "item");

  const removeIcon = "<i class='bi bi-x'></i>";
  const removeButton = `<button class="removeButton" onclick="removeItem(${currentId})">${removeIcon}</button>`;
  const editIcon = `<i class='bi bi-pencil' id='icon-${currentId}'></i>`;
  const editButton = `<button class="editButton" onclick="editItem(${currentId})">${editIcon}</button>`;
  const buttons = `<div class='itemButtons'>${editButton} ${removeButton}</div>`;
  const text = "Drag me";
  const insideText = `<input style="width: ${text.length}ch;" disabled="true" type="text" class="insideText" value="${text}" id="edit-input-${currentId}" oninput="resize(${currentId})">`;

  const inputLine = `<i class='bi bi-arrow-right lines-left lines' onclick='setInputLine(${currentId})' id='input-line-${currentId}'></i>`;
  const outputLine = `<i class='bi bi-arrow-right lines-right lines' onclick='setOutputLine(${currentId})' id='output-line-${currentId}'></i>`;

  newGridItem.innerHTML = `${inputLine} ${insideText} ${buttons} ${outputLine}`;
  grid.appendChild(newGridItem);

  gridItems.push({
    item: newGridItem,
    x: 0,
    y: 0,
    initiated: false,
    id: currentId,
  });
  currentId++;
  startGrid();
});

const removeItem = (id) => {
  let found = false;
  for (let i = 0; !found; i++) {
    if (gridItems[i].id === id) {
      found = true;
      item = gridItems[i];
      grid.removeChild(item.item);
      gridItems = gridItems.filter((e) => e.id !== id);
    }
  }
  removeLines(id);
};

removeAllButton.addEventListener("click", () => {
  gridItems = [];
  grid.innerHTML = "";
  removeAllLines();
});

const editItem = (id) => {
  const editInput = document.getElementById(`edit-input-${id}`);
  const icon = document.getElementById(`icon-${id}`);
  const disabled = editInput.getAttribute("disabled");
  if (disabled) {
    editInput.removeAttribute("disabled");
    icon.classList.replace("bi-pencil", "bi-floppy");
  } else {
    editInput.setAttribute("disabled", true);
    icon.classList.replace("bi-floppy", "bi-pencil");
  }
};
