// Create the contentContainer element
const contentContainer = document.createElement("div");
contentContainer.classList.add(
  "relative",
  "bg-gray-900",
  "overflow-y-auto",
  "w-full"
);
contentContainer.style.zIndex = 1;
contentContainer.style.height = "135px";
contentContainer.style.minHeight = "125px";
contentContainer.style.maxHeight = "300px";
contentContainer.style.padding = "10px";
contentContainer.style.resize = "vertical"; // Add this line to enable vertical resizing

// Add contentHeaderContainer
const contentHeaderContainer = document.createElement("div");
contentHeaderContainer.classList.add(
  "relative",
  "w-full",
  "flex",
  "justify-between",
  "items-center"
);
contentHeaderContainer.style.paddingBottom = "10px";
contentContainer.appendChild(contentHeaderContainer);

// Add title
const title = document.createElement("h2");
title.textContent = "RePrompt";
title.style.color = "#fff";
title.style.margin = "0";
title.style.fontSize = "1.5rem";
contentHeaderContainer.appendChild(title);

// Add Buy Me a Coffee button
const buyMeACoffee = document.createElement("span");
buyMeACoffee.innerHTML = `
  <a target="_blank" href="https://www.buymeacoffee.com/beenyaa">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=beenyaa&button_colour=00cc99&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
  </a>`;
buyMeACoffee.style.margin = "0";
buyMeACoffee.style.maxWidth = "150px";
contentHeaderContainer.appendChild(buyMeACoffee);

// Create table element
const table = document.createElement("table");
table.classList.add("relative", "border-collapse", "w-full");
table.style.padding = "20px 0";
table.style.fontFamily = "monospace";
table.style.fontSize = "0.7rem";

// Create table header row
const tableHeader = table.createTHead();
const headerRow = tableHeader.insertRow();
headerRow.classList.add("text-white");

// Create "TOGGLE" header cell
const toggleHeader = headerRow.insertCell();
toggleHeader.classList.add("px-6", "border-b", "border-white/20");

// Create "KEY" header cell
const keyHeader = headerRow.insertCell();
keyHeader.textContent = "KEY";
keyHeader.classList.add("px-6", "border-b", "border-white/20");

// Create "VALUE" header cell
const valueHeader = headerRow.insertCell();
valueHeader.textContent = "VALUE";
valueHeader.classList.add("px-6", "border-b", "border-white/20");

// Create table body
const tableBody = table.createTBody();

// Create input row
const inputRow = tableBody.insertRow();
inputRow.classList.add("hover:bg-gray-700", "cursor-pointer");

// Create key input cell
const toggleInput = inputRow.insertCell();
// toggleInput.classList.add("px-4", "border-r", "border-white/20");
toggleInput.classList.add("w-3");

// Create key input cell
const keyInput = inputRow.insertCell();
keyInput.classList.add("px-4", "border-r", "border-white/20");

// Create key input field
const keyInputField = document.createElement("input");
keyInputField.type = "text";
keyInputField.classList.add(
  "w-full",
  "bg-transparent",
  "border-none",
  "focus:outline-none",
  "focus:ring-0",
  "text-white"
);
keyInputField.placeholder = "Enter key";
keyInputField.style.fontSize = "0.7rem";
keyInput.appendChild(keyInputField);

// Create value input cell
const valueInput = inputRow.insertCell();
valueInput.classList.add("px-4", "border-l", "border-white/20");

// Create value input field
const valueInputField = document.createElement("input");
valueInputField.type = "text";
valueInputField.classList.add(
  "w-full",
  "bg-transparent",
  "border-none",
  "focus:outline-none",
  "focus:ring-0",
  "text-white"
);
valueInputField.placeholder = "Enter value";
valueInputField.style.fontSize = "0.7rem";
valueInput.appendChild(valueInputField);

// Add table to container
contentContainer.appendChild(table);

// Add hover effect to rows
tableBody.addEventListener("mouseover", (event) => {
  const row = event.target.closest("tr");
  if (row != tableBody.firstChild) {
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML =
      '<svg stroke="white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';
    deleteButton.className = "delete-button";
    deleteButton.style.position = "relative";
    deleteButton.style.top = "50%";
    deleteButton.style.transform = "translateY(-50%)";

    const lastCell = row.lastElementChild;
    lastCell.style.display = "flex";
    lastCell.style.alignItems = "center";
    lastCell.appendChild(deleteButton);
  }
});

// Remove hover effect from rows
tableBody.addEventListener("mouseout", (event) => {
  const row = event.target.closest("tr");
  if (row) {
    const deleteButton = row.querySelector(".delete-button");
    if (deleteButton) {
      deleteButton.remove();
    }
  }
});

// Add event listener for delete button
tableBody.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".delete-button");
  if (deleteButton) {
    const row = deleteButton.parentNode;
    row.remove();
  }
});

// Listen for input events on the last row's input fields
keyInputField.addEventListener("input", addNewRowIfNeeded);
valueInputField.addEventListener("input", addNewRowIfNeeded);

function addNewRowIfNeeded() {
  // Check if both input fields in the last row have content
  const lastRow = tableBody.lastElementChild;
  const keyInput = lastRow.cells[1].querySelector("input");
  const valueInput = lastRow.cells[2].querySelector("input");

  if (keyInput.value.trim() !== "" || valueInput.value.trim() !== "") {
    // Create a new row and add it to the table
    const newRow = tableBody.insertRow();
    newRow.classList.add("hover:bg-gray-700", "cursor-pointer");

    // Create toggle cell
    const newToggleCell = newRow.insertCell();

    // Create key input cell
    const newKeyCell = newRow.insertCell();
    newKeyCell.classList.add("px-4", "border-r", "border-white/20");

    // Create key input field
    const newKeyInput = document.createElement("input");
    newKeyInput.type = "text";
    newKeyInput.classList.add(
      "w-full",
      "bg-transparent",
      "border-none",
      "focus:outline-none",
      "focus:ring-0",
      "text-white"
    );
    newKeyInput.placeholder = "Enter key";
    newKeyInput.style.fontSize = "0.7rem";
    newKeyCell.appendChild(newKeyInput);

    // Create value input cell
    const newValueCell = newRow.insertCell();
    newValueCell.classList.add("px-4", "border-l", "border-white/20");

    // Create value input field
    const newValueInput = document.createElement("input");
    newValueInput.type = "text";
    newValueInput.classList.add(
      "w-full",
      "bg-transparent",
      "border-none",
      "focus:outline-none",
      "focus:ring-0",
      "text-white"
    );
    newValueInput.placeholder = "Enter value";
    newValueInput.style.fontSize = "0.7rem";
    newValueCell.appendChild(newValueInput);

    // Listen for input events on the new row's input fields
    newKeyInput.addEventListener("input", addNewRowIfNeeded);
    newValueInput.addEventListener("input", addNewRowIfNeeded);
  }
}

// Define the mutation observer callback function
const observerCallback = (mutationsList, observer) => {
  for (let mutation of mutationsList) {
    console.log(mutation.type);
    if (mutation.type === "childList" || mutation.type === "attributes") {
      const mainElement = document.querySelector("main");
      const formElement = document.querySelector("form");
      if (mainElement || formElement) {
        mainElement.prepend(contentContainer);
        observer.disconnect();
      }
    }
  }
};

// Create the mutation observer
const observer = new MutationObserver(observerCallback);

// Observe changes to the document's child nodes and URL
observer.observe(document.documentElement, {
  subtree: true,
  childList: true,
  attributes: true,
});
