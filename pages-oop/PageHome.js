import { PageTemplate } from "./PageTemplate.js";

export class PageHome extends PageTemplate {
    constructor() {
        super();
        this.pageCss=['gallery'];
    }
    main() {
        return `
            <main>
                <h1>Home page</h1>
                <section class="counter">
                    <button class="btn" type="button">-</button>
                    <span class="value">0</span>
                    <button class="btn" type="button">+</button>
                </section>
                <section class="gallery">
                    <img src="/img/example.png" alt="Hero 1" />
                    <img src="/img/example.png" alt="Hero 2" />
                    <img src="/img/example.png" alt="Hero 3" />
                </section>
            </main>`;
    }
}