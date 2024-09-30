import { PageTemplate } from "./PageTemplate.js";

export class PageServiceNotFound extends PageTemplate {
    main() {
        return `
            <main>
                <p>Paslauga "${h1}" nera teikiama</p>
            </main>`;
    }
}