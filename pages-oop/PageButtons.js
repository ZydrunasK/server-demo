import { PageTemplate } from "./PageTemplate.js";
import { colors, num } from "../data/colors.js";

export class PageButtons extends PageTemplate {
    constructor() {
        super();
        this.pageScript=['buttons'];
    }
    main() {
        return `
            <main>
                <h1>just some buttons to press</h1>
                <div class="btnDiv">
                    <p class="btnPara" style="background-color: ${colors[num.value1]};">button effect 1</p>
                    <span class="value">0</span>
                    <p class="btnPara"  style="background-color: ${colors[num.value2]};">button effect 2</p>
                    <button id="a1" class="btn" type="button">click me</button>
                    <button id="a2" class="btn" type="button">click me aswell</button>
                </div>
            </main>`;
    }
}