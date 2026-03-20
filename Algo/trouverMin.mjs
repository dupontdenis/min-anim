export function* trouverMinimum(tab) {
  if (tab.length === 0) {
    yield { message: "Tableau vide" };
    return;
  }

  let min = tab[0];
  let minIndex = 0;
  yield { type: "find", message: `Initialisation : min = ${min}`, current: 0, minIndex };

  for (let i = 1; i < tab.length; i++) {
    yield {
      type: "compare",
      message: `Comparaison : ${tab[i]} avec min = ${min}`,
      current: i,
      minIndex,
    };

    if (tab[i] < min) {
      min = tab[i];
      minIndex = i;
      yield {
        type: "find",
        message: `Nouveau minimum trouvé : ${min}`,
        current: i,
        minIndex,
      };
    }
  }

  yield {
    type: "end",
    message: `Résultat final : min = ${min}`,
    current: null,
    minIndex,
  };
}
