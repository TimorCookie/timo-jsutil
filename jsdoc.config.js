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
            url: 'https://qiniucdn.jiliguala.com/dev/promo/989eadf59f464934a4f2c98305b656bc.png',
            width: '72.5px',
            height: '32.5px',
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
