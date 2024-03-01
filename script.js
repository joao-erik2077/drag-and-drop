const elements = [
  { item: document.getElementById("grid-snap-1"), x: 0, y: 0 },
  { item: document.getElementById("grid-snap-2"), x: 0, y: 0 },
];

elements.forEach((element) =>
  interact(element.item)
    .draggable({
      modifiers: [
        interact.modifiers.snap({
          targets: [interact.snappers.grid({ x: 0, y: 0 })],
          range: Infinity,
          relativePoints: [{ x: 0, y: 0 }],
        }),
        interact.modifiers.restrict({
          restriction: element.item.parentNode,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
          endOnly: true,
        }),
      ],
      inertia: true,
    })
    .on("dragmove", function (event) {
      element.x += event.dx;
      element.y += event.dy;

      event.target.style.transform = "translate(" + element.x + "px, " + element.y + "px)";
    })
);
