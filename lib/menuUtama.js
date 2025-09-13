import { tanya } from "./rl.js";
import { pertanyaanPertama } from "./pertanyaanPertama.js";
import { keranjang } from "./keranjang.js";
import { isiHistory } from "./history.js";
import { exitApp } from "./exit.js";

export const menuUtama = async () => {
  while (true) {
    console.log("\n<--------- Selamat datang di KFC ----------->\n");
    console.log("1. Pilih Menu");
    console.log("2. Keranjang");
    console.log("3. History");
    console.log("4. Exit");

    try {
      const pilih = await tanya("Silahkan pilih (1-4): ");
      const pilihan = parseInt(pilih.trim());

      switch (pilihan) {
        case 1:
          await pertanyaanPertama();
          break;
        case 2:
          await keranjang();
          break;
        case 3:
          await isiHistory();
          break;
        case 4:
          exitApp();
          return;
        default:
          console.log("Pilihan tidak valid!");
      }
    } catch (err) {
      console.log("Terjadi error:", err.message);
    }
  }
};
