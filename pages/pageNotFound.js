import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageNotFound() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head()} 
        <body>
            ${header()}
            <main>
                <h1>404</h1>
                <p>Page not found</p>
            </main>
            ${footer()}
        </body>
        </html>`;
}