// lib/invoice.js
import { formatRupiah } from "./utils.js";

export async function tampilInvoice(rl, keranjang, menuUtama, keluar) {
  try {
    console.clear();
    console.log("🧾=== INVOICE ===🧾");
    console.log("===================================");

    const now = new Date();
    const invoiceDate = now.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const invoiceNumber = `INV-${now.getTime()}`;

    console.log(`Tanggal: ${invoiceDate}`);
    console.log(`No. Invoice: ${invoiceNumber}`);
    console.log("===================================");

    if (keranjang.length === 0) {
      console.log("Keranjang masih kosong! Silakan pesan terlebih dahulu.");
    } else {
      let subtotal = 0;
      console.log("\nDaftar Pesanan:");

      keranjang.forEach((item, i) => {
        // Logika perataan super sederhana: pakai tab atau beberapa spasi
        // Ini tidak akan rata sempurna, tapi sangat simple
        console.log(`  ${i + 1}. ${item.nama}\t\t${formatRupiah(item.harga)}`); 
        subtotal += item.harga;
      });

      const PPN_RATE = 0.10;
      const ppn = subtotal * PPN_RATE;
      const grandTotal = subtotal + ppn;

      console.log("-----------------------------------");
      
      // Logika perataan super sederhana untuk summary
      console.log(`Subtotal:\t\t${formatRupiah(subtotal)}`);
      console.log(`PPN (${PPN_RATE * 100}%):\t\t${formatRupiah(ppn)}`);
      console.log("-----------------------------------");
      console.log(`Total Pembayaran:\t${formatRupiah(grandTotal)}`);
    }

    console.log("\n===================================");
    console.log("✨ Terima kasih telah berbelanja! ✨");
    console.log("===================================");

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