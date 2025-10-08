import { formatRupiah } from "./utils.js";

export async function tampilInvoice(rl, keranjang, menuUtama, keluar) {
  try {
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

    console.log("\n0. Kembali ke menu utama    x. Keluar\n");
    const input = await rl.question("Tekan Enter untuk kembali, 0 untuk kembali, atau x untuk keluar: ");
    const ans = input.trim().toLowerCase();

    if (ans === "x" || ans === "q") {
      if (typeof keluar === "function") return keluar();
      return process.exit(0);
    }

    return menuUtama();
  } catch (err) {
    console.error("Terjadi error pada tampilInvoice:", err.message);
    return menuUtama();
  }
}