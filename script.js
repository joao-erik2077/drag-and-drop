const gridSnaps = [
  { item: document.getElementById("grid-snap-1"), x: 0, y: 0 },
  { item: document.getElementById("grid-snap-2"), x: 0, y: 100 },
  { item: document.getElementById("grid-snap-3"), x: 0, y: 200 },
];

gridSnaps.forEach((gridSnap) => {
  interact(gridSnap.item)
    .draggable({
      modifiers: [
        interact.modifiers.snap({
          targets: [interact.snappers.grid({ x: 0, y: 0 })],
          range: Infinity,
          relativePoints: [{ x: 0, y: 0 }],
        }),
        interact.modifiers.restrict({
          restriction: gridSnap.item.parentNode,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
          endOnly: true,
        }),
      ],
      inertia: true,
    })
    .on("dragmove", function (event) {
      gridSnap.x += event.dx;
      gridSnap.y += event.dy;

      event.target.style.transform =
        "translate(" + gridSnap.x + "px, " + gridSnap.y + "px)";
    });

  gridSnap.item.style.transform =
    "translate(" + gridSnap.x + "px, " + gridSnap.y + "px)";
});
