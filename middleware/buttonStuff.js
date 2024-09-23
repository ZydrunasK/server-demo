import { num } from "../data/colors.js";
import { pressCount } from "../data/pressCount.js";


export function buttonClick(req, res, next) {
    num.value1 = (Math.ceil(Math.random() * 10) % 3);
    num.value2 = (Math.ceil(Math.random() * 10) % 3);
    next();
}