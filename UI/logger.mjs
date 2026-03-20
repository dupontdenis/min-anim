export function createLogger(sidebar) {
  const logContainer = sidebar.querySelector("#log-container");

  function add(message, cssClass) {
    const div = document.createElement("div");
    div.className = `log-entry ${cssClass}`;
    div.textContent = message;

    // 👉 Ajouter en tête
    logContainer.prepend(div);
  }

  function clear() {
    logContainer.innerHTML = "";
  }

  return {
    info: (msg) => add(msg, "log-info"),
    compare: (msg) => add(msg, "log-compare"),
    find: (msg) => add(msg, "log-find"),
    success: (msg) => add(msg, "log-success"),
    clear,
  };
}
