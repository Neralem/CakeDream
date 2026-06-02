# 🎂 CakeDream

Homepage für die **Tortendekorier-Kurse** (Bentocakes) in Friedrichroda.
Statische Single-Page-Website – ganz ohne Build-Tools, Datenbank oder Login.

👉 **Live:** https://neralem.github.io/CakeDream/

---

## Was die Seite kann

- Vorstellung des Kurses & aller Eckdaten (Wann / Wo / Wer)
- „Was dich erwartet" auf einen Blick
- Galerie-Bereich (Platzhalter – Fotos & Videos später einfach einfügbar)
- Kontakt per Telefon/WhatsApp und E-Mail
- Voll responsiv (Handy, Tablet, Desktop)

## Veröffentlichen mit GitHub Pages

1. Dateien committen und nach `main` pushen.
2. Auf GitHub: **Settings → Pages**
3. Unter *Build and deployment* → *Source*: **Deploy from a branch**
4. Branch **`main`**, Ordner **`/ (root)`** auswählen, **Save**.
5. Nach ein paar Minuten ist die Seite unter
   `https://neralem.github.io/CakeDream/` erreichbar.

## Inhalte ändern (für Nicht-Techniker:innen)

Alle Texte stehen in **`index.html`**. Häufige Änderungen:

| Was | Wo in `index.html` |
|-----|--------------------|
| Datum / Ort / Personenzahl | Abschnitt „Auf einen Blick" (`facts`) |
| Telefonnummer & E-Mail | Abschnitt `#kontakt` (Links `tel:` und `mailto:`) |
| Kurstexte | Abschnitt `#kurs` |

### Fotos in die Galerie einfügen

1. Bild in den Ordner `assets/img/` legen (Ordner ggf. neu anlegen).
2. In `index.html` im Bereich `#galerie` einen Platzhalter ersetzen durch:

   ```html
   <figure class="gallery__item">
     <img src="assets/img/mein-bild.jpg" alt="Beschreibung der Torte" loading="lazy">
   </figure>
   ```

## Projektstruktur

```
index.html            – die Seite selbst (alle Texte)
assets/css/styles.css – Design / Farben
assets/js/main.js     – Menü & Scroll-Animationen
assets/favicon.svg    – Icon im Browser-Tab
.nojekyll             – sorgt für korrekte Auslieferung auf GitHub Pages
```

## Farben (Rosé-Palette)

| Variable | Farbe |
|----------|-------|
| `--rose` | `#cf7189` |
| `--rose-deep` | `#a8506a` |
| `--pink` | `#f0aebd` |
| `--bg` | `#fceef0` |

Die Werte stehen oben in `assets/css/styles.css` unter `:root`.
