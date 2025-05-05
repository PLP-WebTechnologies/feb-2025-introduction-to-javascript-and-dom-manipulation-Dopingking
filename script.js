// ✏️ Changes the text inside the paragraph
function changeText() {
    const text = document.getElementById("dynamic-text");
    text.textContent = "🎉 The magic worked! Text has changed.";
  }
  
  // 🎨 Updates the style of an element
  function modifyStyle() {
    const element = document.getElementById("style-target");
    element.style.color = "#e91e63";
    element.style.fontSize = "24px";
    element.style.fontWeight = "bold";
    element.style.transition = "all 0.5s ease";
  }
  
  // ➕ Adds a new paragraph to the page
  function addElement() {
    const container = document.getElementById("element-container");
    const newElement = document.createElement("p");
    newElement.textContent = "✅ New element successfully added!";
    newElement.id = "temp-element";
    container.appendChild(newElement);
  }
  
  // ➖ Removes the element that was added
  function removeElement() {
    const element = document.getElementById("temp-element");
    if (element) {
      element.remove();
    }
  }
  