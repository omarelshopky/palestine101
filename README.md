# palestine101

A multilingual introductory website about the Palestinian cause.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## To Add new language

1. Add the language locale code to the `VITE_SUPPORTED_LOCALES` environment variable under `.env` file like

```
VITE_SUPPORTED_LOCALES=en,ar,LANG
```

2. Add alternate link to the new language in `<head>` of the `index.html` file

```html
<link rel="alternate" hreflang="LANG" href="https://palestine101.3knights.tech/LANG" >
```

3. Create new json file under `src/i18n/locales` with the name of `LANG.json`, containing the translation of the language

4. Add the language label into the other languages' locale file, at least on `en.json`, example

```json
{
    "locale": {
        "ar": "Arabic",
        "en": "English",
        "LANG": "Language Label"
    },
    ...
}
```