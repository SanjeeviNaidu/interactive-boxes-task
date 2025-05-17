const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  const colorSelect = box.querySelector('select[id^="color"]');
  const sizeSelect = box.querySelector('select[id^="size"]');

  // Box click expands/collapses
  box.addEventListener('click', (event) => {
    if (event.target.tagName === "SELECT" || event.target.tagName === "OPTION") {
      event.stopPropagation();
      return;
    }

    boxes.forEach((b) => {
      if (b !== box) {
        b.classList.remove('expanded');
        b.style.backgroundColor = ''; // Reset color
        b.style.fontSize = '';
        b.style.padding = '';
      }
    });

    box.classList.toggle('expanded');
  });

  // Color change functionality
  colorSelect.addEventListener('change', (e) => {
    box.style.backgroundColor = e.target.value.toLowerCase();
  });

  // Size change functionality
  sizeSelect.addEventListener('change', (e) => {
    const size = e.target.value;
    if (size === "Small") {
      box.style.fontSize = "14px";
      box.style.padding = "10px";
    } else if (size === "Medium") {
      box.style.fontSize = "16px";
      box.style.padding = "20px";
    } else if (size === "Large") {
      box.style.fontSize = "18px";
      box.style.padding = "30px";
    }
  });
});
