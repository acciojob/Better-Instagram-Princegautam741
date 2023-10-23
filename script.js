// Get references to all the image divs
const divs = document.querySelectorAll('.image');

let draggedItem = null;

// Add dragstart event listeners to all divs
divs.forEach(div => {
  div.addEventListener('dragstart', (e) => {
    // Store the dragged item
    draggedItem = div;
  });

  div.addEventListener('dragend', () => {
    // Clear the dragged item
    draggedItem = null;
  });

  div.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  div.addEventListener('dragenter', (e) => {
    e.preventDefault();
  });

  div.addEventListener('drop', () => {
    if (draggedItem !== null && draggedItem !== div) {
      // Swap background images
      const temp = div.style.backgroundImage;
      div.style.backgroundImage = draggedItem.style.backgroundImage;
      draggedItem.style.backgroundImage = temp;
    }
  });
});
