export function renderArray(arrayContainer, tab, current, minIndex) {
  

  arrayContainer.innerHTML = "";
  arrayContainer.style.gridTemplateColumns = `repeat(${tab.length}, 40px)`;

  // Ligne 1 : valeurs
  tab.forEach((val, i) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    if (i === current) cell.classList.add("current");
    if (i === minIndex) cell.classList.add("min");
    cell.textContent = val;
    arrayContainer.appendChild(cell);
  });

  // Ligne 2 : flèches
  tab.forEach((_, i) => {
    const arrow = document.createElement("div");
    arrow.className = "arrow";
    arrow.textContent = i === current ? "▲" : "";
    arrayContainer.appendChild(arrow);
  });
}
