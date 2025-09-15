import { simpanKeKeranjang } from "./data.js";
import { tanya, rl } from "./rl.js";

export const keranjang = async () => {
  console.log("\n=== Isi Keranjang ===");
  if (simpanKeKeranjang.length === 0) {
    console.log("Keranjang kosong!");
  } else {
    // hitung total harga
    let total = simpanKeKeranjang.reduce(
      (acc, item) => acc + item.harga * (item.amount || 1),
      0
    );

    simpanKeKeranjang.forEach((item, i) => {
      console.log(
        `${i + 1}. ${item.menu} - ${item.amount || 1} × Rp${item.harga} = Rp${(
          item.harga * (item.amount || 1)
        ).toLocaleString("id")}`
      );
    });

    console.log(`\nTotal harga: Rp${total.toLocaleString("id")}`);
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
