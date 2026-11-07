import { cz } from './locales/cz.js';
import { da } from './locales/da.js';
import { de } from './locales/de.js';
import { el } from './locales/el.js';
import { en } from './locales/en.js';
import { es } from './locales/es.js';
import { fa } from './locales/fa.js';
import { fi } from './locales/fi.js';
import { fr } from './locales/fr.js';
import { hu } from './locales/hu.js';
import { id } from './locales/id.js';
import { it } from './locales/it.js';
import { ja } from './locales/ja.js';
import { ko } from './locales/ko.js';
import { ky } from './locales/ky.js';
import { nl } from './locales/nl.js';
import { no } from './locales/no.js';
import { pl } from './locales/pl.js';
import { pt_br } from './locales/pt_br.js';
import { pt_pt } from './locales/pt_pt.js';
import { ro } from './locales/ro.js';
import { ru } from './locales/ru.js';
import { sv } from './locales/sv.js';
import { tr } from './locales/tr.js';
import { uk } from './locales/uk.js';
import { zh } from './locales/zh.js';
import { zh_tw } from './locales/zh_tw.js';

/**
 * @typedef {Record<string, string> & {
 *   'Map'?: string,
 *   'Zoom in'?: string,
 *   'Zoom out'?: string,
 *   'Layers'?: string,
 *   'Enter fullscreen'?: string,
 *   'Exit fullscreen'?: string,
 *   'Close popup'?: string
 * }} LocaleTranslations
 * Locale translation dictionary with predefined Leaflet Core keys and support for custom keys.
 * All keys are optional to support partial translations and plugin extensions.
 */

const locales = {
    cz,
    da,
    de,
    el,
    en,
    es,
    fa,
    fi,
    fr,
    hu,
    id,
    it,
    ja,
    ko,
    ky,
    nl,
    no,
    pl,
    pt_br,
    pt_pt,
    ro,
    ru,
    sv,
    tr,
    uk,
    zh,
    zh_tw
};

let _locale = 'en';


/**
 * Set the active locale used by {@link translate}.
 *
 * @param {string} locale - Locale identifier to activate.
 * @throws {Error} If the locale has not been registered.
 */
export function setLocale(locale) {
    if (locales[locale]) {
        _locale = locale;
    } else {
        throw new Error(`Locale "${locale}" is not available.`);
    }
}

/**
 * Get the identifier of the currently active locale.
 *
 * @returns {string} The active locale identifier.
 */
export function getLocale() {
    return _locale;
}

/**
 * Register or replace a locale dictionary.
 *
 * @param {string} locale - Locale identifier to register.
 * @param {LocaleTranslations} translations - Source-text-to-translation dictionary.
 */
export function addLocale(locale, translations) {
    locales[locale] = translations;
}

/**
 * Get all registered locale dictionaries.
 *
 * @returns {Record<string, LocaleTranslations>} The live registry of locales.
 */
export function getLocales() {
    return locales;
}

/**
 * Translate a key using the currently active locale.
 * If the key is not present, the original key is returned.
 *
 * @param {string} key - Source text to look up.
 * @returns {string} The translated text, or the original key if no translation exists.
 */
export function translate(key) {
    return locales[_locale] && locales[_locale][key] ? locales[_locale][key] : key;
}