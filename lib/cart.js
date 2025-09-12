import { menuPertanyaan } from "./allQuestionWrapped.js";
import { exit } from "./exit.js";
import { isiHistory } from "./history.js";
import { rl } from "./listFoodMenu.js";

// data keranjang
let simpanKeKeranjang = [];
let jumlahKeranjang = 0; // index manual
let totalHargaKeranjang = 0;

export const keranjang = () => {
  console.log("\nIsi Keranjang:\n");

  let i = 0;
  while (i < jumlahKeranjang) {
    console.log(
      i +
        1 +
        ". " +
        simpanKeKeranjang[i].menu +
        " - Rp" +
        simpanKeKeranjang[i].harga
    );
    i = i + 1;
  }

  console.log("\nTotal harga keranjang: Rp" + totalHargaKeranjang);

  ubahIsiKeranjang();
};

const ubahIsiKeranjang = () => {
  rl.question("mau hapus pesanan (Y/N) ?", (gantiKeranjang) => {
    if (gantiKeranjang === "Y" || gantiKeranjang === "y") {
      jumlahKeranjang = 0; // reset counter
      totalHargaKeranjang = 0; // reset total harga
      simpanKeKeranjang = []; // reset array keranjang
      console.log("\nKeranjang berhasil dikosongkan!\n");
    }

    rl.question(
      "\nKembali ke menu utama atau history (M/H)? ",
      (keranjangOut) => {
        if (keranjangOut === "M" || keranjangOut === "m") {
          console.clear();
          menuPertanyaan();
        } else if (keranjangOut === "H" || keranjangOut === "h") {
          isiHistory();
        } else {
          exit();
        }
      }
    );
  });
};
