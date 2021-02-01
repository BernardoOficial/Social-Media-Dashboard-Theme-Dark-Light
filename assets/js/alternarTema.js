const html = document.querySelector('html');

const getStyle = (element, prop) => window.getComputedStyle(element).getPropertyValue(prop);

const coresIniciais = {
    bg: getStyle(html, '--bg'),
    bgTop: getStyle(html, '--bg-top'),
    bgCard: getStyle(html, '--bg-card'),
    titlePrimary: getStyle(html, '--title-primary'),
    title: getStyle(html, '--title'),
    text: getStyle(html, '--text'),
    boxShadow: getStyle(html, '--box-shadow'),
    borderColor: getStyle(html, '--border-color')
}

const darkTheme = {
    bg: 'hsl(230, 17%, 14%)',
    bgTop: 'hsl(232, 19%, 15%)',
    bgCard: 'hsl(228, 28%, 20%)',
    titlePrimary: 'hsl(0, 0%, 100%)',
    title: 'hsl(228, 34%, 66%)',
    text: 'hsl(0, 0%, 100%)',
    boxShadow: '#00000077',
    borderColor: '#00000077'
}

const transformarNameProp = (prop) => "--" + prop.replace(/([A-Z])/g, '-$1').toLowerCase();

const alternarCores = (theme) => {
    const keysTheme = Object.keys(theme);
    keysTheme.forEach(prop => html.style.setProperty(transformarNameProp(prop), theme[prop]));
}

const inputCheckbox = document.querySelector('[data-theme]');

inputCheckbox.addEventListener('change', evento => 
    evento.target.checked ? alternarCores(darkTheme) : alternarCores(coresIniciais));