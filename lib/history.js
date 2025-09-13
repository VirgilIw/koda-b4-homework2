import { tanya, rl } from "./rl.js";
import { historyPesanan, totalHargaHistory } from "./data.js";

export const isiHistory = async () => {
  console.log("\n=== History Pesanan ===");
  if (historyPesanan.length === 0) {
    console.log("Belum ada history!");
  } else {
    historyPesanan.forEach((item, i) => {
      console.log(`${i + 1}. ${item.menu} - Rp${item.harga}`);
    });
    console.log(`\nTotal harga: Rp${totalHargaHistory}`);
  }

  const lanjut = await tanya("Kembali ke menu utama? (Y/N): ");
  if (lanjut.trim().toLowerCase() !== "y") {
    console.log("\nTerima kasih!");
    rl.close();
  }
};
