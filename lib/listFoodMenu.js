import { searchFood } from "./datasFood";

export function menuMakan() {
  let i = 0;
  while (i < 10) {
    console.log(
      i + 1 + ". " + searchFood[i].menu + " - Rp" + searchFood[i].harga
    );
    i = i + 1;
  }
}
