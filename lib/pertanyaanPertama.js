import { tanya } from "./rl.js";
import { simpanKeKeranjang, searchFood } from "./data.js";

export const pertanyaanPertama = async () => {
  let lagi = true;
  while (lagi) {
    console.log("\n=== Menu Makanan ===");
    searchFood.forEach((item, i) => {
      console.log(`${i + 1}. ${item.menu} - Rp${item.harga}`);
    });

    const jawaban = await tanya("Pilih menu (1-10): ");
    const nomor = parseInt(jawaban.trim());

    if (isNaN(nomor) || nomor < 1 || nomor > searchFood.length) {
      console.log("Nomor menu tidak valid!");
      continue;
    }

    const selectedItem = searchFood[nomor - 1];

    // Cek apakah item sudah ada di keranjang
    const existItem = simpanKeKeranjang.find(
      (i) => i.menu === selectedItem.menu
    );

    if (existItem) {
      existItem.amount = (existItem.amount || 1) + 1; // naikkan jumlah
      console.log(
        `\n✅ Kuantitas ${existItem.menu} bertambah menjadi ${existItem.amount}\n`
      );
    } else {
      simpanKeKeranjang.push({ ...selectedItem, amount: 1 });
      console.log(`\n✅ ${selectedItem.menu} ditambahkan ke keranjang!\n`);
    }

    const lagiJawab = await tanya("Mau pilih menu lagi? (Y/N): ");
    if (lagiJawab.trim().toLowerCase() !== "y") lagi = false;
  }
};
