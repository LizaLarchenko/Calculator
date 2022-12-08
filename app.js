const root = document.getElementById("root");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = ["+", "-", "*", "/", "%"];
const controls = [".", "=", "C"];

class Calculator {
  constructor(initialState) {
    this.initialState = initialState;
    this.prevValue = null;
    this.operat = null;
  }

  renderDisplay() {
    const displayContainer = document.createElement("div");
    displayContainer.classList.add("container", "py-3");

    const display = document.createElement("input");
    display.classList.add(
      "w-50",
      "border",
      "border-primary",
      "mx-auto",
      "rounded",
      "px-2",
      "d-flex",
      "justify-content-end"
    );
    display.style.height = "30px";
    display.value = this.initialState;
    display.setAttribute("placeholder", "0");
    display.setAttribute("disabled", true);

    const nums = document.createElement("div");
    nums.classList.add(
      "container",
      "d-flex",
      "justify-content-center",
      "gap-2"
    );
    numbers.forEach((num) => {
      const btn = document.createElement("button");
      btn.classList.add("btn", "btn-outline-primary");
      btn.setAttribute("type", "button");
      btn.innerText = num;
      nums.appendChild(btn);
      btn.addEventListener("click", () => {
        if (this.initialState.length < 9) {
          this.initialState += num;
          display.value = this.initialState;
        }
      });
    });

    const operations = document.createElement("div");
    operations.classList.add(
      "container",
      "d-flex",
      "justify-content-center",
      "gap-2",
      "my-2"
    );

    operators.forEach((operator) => {
      const btn = document.createElement("button");
      btn.classList.add("btn", "btn-outline-primary");
      btn.setAttribute("type", "button");
      btn.innerText = operator;
      operations.appendChild(btn);
      btn.addEventListener("click", () => {
        this.prevValue = this.initialState;
        this.operat = operator;
        this.initialState = "";
      });
    });

    const controlsContainer = document.createElement("div");
    controlsContainer.classList.add(
      "container",
      "d-flex",
      "justify-content-center",
      "gap-2",
      "my-2"
    );

    controls.forEach((control) => {
      const btn = document.createElement("button");
      btn.classList.add("btn", "btn-outline-primary");
      btn.setAttribute("type", "button");
      btn.innerText = control;
      controlsContainer.appendChild(btn);
      btn.addEventListener("click", () => {
        if (this.operat === "+") {
          display.value = +this.prevValue + +this.initialState;
        }

        if (control === "C") {
          this.prevValue = "";
          this.initialState = "";
          display.value = "";
        }
      });
    });

    displayContainer.appendChild(display);
    root.appendChild(displayContainer);
    root.appendChild(nums);
    root.appendChild(operations);
    root.appendChild(controlsContainer);
  }
}

const calc = new Calculator("");
calc.renderDisplay();
