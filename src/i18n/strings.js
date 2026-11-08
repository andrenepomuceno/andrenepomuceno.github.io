export const LANGS = ['en', 'pt-BR'];
export const DEFAULT_LANG = 'en';
export const STORAGE_KEY = 'lang';

export const STRINGS = {
    en: {
        'header.subtitle': 'Software & Hardware Engineer',
        'tabs.ariaLabel': 'Portfolio sections',
        'tabs.about': 'About Me',
        'tabs.projects': 'Hobby Projects',
        'tabs.articles': 'Articles',
        'language.ariaLabel': 'Language',
        'about.title': 'About Me',
        'about.p1': "For the last 10+ years, I've been diving deep into the world of software and hardware engineering. It's been a fun ride, taking me through challenging projects involving both code and hardware in diverse areas like fintech, medical devices, defense systems, and renewable energy tech.",
        'about.p2': "I get a kick out of designing systems built to handle serious scale, optimizing performance, and helping engineering teams thrive. You'll often find me working with embedded systems, cloud infrastructure, or puzzling out hardware and software designs.",
        'about.p3': 'Ultimately, I love solving tricky problems and building robust, efficient solutions that make a difference.',
        'item.archived': 'Archived',
        'item.imageAlt': 'Image of {title}',
        'item.linkAriaLabel': '{link} for {title}',
        'footer.rights': '© 2026 André Nepomuceno. All rights reserved.',
    },
    'pt-BR': {
        'header.subtitle': 'Engenheiro de Software e Hardware',
        'tabs.ariaLabel': 'Seções do portfólio',
        'tabs.about': 'Sobre mim',
        'tabs.projects': 'Projetos pessoais',
        'tabs.articles': 'Artigos',
        'language.ariaLabel': 'Idioma',
        'about.title': 'Sobre mim',
        'about.p1': 'Há mais de 10 anos mergulho fundo no mundo da engenharia de software e hardware. Tem sido uma jornada divertida, com projetos desafiadores que envolvem código e hardware em áreas tão diversas quanto fintech, dispositivos médicos, sistemas de defesa e tecnologia de energia renovável.',
        'about.p2': 'Gosto de projetar sistemas feitos para operar em grande escala, otimizar desempenho e ajudar times de engenharia a crescer. Você vai me encontrar com frequência trabalhando com sistemas embarcados, infraestrutura em nuvem ou destrinchando projetos de hardware e software.',
        'about.p3': 'No fim das contas, adoro resolver problemas difíceis e construir soluções robustas e eficientes que fazem diferença.',
        'item.archived': 'Arquivado',
        'item.imageAlt': 'Imagem de {title}',
        'item.linkAriaLabel': '{link}: {title}',
        'footer.rights': '© 2026 André Nepomuceno. Todos os direitos reservados.',
    },
};

/** Maps a language tag ('pt', 'pt-PT', 'en-US', …) to a supported language, or null. */
export function normalizeLang(value) {
    if (typeof value !== 'string') return null;
    const tag = value.toLowerCase();
    if (tag.startsWith('pt')) return 'pt-BR';
    if (tag.startsWith('en')) return 'en';
    return null;
}

/** `?lang=` (this visit only) wins, then the saved choice, then the browser's languages. */
export function initialLang() {
    const fromUrl = normalizeLang(new URLSearchParams(window.location.search).get('lang'));
    if (fromUrl) return fromUrl;
    try {
        const saved = normalizeLang(window.localStorage.getItem(STORAGE_KEY));
        if (saved) return saved;
    } catch {
        // Storage can be blocked (private mode, disabled site data); fall through to the browser.
    }
    for (const tag of navigator.languages ?? [navigator.language]) {
        const lang = normalizeLang(tag);
        if (lang) return lang;
    }
    return DEFAULT_LANG;
}

export function translate(lang, key, vars) {
    const text = STRINGS[lang]?.[key] ?? STRINGS[DEFAULT_LANG][key];
    if (text === undefined) throw new Error(`Missing i18n string '${key}'`);
    if (!vars) return text;
    return text.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? String(vars[name]) : match));
}

/** Data fields are either plain strings (same in every language) or { en, 'pt-BR' } objects. */
export function localize(value, lang) {
    if (value === null || typeof value !== 'object') return value;
    return value[lang] ?? value[DEFAULT_LANG];
}
