// DRY >>> Do not Repeat Yourself

// get input value
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    // clear the input field
    inputField.value = "";

    return inputFieldValue;
};

// get element value
function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);

    return textElementValue;
};

// set element value
function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
};
