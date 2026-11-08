import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { I18nContext } from './context';
import { LANGS, STORAGE_KEY, initialLang, localize, translate } from './strings';

function I18nProvider({ children }) {
    const [lang, setLangState] = useState(initialLang);

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const setLang = useCallback((next) => {
        if (!LANGS.includes(next)) throw new Error(`Unsupported language '${next}', expected one of ${LANGS.join(', ')}`);
        setLangState(next);
        try {
            window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // Storage can be blocked; the choice then lasts for this page view only.
        }
        const url = new URL(window.location.href);
        if (url.searchParams.has('lang')) {
            url.searchParams.delete('lang');
            window.history.replaceState(null, '', url);
        }
    }, []);

    const value = useMemo(() => ({
        lang,
        setLang,
        t: (key, vars) => translate(lang, key, vars),
        l: (field) => localize(field, lang),
    }), [lang, setLang]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export default I18nProvider;
