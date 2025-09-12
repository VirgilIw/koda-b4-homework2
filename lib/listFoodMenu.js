import { searchFood } from "./datasFood.js";
import readline from "node:readline";

export function menuMakan() {
  let i = 0;
  while (i < 10) {
    console.log(
      i + 1 + ". " + searchFood[i].menu + " - Rp" + searchFood[i].harga
    );
    i = i + 1;
  }
}

export function pilihMenu(menu) {
  if (menu > 0 && menu <= 10) {
    console.log(
      searchFood[menu - 1].menu + " = Rp" + searchFood[menu - 1].harga
    );
  } else {
    console.log("Menu tidak tersedia");
  }
}

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
