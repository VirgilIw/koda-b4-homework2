import readline from "readline";
import { tampilMenuPesan } from "./lib/order.js";
import { tampilKeranjang } from "./lib/cart.js";
import { tampilInvoice } from "./lib/invoice.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let keranjang = [];

const keluar = () => {
  console.clear();
  console.log("👋 Terima kasih sudah memesan!");
  rl.close();
};

const menuUtama = () => {
  console.clear();
  console.log("🍗=== MENU UTAMA KFC ===🍗");
  console.log("1. Pesan Makanan");
  console.log("2. Lihat Keranjang");
  console.log("3. Invoice");
  console.log("4. Keluar\n");

  rl.question("Pilih opsi (1-4): ", (pilihan) => {
    switch (pilihan) {
      case "1":
        tampilMenuPesan(rl, keranjang, menuUtama);
        break;
      case "2":
        tampilKeranjang(rl, keranjang, menuUtama);
        break;
      case "3":
        tampilInvoice(rl, keranjang, menuUtama);
        break;
      case "4":
        keluar();
        break;
      default:
        console.log("❌ Pilihan tidak valid!");
        setTimeout(menuUtama, 1000);
    }
  });
};

menuUtama();
