import { formatRupiah } from "./utils.js";

export const tampilInvoice = (rl, keranjang, menuUtama) => {
  console.clear();
  console.log("🧾=== INVOICE ===🧾");

  if (keranjang.length === 0) {
    console.log("Keranjang masih kosong!");
  } else {
    let total = 0;
    keranjang.forEach((item, i) => {
      console.log(`${i + 1}. ${item.nama} - ${formatRupiah(item.harga)}`);
      total += item.harga;
    });
    console.log(`\nTotal Pembayaran: ${formatRupiah(total)}`);
  }

  rl.question("\nTekan Enter untuk kembali ke menu utama...", () =>
    menuUtama()
  );
};
