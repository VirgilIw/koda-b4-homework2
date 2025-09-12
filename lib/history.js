import { menuPertanyaan } from "./allQuestionWrapped.js";
import { exit } from "./exit.js";
import { rl } from "./listFoodMenu.js";

// data history
let historyPesanan = [];
let jumlahHistory = 0; // index manual
let totalHargaHistory = 0;

export const isiHistory = () => {
  console.log("\nHistory Pesanan:\n");

  let i = 0;
  while (i < jumlahHistory) {
    console.log(
      i + 1 + ". " + historyPesanan[i].menu + " - Rp" + historyPesanan[i].harga
    );
    i = i + 1;
  }

  console.log("\nTotal harga : Rp" + totalHargaHistory);
  tambahIsiHistory();
};

const tambahIsiHistory = () => {
  rl.question("\nKembali ke menu utama atau keluar (Y/N)? ", (historyOut) => {
    if (historyOut === "Y" || historyOut === "y") {
      console.clear();
      menuPertanyaan();
    } else {
      exit();
    }
  });
};
