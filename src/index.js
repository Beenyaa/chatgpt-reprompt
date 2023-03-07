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
contentHeaderContainer.style.paddingTop = "10px";
contentContainer.appendChild(contentHeaderContainer);

// Add title
const title = document.createElement("h2");
title.classList.add(
  "flex",
  "items-center"
);
title.textContent = "RePrompt";
title.style.color = "#fff";
title.style.margin = "0";
title.style.fontSize = "1.5rem";
contentHeaderContainer.appendChild(title);

// Add logo
const logo = document.createElement("span");
logo.innerHTML = `
<svg width="32px" height="32px" viewBox="0 0 1280 1280" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(9.97755,0,0,9.97755,-108.316,-438.823)">
        <g id="SVGRepo_iconCarrier">
            <path d="M92.12,99.87L92.12,111.94L84.69,112.36L84.69,85.07C84.69,73.15 92.45,67.73 99.78,67.73C107.43,67.73 115.09,73.53 115.09,83.59C115.09,99.33 98.61,99.87 92.12,99.87ZM99.69,75.43C96.05,75.43 92.16,77.96 92.16,85.05L92.16,92.28C107.31,92.28 107.31,86.85 107.31,83.6C107.31,78 103.36,75.43 99.69,75.43ZM58.24,99.88C51.66,99.88 34.91,99.88 34.91,83.88C34.91,73.65 42.69,67.76 50.46,67.76C57.91,67.76 65.8,73.27 65.8,85.38L65.8,92.38L80.51,92.49L79.82,99.94L58.24,99.88ZM58.24,85.35C58.24,78.02 54.24,75.41 50.46,75.41C46.68,75.41 42.59,78.05 42.59,83.85C42.59,87.21 42.59,92.28 58.24,92.32L58.24,85.35ZM58.24,116.29L58.24,104.9L65.8,103.9L65.8,130.9C65.8,143 57.91,148.52 50.46,148.52C42.69,148.52 34.91,142.62 34.91,132.4C34.91,116.34 51.66,116.29 58.24,116.29ZM50.46,140.77C54.23,140.77 58.24,138.16 58.24,130.83L58.24,123.83C42.59,123.88 42.59,128.95 42.59,132.31C42.59,138.13 46.67,140.77 50.46,140.77ZM113.6,131.77C113.6,141.32 106.34,146.77 99.08,146.77C92.08,146.77 84.76,141.63 84.76,130.32L84.76,123.8L70.45,123.8L69.96,116.2L91.82,116.2C98,116.29 113.6,116.88 113.6,131.8L113.6,131.77ZM92.13,130.43C92.13,136.98 95.72,139.32 99.13,139.32C102.54,139.32 106.13,136.96 106.13,131.77C106.13,128.77 106.13,124.24 92.13,124.2L92.13,130.43Z" style="fill:rgb(0,205,93);"/>
        </g>
    </g>
</svg>`;
logo.style.margin = "0";
logo.style.width = "32px";
logo.style.maxWidth = "32px";
logo.style.height = "32px";
logo.style.maxHeight = "32px";
title.prepend(logo);

// Add Buy Me a Coffee button
const buyMeACoffee = document.createElement("span");
buyMeACoffee.innerHTML = `
  <a target="_blank" href="https://www.buymeacoffee.com/beenyaa">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=beenyaa&button_colour=009B1C&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
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
  if (row != tableBody.lastChild && !row.querySelector(".delete-button")) {
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML =
      '<svg stroke="white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';
    deleteButton.className = "delete-button";
    deleteButton.style.position = "relative";
    deleteButton.style.top = "50%";

    const lastCell = row.lastElementChild;
    lastCell.style.display = "flex";
    lastCell.style.alignItems = "center";
    lastCell.appendChild(deleteButton);

    row.addEventListener("mouseout", () => {
      if (!row.matches(":hover")) {
        deleteButton.remove();
      }
    });
  }
});

// Add event listener for delete button
tableBody.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".delete-button");
  if (deleteButton) {
    const row = deleteButton.parentNode.parentNode
    const keyValue = row.cells[1].querySelector("input").value
    sessionStorage.removeItem(keyValue)
    row.remove();
  }
});


// Listen for input events on the last row's input fields
keyInputField.addEventListener("input", addNewRowIfNeeded);
valueInputField.addEventListener("input", addNewRowIfNeeded);

function addNewRowIfNeeded(key = "") {
  // Check if both input fields in the last row have content
  const lastRow = tableBody.lastElementChild;
  const keyInput = lastRow.cells[1].querySelector("input");
  const valueInput = lastRow.cells[2].querySelector("input");

  if (keyInput.value.trim() !== "" || valueInput.value.trim() !== "") {
    sessionStorage.setItem(key||keyInput.value, valueInput.value);

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
    newKeyInput.value = key;
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
  sessionStorage.setItem(keyInput.value, valueInput.value);
  keyInput.value = keyInput.value;
  return
}

// Get reference to the textarea element
const textarea = document.querySelector("textarea");

// Listen for changes in the textarea element
textarea.addEventListener("input", () => {
  // Get the text from the textarea element
  const text = textarea.value;

  // Split the text into parts using the double curly brackets as a delimiter
  const parts = text.match(/{{(\w+?)}}/g);

  // Process each part separately
  for (let i = 0; i < parts.length; i++) {
    // Extract the parameter name from the odd-indexed parts
    const paramName = parts[i].replace("{{", "").replace("}}", "");

    if (paramName && sessionStorage.getItem(paramName)==null) {
      addNewRowIfNeeded(paramName);
    }
  }
});

// Define the mutation observer callback function
const observerCallback = (mutationsList, observer) => {
  mutationsList.forEach(mutation => {
    console.log(mutation.type);
    if (mutation.type === "childList") {
      const mainElement = mutation.target.querySelector("main");
      console.log(mainElement)
      if (mainElement) {
        mainElement.prepend(contentContainer);
        // textareaUpdate()
        observer.disconnect();
      }
    }
  }
  )
};

// Create the mutation observer
const observer = new MutationObserver(observerCallback);

// Observe changes to the document's child nodes and URL
observer.observe(document.body.parentElement, {
  subtree: true,
  childList: true,
});




