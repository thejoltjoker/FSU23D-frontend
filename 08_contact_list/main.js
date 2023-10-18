const contactList = document.querySelector("#contact-list");
const saveButton = document.querySelector("#save-button");

/**
 * Check if all fields are fillled.
 *
 * @param {FormData} formData The formdata
 * @return {boolean} returns true if form has all fields filled
 */
function validateForm(formData) {
  // Check if any form data fields are empty
  let isFormValid = true;
  if (!formData.values()) {
    isFormValid = false;
  }
  for (const value of formData.values()) {
    if (!value.trim()) {
      // Use trim() to remove leading/trailing white spaces
      isFormValid = false;
      break;
    }
  }
  return isFormValid;
}

/**
 * Toggle the disabled state of an <input> element.
 *
 * @param {HTMLInputElement} inputField The element to toggle disabled on
 */
function toggleDisabled(inputField) {
  if (inputField.disabled) {
    inputField.disabled = false;
  } else {
    inputField.disabled = true;
  }
}

/**
 * Show error message
 *
 * @param {string} message The message to show
 */
function showErrorMessage(message) {
  let messageDiv = document.querySelector("#message");
  if (messageDiv) {
    // Update existing message
    messageDiv.innerText = message;
  } else {
    // Create error message
    messageDiv = document.createElement("p");
    messageDiv.id = "message";
    messageDiv.innerText = message;
    messageDiv.style.color = "red";
    document.body.appendChild(messageDiv);
  }
}

/**
 * Remove the error message
 */
function removeErrorMessage() {
  let message = document.querySelector("#message");

  if (message) {
    message.remove();
  }
}

/**
 * Add a contact to the list
 *
 * @param {string} name
 * @param {string} number
 */
function addContact(name, number) {
  // Create the list item
  const listItem = document.createElement("li");
  const listItemForm = document.createElement("form");

  // Create the text input for the name
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.value = name;
  nameInput.name = "name";
  nameInput.disabled = true;

  // Create the input for the telephone number
  const telInput = document.createElement("input");
  telInput.type = "tel";
  telInput.value = number;
  telInput.name = "number";
  telInput.disabled = true;

  // Create the "Redigera" button
  const editButton = document.createElement("button");
  editButton.textContent = "Redigera";

  // Add event to "Redigera" button
  editButton.addEventListener("click", function (event) {
    // Avoid page refresh
    event.preventDefault();

    // Get form data
    let formData = new FormData(event.target.parentElement);

    if (validateForm(formData)) {
      // Remove any existing error message
      removeErrorMessage();

      // Toggle disabled for our inputs
      toggleDisabled(nameInput);
      toggleDisabled(telInput);
    } else {
      showErrorMessage("Alla fälten måste vara ifyllda");
    }
  });

  // Create the "Ta bort" button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Ta bort";

  // Add event to "Ta bort" button
  deleteButton.addEventListener("click", function (event) {
    // Remove parent element
    event.target.parentElement.parentElement.remove();
  });

  // Append the elements to the list item
  listItem.appendChild(listItemForm);
  listItemForm.appendChild(nameInput);
  listItemForm.appendChild(telInput);
  listItemForm.appendChild(editButton);
  listItemForm.appendChild(deleteButton);

  // Append the list item to the list
  contactList.appendChild(listItem);
}

// Save new contact
saveButton.addEventListener("click", function (event) {
  // Avoid page refresh
  event.preventDefault();

  // Get form data
  let formData = new FormData(event.target.parentElement);

  // Add new contact
  if (validateForm(formData)) {
    // Remove any existing error message
    removeErrorMessage();

    // Add contact
    addContact(...formData.values());
  } else {
    // Show error message
    showErrorMessage("Alla fälten måste vara ifyllda");
  }
});
