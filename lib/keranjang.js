import { tanya } from "./rl.js";
import { rl } from "./rl.js";
import { simpanKeKeranjang, totalHargaKeranjang } from "./data.js";

export const keranjang = async () => {
  console.log("\n=== Isi Keranjang ===");
  if (simpanKeKeranjang.length === 0) {
    console.log("Keranjang kosong!");
  } else {
    simpanKeKeranjang.forEach((item, i) => {
      console.log(`${i + 1}. ${item.menu} - Rp${item.harga}`);
    });
    console.log(`\nTotal harga: Rp${totalHargaKeranjang}`);
  }

  const hapus = await tanya("Mau hapus keranjang? (Y/N): ");
  if (hapus.trim().toLowerCase() === "y") {
    simpanKeKeranjang.length = 0;
    console.log("\nKeranjang berhasil dikosongkan!\n");
  }

  const lanjut = await tanya("Kembali ke menu utama? (Y/N): ");
  if (lanjut.trim().toLowerCase() !== "y") {
    console.log("\nTerima kasih!");
    rl.close();
  }
};
