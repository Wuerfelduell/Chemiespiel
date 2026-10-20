// Werkstoff-Fächer – Fragen aus Altklausuren und ausgearbeiteten Fragenkatalogen, je 4 Antwortmöglichkeiten (eine richtig).
//   thema  – Lehrveranstaltung
//   quelle – aus welcher Klausur / welchem Fragenkatalog die Frage stammt
window.FAECHER = window.FAECHER || [];
{
const THEMEN = {
  wek: "Einführung Werkstoffkunde",
  metall: "Metalle, Stähle & Gusseisen, NE-Metalle",
  kunststoff: "Werkstoffkunde Kunststoffe",
  keramik: "Keramik & Glas",
  pruefung: "Werkstoffprüfung & -charakterisierung",
  zfp: "Zerstörungsfreie Prüfverfahren",
};

const FRAGEN = [
];

FRAGEN.forEach((f, i) => { f.nr = i + 1; });

FAECHER.push({
  id: "werkstoffe",
  name: "Werkstoffe",
  kurz: "Werkstoffe",
  icon: "🧱",
  untertitel: "Werkstoffkunde · Werkstoffprüfung · Altklausuren",
  beschreibung: "Fragen aus alten Klausuren und ausgearbeiteten Fragenkatalogen der Werkstoff-Fächer, je 4 Antworten zur Auswahl. Über die Themen wählst du die Lehrveranstaltung.",
  quelleText: "Altklausuren und Fragenkataloge der Werkstoff-Fächer",
  nrLabel: "Nr.",
  mehrfach: false,
  store: "lernquiz-werkstoffe-v1",
  themen: THEMEN,
  fragen: FRAGEN,
});
}
