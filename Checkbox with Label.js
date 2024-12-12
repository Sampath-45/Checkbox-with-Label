let LabelContainerEl = document.getElementById("checkboxWithLabelContainer");
LabelContainerEl.classList.add("d-flex", "flex-row", "justify-content-center");

let checkBoxEl = document.createElement("input");
checkBoxEl.type = "checkbox";
checkBoxEl.id = "checkbox";
LabelContainerEl.appendChild(checkBoxEl);



let labelEl = document.createElement("label");
labelEl.setAttribute("for", "checkbox");
labelEl.classList.add("checkbox-label");
labelEl.id = "checkboxLabel";
labelEl.textContent = "Click Me!";
LabelContainerEl.appendChild(labelEl);