# Aurora's Scents

A front-end perfume shop built with HTML, CSS, JavaScript, Bootstrap and jQuery. Browse men's and women's fragrances, read product pages, add to a cart, and go through a checkout flow.

> **Heads up:** checkout relies on a separate server that isn't part of this repo and isn't running at the moment, so orders can't be completed right now. Login and profile are front-end only (no real accounts). Please never type real card details into it.

**Live demo:** _add your GitHub Pages link here after publishing_ (Settings → Pages)

<!-- Add a screenshot or two:
![Home page](screenshots/home.png)
-->

## Pages

| Page | What it does |
|---|---|
| `index.html` | Home |
| `women.html` · `mens.html` | Product listings |
| `PERFUME PAGES/*.html` | Detail pages for six fragrances — Bold Essence, Deep Ocean, Floral Elegance, Gentle Rose, Midnight Storm, Ocean Breeze — each with a review form |
| `cart.html` | Cart with quantity changes, remove, and a live total (AED) |
| `checkout.html` | Shipping and payment form with validation (UAE phone format, 16-digit card, MM/YY expiry, 3-digit CVV) |
| `login.html` | Login / sign-up toggle with form validation |
| `profile.html` · `orders.html` | Profile form, and an orders table (orders unlock once the profile is saved) |
| `about.html` · `contact.html` | About page and a validated contact form |

## How it works

- Cart contents and the "profile completed" flag are kept in the browser's `localStorage`.
- Login, sign-up and profile forms are **validated but not stored** — they just redirect. The orders table shows sample data.
- Reviews on perfume pages are added to the page only and are lost on refresh.
- Checkout validates the form, then sends the order to a server route (`/checkout`). That server is not included in this repo and is currently offline, so the order won't go through until it's back.

## Built with

- HTML5, CSS3, JavaScript
- [Bootstrap 5.3](https://getbootstrap.com) and [jQuery 3.6](https://jquery.com), loaded from CDNs
- Google Fonts: Playfair Display and Montserrat

An internet connection is needed for the CDN libraries and fonts.

## Run it locally

No build step.

1. Clone the repo (`File → Clone repository` in GitHub Desktop).
2. Open `index.html` in a browser — or, in VS Code, right-click it and choose **Open with Live Server**.

## Project structure

```
├── index.html, women.html, mens.html, about.html, contact.html
├── login.html, profile.html, orders.html, cart.html, checkout.html
├── CSS/                One stylesheet per page
├── Java/               One script per page (JavaScript)
├── IMAGES/
└── PERFUME PAGES/
    ├── *.html          The six product pages
    ├── CSS/  JAVA/  IMAGES/
```

## Ideas for next steps

- Bring the server back online and point checkout at its full HTTPS address (a bare `/checkout` only works when the site and server share one address)
- Make login and orders real, and use a hosted payment provider such as Stripe instead of sending card numbers directly
- Persist reviews and orders in a database
- Product data in one JSON file instead of repeated in each page

## Author

**Shouq Alshouq** — [GitHub](https://github.com/ShouqAlshouq) · [LinkedIn](https://www.linkedin.com/in/shouq-alshouq-ba3691264)
