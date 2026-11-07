# Leaflet.Translations

A lightweight translation helper for Leaflet with built-in presets and support for custom locales and translations.

> [!NOTE]
> Translations of existing controls will not change, but translations for future calls will use the new locale (like in plugins)

## Methods

- `translate(key)` a function that accepts a source-text key. If the key is missing from the active dictionary, it returns the key unchanged.
- `setLocale(locale)` changes the active locale. The locale must already be registered.
- `getLocale()` returns the active locale identifier.
- `addLocale(locale, translations)` registers or replaces a locale. `translations` is an object whose keys are source text and whose values are translated strings.
- `getLocales()` returns the registry of locale dictionaries.

## Quick start
You need to set the active locale and then pass the `translate` method to the map option `translate`:

```js
import { translate, setLocale } from 'leaflet.translations';

setLocale('de');
const map = new LeafletMap('map', { translate: translate })
```

## Add a custom locale
Register a custom locale before selecting it:

```js
import { translate, setLocale, addLocale } from 'leaflet.translations';

addLocale('de', {
    'Map': 'Karte',
    'Zoom in': 'Vergrößern'
});

setLocale('de');
```

You can use the Leaflet built-in `translate` method on the map or the one from this package:

```js
console.log(map.translate('Map'));       // "Karte"
console.log(translate('Map'));           // "Karte"
```

## Extend existing locale
```js
addLocale('en', {
    ...getLocales().en,
    'some.plugin.text': 'Search'
});
console.log(map.translate('some.plugin.text'));       // "Search"
```

## Available translations for Leaflet Core

- `cz`: Czech
- `da`: Danish
- `de`: German
- `el`: Greek
- `en`: English (default)
- `es`: Spanish
- `fa`: Persian/Farsi
- `fi`: Finnish
- `fr`: French
- `hu`: Hungarian
- `id`: Indonesian
- `it`: Italian
- `ja`: Japanese
- `ko`: Korean
- `ky`: Kyrgyz
- `nl`: Dutch
- `no`: Norwegian
- `pl`: Polish
- `pt_br`: Portuguese (Brazil)
- `pt_pt`: Portuguese (Portugal)
- `ro`: Romanian
- `ru`: Russian
- `sv`: Swedish
- `tr`: Turkish
- `uk`: Ukrainian (alternative code)
- `zh`: Chinese (Simplified)
- `zh_tw`: Chinese (Traditional)
