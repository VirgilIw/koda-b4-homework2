import { menuPertanyaan } from "./allQuestionWrapped.js";
import { searchFood } from "./datasFood.js";
import { menuMakan, pilihMenu, rl } from "./listFoodMenu.js";

// data keranjang
export let simpanKeKeranjang = [];
export let jumlahKeranjang = 0; // index manual
export let totalHargaKeranjang = 0;

// data history
export let historyPesanan = [];
export let jumlahHistory = 0; // index manual
export let totalHargaHistory = 0;
export const pertanyaanPertama = () => {
  rl.question("Silahkan pilih nomor menu : ", (jawaban1) => {
    console.clear();
    let ubahJawaban1 = parseInt(jawaban1);

    if (ubahJawaban1 > 0 && ubahJawaban1 <= 10) {
      pilihMenu(ubahJawaban1);

      // masukkan ke keranjang
      simpanKeKeranjang[jumlahKeranjang] = {
        menu: searchFood[ubahJawaban1 - 1].menu,
        harga: searchFood[ubahJawaban1 - 1].harga,
      };

      totalHargaKeranjang =
        totalHargaKeranjang + searchFood[ubahJawaban1 - 1].harga;
      jumlahKeranjang = jumlahKeranjang + 1;

      // masukkan juga ke history
      historyPesanan[jumlahHistory] = {
        menu: searchFood[ubahJawaban1 - 1].menu,
        harga: searchFood[ubahJawaban1 - 1].harga,
      };

      totalHargaHistory =
        totalHargaHistory + searchFood[ubahJawaban1 - 1].harga;
      jumlahHistory = jumlahHistory + 1;

      console.log("\nItem ditambahkan ke keranjang!\n");
    } else {
      console.log("Nomor menu tidak valid!\n");
    }

    rl.question("Mau pilih menu lagi (Y/N)? ", (jawaban2) => {
      console.clear();
      if (jawaban2 === "Y" || jawaban2 === "y") {
        menuMakan();
        pertanyaanPertama();
      } else {
        menuPertanyaan();
      }
    });
  });
};
