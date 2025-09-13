import { tanya } from "./rl.js";
import { searchFood, simpanKeKeranjang, historyPesanan } from "./data.js";

export const pertanyaanPertama = async () => {
  let lagi = true;
  while (lagi) {
    console.log("\n=== Menu Makanan ===");
    searchFood.forEach((item, i) => {
      console.log(`${i + 1}. ${item.menu} - Rp${item.harga}`);
    });

    try {
      const jawaban = await tanya("\nSilahkan pilih menu (1-10): ");
      const ubahJawaban = parseInt(jawaban.trim());

      if (isNaN(ubahJawaban) || ubahJawaban < 1 || ubahJawaban > 10) {
        console.log("Nomor menu tidak valid!");
        continue;
      }

      const item = searchFood[ubahJawaban - 1];
      simpanKeKeranjang.push(item);
      historyPesanan.push(item);

      console.log(`\n✅ ${item.menu} ditambahkan ke keranjang!\n`);

      const lagiJawab = await tanya("Mau pilih menu lagi? (Y/N): ");
      if (lagiJawab.trim().toLowerCase() !== "y") lagi = false;
    } catch (err) {
      console.log("Terjadi error:", err.message);
    }
  }
};
