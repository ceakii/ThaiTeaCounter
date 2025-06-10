# ThaiTeaCounter

Developed by ceakii as a post-graduation project
to keep track of the number of Thai Teas I purchase
over time.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

Remember to run this if you have outdated dependencies,
missing files, etc. during development:

```bash
npm i
```

If the thai tea background image is missing on the
local server, make sure this style is added in
the Home Component's CSS:

```bash
background-image: url("/thai_tea.png");
```

## Deploying to GitHub Pages

Before deploying to GitHub Pages, don't forget to
update the Thai Tea BG pic in Home Component's
CSS so that it appears on the web app:

```bash
background-image: url("/ThaiTeaCounter/thai_tea.png");
```

To deploy the app to GitHub Pages, run:

```bash
ng deploy
```