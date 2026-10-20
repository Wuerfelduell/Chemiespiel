// Technische Mechanik (MEC1) und Festigkeitslehre (FEL4) – Fragen aus Altklausuren und Prüfungsfragen-Katalogen,
// je 4 Antwortmöglichkeiten (eine richtig).
//   quelle – aus welcher Prüfung / welchem Fragenkatalog die Frage stammt
window.FAECHER = window.FAECHER || [];
{
const THEMEN = {
  statik: "Statik starrer Körper",
  lager: "Lager, Schnittgrößen, Fachwerke",
  reibung: "Reibung & Schwerpunkt",
  festigkeit: "Festigkeitslehre",
  sonst: "Sonstiges",
};

const FRAGEN = [
];

FRAGEN.forEach((f, i) => { f.nr = i + 1; });

FAECHER.push({
  id: "mechanik",
  name: "Technische Mechanik",
  kurz: "Mechanik",
  icon: "⚙️",
  untertitel: "MEC1 · Festigkeitslehre · Altklausuren",
  beschreibung: "Theorie- und Rechenfragen aus alten Mechanik-Prüfungen und Prüfungsfragen-Katalogen, je 4 Antworten zur Auswahl.",
  quelleText: "Altklausuren und Prüfungsfragen MEC1/FEL4",
  nrLabel: "Nr.",
  mehrfach: false,
  store: "lernquiz-mechanik-v1",
  themen: THEMEN,
  fragen: FRAGEN,
});
}
