import { renderArray } from "./UI/renderArray.mjs";
import { trouverMinimum } from "./Algo/trouverMin.mjs";
import { createLogger } from "./UI/logger.mjs";

const btnNext = document.querySelector("#next-step");
const arrayContainer = document.querySelector("#array");
const sidebar = document.querySelector("#sidebar");

const logger = createLogger(sidebar);

// const tab = [5, 3, 8, 1, 7];
const response = await fetch("./data.json");
const tab = await response.json();

const iterator = trouverMinimum(tab);

// document.getElementById("next").onclick = () => {
//   const step = gen.next();
//   if (step.done) {
//     log.success("Fin de l'algorithme");
//     // log.textContent += "\n--- Fin de l'algorithme ---";
//     return;
//   }

//   const { msg, current, minIndex } = step.value;
//   renderArray(tab, current, minIndex);
//   log.info(msg);
//   // log.textContent += msg + "\n";
// };

btnNext.addEventListener("click", () => {
  if (!iterator) return;

  const step = iterator.next();
  if (step.done) return;

  const s = step.value;
  console.log(s);

  switch (s.type) {
    case "info":
      console.log("INFO:", s.message);
      logger.info(s.message);
      break;

    case "compare":
      console.log("COMPARE:", s.message);
      logger.compare(s.message);
      renderArray(arrayContainer, tab, s.current, s.minIndex);
      break;

    case "find":
      console.log("FIND:", s.message);
      logger.find(s.message);
      renderArray(arrayContainer, tab, s.current, s.minIndex);
      break;

    case "end":
      console.log("END:", s.message);
      logger.success(s.message);
      renderArray(arrayContainer, tab, null, s.minIndex);
      break;
  }
});

renderArray(arrayContainer, tab, null, null);
