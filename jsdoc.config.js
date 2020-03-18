module.exports = {
    source: {
        include: [
            './src/index.js'
        ]
    },
    templates: {
        cleverLinks: false,
        monospaceLinks: false,
        logo: {
            url: 'https://qiniucdn.jiliguala.com/dev/promo/b158cc65587b4827a40b5941f4274b00.png',
            width: '75px',
            height: '78px',
            link: 'https://github.com/TimorCookie'
        },
        name: 'timo-util',
        footerText: ' '
    },
    opts: {
        template: 'node_modules/tui-jsdoc-template',
        destination: './docs'
    }
}
