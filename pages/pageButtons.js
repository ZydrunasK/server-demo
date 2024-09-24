import { footer } from "../components/footer.js";
import { head } from "../components/head.js";
import { header } from "../components/header.js";

import { pressCount } from "../data/pressCount.js";
import { colors, num } from "../data/colors.js";

export function pageButtons(req) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        ${head()}
        <body>
            ${header()}
            <main>
                <h1>just some buttons to press</h1>
                <div class="btnDiv">
                    <p class="btnPara" style="background-color: ${colors[num.value1]};">button effect 1</p>
                    <span class="value">0</span>
                    <p class="btnPara"  style="background-color: ${colors[num.value2]};">button effect 2</p>
                    <button id="a1" class="btn" type="button">click me</button>
                    <button id="a2" class="btn" type="button">click me aswell</button>
                </div>
            </main>
            ${footer()}
            <script src="/js/buttons.js" type="module"></script>
        </body>
        </html>`;
}