import { counter } from "../data/counter.js";

export class PageTemplate {
    constructor() {
        this.defaultScript= [];
        this.pageScript=[];
        this.defaultCss= ['header', 'footer'];
        this.pageCss=[];
    }

    head() {
        let css = '';
        for (const element of this.defaultCss) {
            css += `<link rel="stylesheet" href="/css/components/${element}.css" />`;
        }
        for (const element of this.pageCss) {
            css += `<link rel="stylesheet" href="/css/components/${element}.css" />`;
        }
        return `
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Server demo</title>
                <link rel="stylesheet" href="/css/main.css" />
                ${css}
            </head>`;
    }

    header() {
        return `
            <header class="main-header">
                <img class="logo" src="/img/logo.png" alt="Logo">
                <nav class="main-nav">
                    <a class="link" href="/">Home</a>
                    <a class="link" href="/services">Services</a>
                    <a class="link" href="/login">Login</a>
                    <a class="link" href="/register">Register</a>
                    <a class="link" href="/contact-us">Contact us</a>
                    <a class="link" href="/buttons">Buttons</a>
                </nav>
            </header>`;
    }

    main() {
        return `
            <main>
                <h1>THIS IS PAGE TEMPLATE</h1>
                <p>Please overwrite!</p>
                <p>Thank you very much!</p>
            </main>`;
    }

    footer() {
        return `
            <footer class="main-footer">
                &copy; ${new Date().getFullYear()} - Apsilankymų kiekis: ${counter.value}
            </footer>`;
    }

    script() {
        let script = '';
        for (const element of this.defaultScript) {
            script += `<script src="/js/${element}.js" type="module"></script>`
        }
        for (const element of this.pageScript) {
            script += `<script src="/js/${element}.js" type="module"></script>`
        }
        return script;
    }

    render(req, h1, p) {
        return `
            <!DOCTYPE html>
            <html lang="en">
            ${this.head()} 
            <body>
                ${this.header()}
                ${this.main(req, h1, p)}
                ${this.footer()}
                ${this.script()}
            </body>
            </html>`;
    }
}