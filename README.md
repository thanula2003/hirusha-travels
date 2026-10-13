# Hirusha Travels

Website for **Hirusha Travels**, a family-run travel agency in Kurunegala, Sri Lanka. A static, multi-page site built with plain HTML, CSS and JavaScript, with no build step or dependencies.

## Features

- 4 pages: Home, About, Tour Packages, Contact & Booking
- Home hero slider with Sri Lankan destinations
- Language switcher: English, Russian, Chinese, Japanese, Hindi, Spanish, Arabic (with RTL support)
- Optional background music that persists between pages (starts only when the visitor taps the button)
- Aeroplane page-transition animation (disabled for `prefers-reduced-motion`)
- Responsive layout (desktop and mobile)
- Booking request form, FAQ, Google Maps embed, WhatsApp link

## Project structure

```
├── index.html       Home page
├── about.html       About page
├── packages.html    Tour packages, gallery and visa info
├── contact.html     Contact details, booking form, map, FAQ
├── style.css        All styles
├── script.js        Hero slider, scroll reveals, form toast
├── i18n.js          Language switcher and translation table
├── music.js         Background music player
├── fx.js            Page-transition animation
└── music.mp3        Music track (not included, see below)
```

All files sit in a single folder and reference each other with relative paths.

## Getting started

No installation needed.

1. Download or clone the project.
2. Open `index.html` in a browser.

Or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

An internet connection is required for images (Unsplash) and fonts (Google Fonts).

## Configuration

### Contact details
Phone, email, address and opening hours are written directly in the HTML (footers, `about.html`, `contact.html`). Use find-and-replace across the project. The phone number appears in three formats: `+94 77 123 4567` (display), `+94771234567` (`tel:` link) and `94771234567` (WhatsApp link).

### Packages and prices
Edit the tables in `packages.html`. The Home page has separate package cards in `index.html`, so update prices in both places.

### Hero slider
Edit the `S` array at the top of `script.js`. Each entry is `[title, subtitle, description, unsplashPhotoId]`.

### Theme colours
Change the CSS variables on the first line of `style.css` (`--blue`, `--green`, `--gold`, `--bg`).

### Translations
All translations are in `i18n.js`, in the `R` array. Each row is:

```js
["English", "Russian", "Chinese", "Japanese", "Hindi", "Spanish", "Arabic"],
```

The English string is the lookup key and must match the page text exactly. Text with no translation row stays in English.

### Background music
Add a file named `music.mp3` next to `index.html`, or change `SRC` and `VOL` at the top of `music.js`. If the file is missing, the music button hides itself automatically.

### Adding a page
1. Copy an existing page and edit it.
2. Add it to the `<nav>` on every page.
3. Add its label to the `LB` map in `fx.js`.
4. Keep the script tags in this order: `fx.js` in `<head>`, and `i18n.js`, `music.js`, `script.js` at the end of `<body>`.

## Known limitations

- **The booking form does not send data.** `script.js` only shows a confirmation message and resets the form. Connect it to a form backend (for example Formspree or Web3Forms, which also needs `name` attributes on the inputs) before relying on it for enquiries.
- **Footer social links** are placeholders (`href="#"`).
- **Images are hotlinked** from Unsplash. For production, consider downloading the photos you use (check their licence) and serving them locally.

## Deployment

Any static host works: Netlify, GitHub Pages, Cloudflare Pages, or a standard web server. Upload the whole folder with `index.html` at the root.

## Credits

- Photography: [Unsplash](https://unsplash.com) contributors
- Font: [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts

## License

All rights reserved by Hirusha Travels unless stated otherwise.
