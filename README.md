# Chemiespiel
Ein Spiel was beim chemie lernen hilft

Lern-Quiz für mehrere Fächer – das Fach wechselt man über die Überschrift (aufklappen).

| Fach | Fragen | Format |
|---|---|---|
| ⚗️ Chemie (CHE1VO/ACA1VO) | 58 – alle Fragen aus dem Fragenkatalog | 4 Antworten, eine richtig |
| 📈 Marktorientiertes Management (MOM1IL) | 72 – 29 aus alten Klausuren, 43 aus dem Skriptum | Mehrfachauswahl wie in der Klausur: mind. eine richtig, zählt nur wenn alles stimmt |
| 📐 Mathematik (MAT1) | 47 Rechenaufgaben aus 17 Altklausuren | 4 Ergebnisse, eines richtig, mit Rechenweg |
| ⚙️ Technische Mechanik (MEC1, FEL4) | 50 aus Prüfungen und Prüfungsfragen-Katalogen | 4 Antworten, eine richtig |
| 🧱 Werkstoffe (WEK1, MWE2, SGM3, NEM, WKS3, WKG, WPM4, WCM4, WCK4, ZFP3) | 175 aus Altklausuren und Fragenkatalogen | 4 Antworten, eine richtig |

Die richtigen Antworten stammen immer aus dem jeweiligen Skriptum (mit Seiten-/Folienangabe).

## Funktionen

- **Pool für sichere Fragen:** eine Frage ist sicher, wenn sie 3× hintereinander richtig beantwortet wurde; ein Fehler macht sie wieder unsicher
- Button **„Unsichere Fragen üben“** – spielt nur die noch nicht sicheren Fragen (neue/falsche zuerst)
- Übersicht aller Fragen mit Fortschritt (0–3× richtig in Folge), getrennt pro Fach
- Filter nach Themen, 10/20 zufällige Fragen, nur unsichere oder nur sichere Fragen
- nach jeder Antwort: Musterantwort + Fundstelle im Skriptum; falsche Fragen direkt wiederholen
- **Tab „Altklausuren“** je Fach: abgetippte Klausurfragen gezielt üben + Links zu den Original-Fotos/PDFs im öffentlichen Google-Drive-Ordner „MKT_Bachelor“ (nur verlinkt, nicht kopiert)
- Fortschritt wird lokal im Browser gespeichert
- Tastatur: `1`–`6` bzw. `A`–`F` zum Antworten/Ankreuzen, `Enter` prüfen bzw. weiter

## Starten

`index.html` im Browser öffnen – oder über GitHub Pages
(Settings → Pages → „Deploy from a branch“, Ordner `/ (root)`).

## Dateien

- `index.html` – das Spiel
- `fragen-*.js` – Fragen, Antworten, Erklärungen und Fundstellen je Fach
- `altklausuren.js` – Verweise (Drive-IDs) auf die Original-Altklausuren je Fach

Neues Fach: eine weitere `fragen-<fach>.js` nach demselben Muster anlegen (`FAECHER.push({...})`) und in `index.html` einbinden.
