import { keranjang } from "./cart.js";
import { menuUtama } from "./datasFood.js";
import { exit } from "./exit.js";
import { pertanyaanPertama } from "./firstQuestion.js";
import { isiHistory } from "./history.js";
import { menuMakan, rl } from "./listFoodMenu.js";

export const menuPertanyaan = () => {
  menuUtama();
  rl.question("Silahkan pilih : ", (pertanyaan) => {
    console.clear();
    let ubahPertanyaan = parseInt(pertanyaan);
    if (ubahPertanyaan === 1) {
      menuMakan();
      pertanyaanPertama();
    } else if (ubahPertanyaan === 2) {
      console.clear();
      keranjang();
    } else if (ubahPertanyaan === 3) {
      console.clear();
      isiHistory();
    } else if (ubahPertanyaan === 4) {
      console.clear();
      exit();
    } else {
      menuPertanyaan();
    }
  });
};
