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
                    <p class="btnPara">button press count: ${pressCount.value}</p>
                    <p class="btnPara"  style="background-color: ${colors[num.value2]};">button effect 2</p>
                    <button id="1" class="btn" type="button">click me</button>
                    <button id="2" class="btn" type="button">click me aswell</button>
                </div>
            </main>
            ${footer()}
        </body>
        </html>`;
}