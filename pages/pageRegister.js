import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

export function pageRegister() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head()}
        <body>
            ${header()}
            <main>
                <h1>Register page</h1>
            </main>
            ${footer()}
        </body>
        </html>`;
}