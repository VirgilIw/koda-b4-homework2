import { formatRupiah } from "./utils.js";

export async function tampilKeranjang(rl, keranjang, menuUtama, keluar) {
  try {
    console.clear();
    console.log("🛒=== KERANJANG ANDA ===🛒");

    if (keranjang.length === 0) {
      console.log("Keranjang masih kosong!");
      console.log("\n0. Kembali ke menu utama    x. Keluar\n");
      const input = await rl.question("\nTekan Enter untuk kembali, 0 untuk kembali, atau x untuk keluar: ");
      const ans = input.trim().toLowerCase();
      if (ans === "x" || ans === "q") {
        if (typeof keluar === "function") return keluar();
        return process.exit(0);
      }
      return menuUtama();
    }

    let total = 0;
    keranjang.forEach((item, i) => {
      console.log(`${i + 1}. ${item.nama} - ${formatRupiah(item.harga)}`);
      total += item.harga;
    });

    console.log(`\nTotal: ${formatRupiah(total)}`);
    console.log("\n1. Kosongkan keranjang");
    console.log("0. Kembali ke menu utama");
    console.log("x. Keluar\n");

    const input = await rl.question("\nPilih opsi: ");
    const cmd = input.trim().toLowerCase();

    switch (cmd) {
      case "1":
        keranjang.length = 0;
        console.log("🧹 Keranjang berhasil dikosongkan!");
        await new Promise((r) => setTimeout(r, 1000)); 
        return tampilKeranjang(rl, keranjang, menuUtama, keluar);
      case "0":
        return menuUtama();
      case "x":
      case "q":
        if (typeof keluar === "function") return keluar();
        return process.exit(0);
      default:
        console.log("❌ Pilihan tidak valid!");
        await new Promise((r) => setTimeout(r, 1000));
        return tampilKeranjang(rl, keranjang, menuUtama, keluar);
    }
  } catch (err) {
    console.error("Terjadi error pada tampilKeranjang:", err.message);
    return menuUtama();
  }
}