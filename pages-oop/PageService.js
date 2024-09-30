import { PageTemplate } from "./PageTemplate.js";

export class PageService extends PageTemplate {
    main(req, h1, p) {
        return `
            <main>
                <h1>${h1} page</h1>
                <p>${p}</p></h1>
            </main>`;
    }
}