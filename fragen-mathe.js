// Mathematik (MAT1/MAT2) – Rechenaufgaben aus Altklausuren, je 4 Ergebnisse zur Auswahl (eines richtig).
//   quelle  – aus welcher Altklausur die Aufgabe stammt
//   richtig / falsch – richtiges Ergebnis und drei typische Fehler-Ergebnisse
//   musterantwort – Rechenweg; seiten – Fundstelle im Skriptum (Schiefermayr, Angewandte Mathematik Teil 1)
window.FAECHER = window.FAECHER || [];
{
const THEMEN = {
  mengen: "Mengen, Aussagen, Zahlen",
  komplex: "Komplexe Zahlen",
  vektor: "Vektorrechnung",
  geo: "Geraden & Ebenen",
  sonst: "Sonstiges",
};

const FRAGEN = [
];

FRAGEN.forEach((f, i) => { f.nr = i + 1; });

FAECHER.push({
  id: "mathe",
  name: "Mathematik",
  kurz: "Mathe",
  icon: "📐",
  untertitel: "MAT1 · Rechenaufgaben aus Altklausuren",
  beschreibung: "Rechenaufgaben aus alten Mathe-Klausuren mit je 4 Ergebnissen zur Auswahl. Nach dem Antworten siehst du den Rechenweg.",
  quelleText: "Skriptum Angewandte Mathematik Teil 1 (Schiefermayr)",
  nrLabel: "Nr.",
  mehrfach: false,
  store: "lernquiz-mathe-v1",
  themen: THEMEN,
  fragen: FRAGEN,
});
}
