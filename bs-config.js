let proxy = require('http-proxy-middleware');
let fallback = require('connect-history-api-fallback');

module.exports = {
    port: 4200,
    server: {
        baseDir: "./dist/angular-starter",
        middleware: {
            1: proxy('/api', {target: 'http://localhost:7071', secure: false }),
            3: fallback({index: '/index.html', verbose: true})
        }
    },
};
