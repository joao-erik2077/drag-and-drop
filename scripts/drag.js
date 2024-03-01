let gridItems = [];

const startGrid = () => {
  gridItems.forEach((gridItem) => {
    if (gridItem.initiated) return;
    interact(gridItem.item)
      .draggable({
        modifiers: [
          interact.modifiers.snap({
            targets: [interact.snappers.grid({ x: 0, y: 0 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
          }),
          interact.modifiers.restrict({
            restriction: gridItem.item.parentNode,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
            endOnly: true,
          }),
        ],
        inertia: true,
      })
      .on("dragmove", (event) => {
        updateLines(gridItem.id);
        gridItem.x += event.dx;
        gridItem.y += event.dy;

        event.target.style.transform =
          "translate(" + gridItem.x + "px, " + gridItem.y + "px)";
      });

    gridItem.item.style.transform =
      "translate(" + gridItem.x + "px, " + gridItem.y + "px)";
    gridItem.initiated = true;
  });
};

startGrid();
