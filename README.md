# Modul-293-Projektauftrag-Blog

## Wireframes & Mockups

Zum Projekt erhielt ich folgendes Wireframe:
![wireframe](/docu-photos/wireframe.png)

---

Dazu erstellte ich auf Miro folgendes Mockup:

![mockup](/docu-photos/mockup.png)

Man sieht jeweils eine Desktop, Mobile und eine Tablet-Version von jeweils einer Seite. Rechts der Seite ist angeschrieben, was genau die Seite bewirkt. Das tatsächlich erstellte Resultat variiert, da ich mein ursprüngliches Mockup veraltet fand. Deshalb sind Elemente, wie die Navigation-Bar drastisch verändert worden.

---

## Styleguide

Zudem erstellte ich auch ein Styleguide mit Typografie und Farben.

---

## I. Farben

Die Farbpalette dieser Seite ist minimalistisch und funktional, mit einem Fokus auf Lesbarkeit und Hierarchie.

### Primäre Farbpalette

| Name          | Hex-Code  | RGB-Wert        | Verwendung                                              |
| :------------ | :-------- | :-------------- | :------------------------------------------------------ |
| Hintergrund   | `#FFFFFF` | `255, 255, 255` | Allgemeiner Seitenhintergrund, Karten-/Inhaltsbereiche. |
| Text (Dunkel) | `#333333` | `51, 51, 51`    | Haupttext, Überschriften, wichtige Informationen.       |
| Akzent (Blau) | `#007bff` | `0, 123, 255`   | Interaktive Elemente (Links, Buttons).                  |

### Sekundäre / Funktionsfarben

| Name                | Hex-Code  | RGB-Wert        | Verwendung                                                          |
| :------------------ | :-------- | :-------------- | :------------------------------------------------------------------ |
| Trennlinien (Grau)  | `#CCCCCC` | `204, 204, 204` | Horizontale Trennlinien für Inhalte.                                |
| Sekundärtext (Grau) | `#6c757d` | `108, 117, 125` | Kleinere Texte, Zusatzinformationen (z.B. "inkl. MwSt.").           |
| Erfolg (Grün)       | `#28a745` | `40, 167, 69`   | Potenzielle Verwendung für Erfolgsmeldungen oder Preishervorhebung. |
| Fehler (Rot)        | `#dc3545` | `220, 53, 69`   | Potenzielle Verwendung für Fehlermeldungen oder Warnungen.          |

---

## II. Typografie

Die Typografie ist klar, modern und auf Lesbarkeit optimiert. Es wird eine serifenlose Schriftfamilie verwendet.

### Schriftfamilie

| Eigenschaft     | Wert                              | Anmerkung                                               |
| :-------------- | :-------------------------------- | :------------------------------------------------------ |
| Primäre Schrift | `Open Sans`, `Lato` oder `Roboto` | Eine klare, serifenlose Schriftart.                     |
| Fallback        | `sans-serif`                      | Generischer Fallback, falls primäre Schrift nicht lädt. |

### Schriftgrößen, -gewichte und -farben

| Element                         | Größe (px)    | Gewicht                          | Farbe     |
| :------------------------------ | :------------ | :------------------------------- | :-------- |
| **H1 / Seitenüberschrift**      | `28px - 32px` | `Bold (700)`                     | `#333333` |
| **H2 / Abschnittsüberschrift**  | `20px - 24px` | `Semi-Bold (600)` / `Bold (700)` | `#333333` |
| **Fließtext / Details**         | `16px - 18px` | `Regular (400)`                  | `#333333` |
| **Kleinerer Text / Zusatzinfo** | `12px - 14px` | `Regular (400)`                  | `#6c757d` |
| **Links / Buttons (Text)**      | `16px - 18px` | `Semi-Bold (600)` / `Bold (700)` | `#007bff` |

### Zusätzliche Typografie-Regeln

| Eigenschaft           | Wert                            | Anmerkung                                                                   |
| :-------------------- | :------------------------------ | :-------------------------------------------------------------------------- |
| **Zeilenhöhe**        | `1.5em` (Fließtext)             | Für gute Lesbarkeit bei Fließtext.                                          |
|                       | `1.2em - 1.3em` (Überschriften) | Kompakterer Look für Überschriften.                                         |
| **Buchstabenabstand** | `normal` (`0em`)                | Standardabstand. Anpassungen können bei sehr großen Überschriften erfolgen. |
| **Textausrichtung**   | `linksbündig`                   | Primär für den Großteil des Inhalts.                                        |
|                       | `rechtsbündig` / `tabellarisch` | Für Preise und Summen, um Spaltenübersicht zu verbessern.                   |

---

Die Hex-Codes und Grössen dürfen auch variieren, jedoch nicht allzu sehr vom Styleguide abweichen.

Solch ein Styleguide ist bei Einsatz von KI-Tools sehr wichtig, damit die KI Anhaltspunkte hat und nicht Sachen frei erfindet. Umso mehr man die KI einschränkt, desto genauer arbeitet diese.

---

## KI-Tools

Ich nutzte die KI zur Überarbeitung der Seite. Das heisst, Veränderungen, die ich an vielen Files verändern müsste, habe ich der KI überlassen, jedoch mit genauen Anweisungen. Beispielsweise Link-Änderungen, falls ich meine Files umstrukturiert habe.

Zudem war die Überarbeitung des Designs nötig. Wie bereits angesprochen, fand ich mein Mockup veraltet. Wie ich vorging war folgt:
Ich habe als erstes die Grundstruktur mit HTML und CSS vollendet, jedoch ohne Inhalt. So haben die Seiten ausgesehen wie das Mockup. Danach habe ich generierten Inhalt eingefügt. Als nächstes musste ich den Editor _Cursor_ herunterladen. Dies ist ein KI-gestützter Editor und ist ein nützliches KI-Tool.

Danach war meine erste Anfrage, das Design moderner zu machen, wobei man den Styleguide noch einhalten sollte. Danach kamen drastische Änderungen heraus. Dies war für meinen Geschmack zu viel. Deshalb habe ich beschlossen, dieses Design für die Home-Page und das Kontaktformular beizubehalten und für den Rest mildere Veränderungen vorzunehmen. Zudem wurde der Like-Button verschönert. Danach konnte ich das Grid-Layout noch verbessern und die Webseite sah in etwa schon so aus wie jetzt. Ich musste für GitHub Pages viel mit den Verlinkungen machen, das hat Zeit gekostet und kann die KI auch nur so halbe gut, jedoch ging es schlussendlich.
