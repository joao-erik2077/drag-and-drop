let lines = [];
let clickInOutput = false;
let startElement, endElement;
let currentOutputId;

const setOutputLine = (id) => {
  clickInOutput = !clickInOutput;
  if (clickInOutput) {
    currentOutputId = id;
    startElement = document.getElementById(`output-line-${id}`);
    startElement.classList.add("lines-focus");
  } else {
    startElement.classList.remove("lines-focus");
  }
};

const setInputLine = (id) => {
  if (startElement.id.replace("output-line-", "") == id) {
    return;
  }
  if (clickInOutput) {
    endElement = document.getElementById(`input-line-${id}`);
    createLine(id);
    clickInOutput = !clickInOutput;
    startElement.classList.remove("lines-focus");
  }
};

const createLine = (inputId) => {
  const line = {
    line: new LeaderLine(startElement, endElement, {
      color: "#808080",
      size: 2,
      endPlug: "arrow1",
      startSocket: "right",
      endSocket: "left",
    }),
    inputId: inputId,
    outputId: currentOutputId,
  };
  lines.push(line);

  const path = document.querySelectorAll(".leader-line-caps-mask-anchor");
  path.forEach(e => e.remove())
};

const updateLines = (id) => {
  const outputLines = lines.filter((e) => e.outputId === id);
  const inputLines = lines.filter((e) => e.inputId === id);
  if (outputLines.length > 0)
    outputLines.forEach((line) => {
      line.line.setOptions({
        start: document.getElementById(`input-line-${id}`),
      });
      line.line.setOptions({
        start: document.getElementById(`output-line-${id}`),
      });
    });
  if (inputLines.length > 0)
    inputLines.forEach((line) => {
      line.line.setOptions({
        end: document.getElementById(`output-line-${id}`),
      });
      line.line.setOptions({
        end: document.getElementById(`input-line-${id}`),
      });
    });
};

const removeLines = (id) => {
  const outputLines = lines.filter((e) => e.outputId === id);
  const inputLines = lines.filter((e) => e.inputId === id);
  if (outputLines.length > 0) outputLines.forEach((line) => line.line.remove());
  if (inputLines.length > 0) inputLines.forEach((line) => line.line.remove());
  lines = lines.filter((e) => e.outputId !== id && e.inputId !== id);
};

const removeAllLines = () => {
  lines.forEach((line) => line.line.remove());
  lines = [];
};
