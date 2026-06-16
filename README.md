# FlexHaus Win-Back Booking Page

A Vite + React + Tailwind repo for the FlexHaus member retention landing page.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (typically `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Notes

- The app uses a lightweight local implementation of `Card`, `CardContent`, and `Button` under `src/components/ui`.
- The `@` alias is configured to point to `src` in `vite.config.js`.
- If you want this wired to a real booking endpoint, replace the `handleSubmit` function in `src/FlexHausWinBackPage.jsx` with a fetch/Webhook call.
