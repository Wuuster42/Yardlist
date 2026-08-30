# Yardlist

The best heat and cold for a backyard.

Yardlist is a slow directory. One brand, one page, an honest verdict. No top-ten slideshows, no unpaid samples dressed up as tests.

## What this repo is

A static starter:

- Home page with the editorial promise
- Filters by category (heat / cold), type, and verdict
- Three sample reviews so the page is not an empty box
- No framework, no build step

## Run it

Open `index.html` in a browser, or from this folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Reviews

Sample entries live in `app.js`. Each review has:

| Field     | Meaning                                      |
|-----------|----------------------------------------------|
| brand     | Maker                                        |
| product   | Specific model                               |
| category  | `heat` or `cold`                             |
| type      | `fire-pit`, `heater`, or `cooler`            |
| verdict   | `buy`, `wait`, or `skip`                     |
| summary   | The page in a paragraph                      |
| caveat    | What would change the verdict                |

Replace the samples before you treat this as published editorial.

## Editorial rules

- One product per page. No ranked lists.
- Verdicts are buy / wait / skip — not star scores.
- Do not accept free product in exchange for coverage.
- If you have not used it, do not write as if you have.

## Deploy

GitHub Pages works as-is: Settings → Pages → Deploy from `main` `/` (root).
