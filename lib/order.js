// lib/order.js (callback-style, compatible dengan index.js Anda)
import { menu } from "./data.js";
import { formatRupiah } from "./utils.js";

export const tampilMenuPesan = (rl, keranjang, menuUtama, keluar) => {
  console.clear();
  console.log("🍔=== MENU PESAN ===🍔");
  menu.forEach((item, i) =>
    console.log(`${i + 1}. ${item.nama} - ${formatRupiah(item.harga)}`)
  );
  console.log("0. Kembali ke menu utama");
  console.log("x. Keluar\n");

  rl.question("Pilih nomor menu: ", (input) => {
    try {
      const trimmed = (input || "").trim().toLowerCase();

      if (trimmed === "x" || trimmed === "q") {
        if (typeof keluar === "function") return keluar();
        return process.exit(0);
      }

      const pilihan = parseInt(trimmed, 10);

      if (pilihan === 0) return menuUtama();

      if (Number.isNaN(pilihan) || pilihan < 1 || pilihan > menu.length) {
        console.log("❌ Pilihan tidak valid!");
        return setTimeout(() => tampilMenuPesan(rl, keranjang, menuUtama, keluar), 1000);
      }

      const item = menu[pilihan - 1];
      keranjang.push(item);
      console.log(`✅ ${item.nama} ditambahkan ke keranjang.`);

      rl.question("Tambah lagi? (y/n): ", (jawab) => {
        try {
          const ans = (jawab || "").trim().toLowerCase();
          if (ans === "y") return tampilMenuPesan(rl, keranjang, menuUtama, keluar);
          return menuUtama();
        } catch (e) {
          console.error("Error saat konfirmasi tambah:", e.message);
          return menuUtama();
        }
      });
    } catch (err) {
      console.error("Terjadi error di menu pesan:", err.message);
      return menuUtama();
    }
  });
};