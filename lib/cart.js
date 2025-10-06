import { formatRupiah } from "./utils.js";

export const tampilKeranjang = (rl, keranjang, menuUtama) => {
  console.clear();
  console.log("🛒=== KERANJANG ANDA ===🛒");

  if (keranjang.length === 0) {
    console.log("Keranjang masih kosong!");
    return rl.question("\nTekan Enter untuk kembali...", () => menuUtama());
  }

  let total = 0;
  keranjang.forEach((item, i) => {
    console.log(`${i + 1}. ${item.nama} - ${formatRupiah(item.harga)}`);
    total += item.harga;
  });

  console.log(`\nTotal: ${formatRupiah(total)}`);
  console.log("\n1. Kosongkan keranjang");
  console.log("0. Kembali ke menu utama");

  rl.question("\nPilih opsi: ", (input) => {
    switch (input) {
      case "1":
        keranjang.length = 0;
        console.log("🧹 Keranjang berhasil dikosongkan!");
        return setTimeout(
          () => tampilKeranjang(rl, keranjang, menuUtama),
          1000
        );
      case "0":
        return menuUtama();
      default:
        console.log("❌ Pilihan tidak valid!");
        setTimeout(() => tampilKeranjang(rl, keranjang, menuUtama), 1000);
    }
  });
};
