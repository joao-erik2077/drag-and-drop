const addButton = document.getElementById("add-button");
const removeAllButton = document.getElementById("remove-all-button");
const grid = document.getElementById("grid");
let lastId = 0;

addButton.addEventListener("click", () => {
  const newGridItem = document.createElement("div");
  newGridItem.setAttribute("id", `grid-item-${lastId}`);
  newGridItem.setAttribute("class", "item");

  const removeIcon = "<i class='bi bi-x'></i>";
  const removeButton = `<button class="removeButton" onClick="removeItem(${lastId})">${removeIcon}</button>`;

  newGridItem.innerHTML = `Drag me ${removeButton}`;
  grid.appendChild(newGridItem);

  gridItems.push({
    item: newGridItem,
    x: 0,
    y: 0,
    initiated: false,
    id: lastId,
  });
  console.log(gridItems);
  console.log(lastId);
  lastId++;
  startGrid();
});

const removeItem = (id) => {
  let found = false;
  for (let i = 0; !found; i++) {
    console.log(gridItems[i].id, id);
    if (gridItems[i].id === id) {
      found = true;
      item = gridItems[i];
      grid.removeChild(item.item);
      gridItems = gridItems.filter((e) => e.id !== id);
    }
  }
  console.log(gridItems);
};

removeAllButton.addEventListener("click", () => {
    gridItems = [];
    grid.innerHTML = '';
});
