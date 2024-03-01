const addButton = document.getElementById("add-button");
const grid = document.getElementById("grid");

addButton.addEventListener("click", () => {
  total = gridItems.length;

  const newGridItem = document.createElement("div");
  newGridItem.setAttribute("id", `grid-snap-${total}`);
  newGridItem.setAttribute("class", "snap");
  newGridItem.innerHTML = `Drag me ${total}`;
  grid.appendChild(newGridItem);

  gridItems.push({
    item: newGridItem,
    x: 0,
    y: 0,
    initiated: false,
  });
  console.log(gridItems);
  console.log(total);
  startGrid();
});
