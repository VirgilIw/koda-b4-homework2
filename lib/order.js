import { menu } from "./data.js";
import { formatRupiah } from "./utils.js";

export const tampilMenuPesan = (rl, keranjang, menuUtama) => {
  console.clear();
  console.log("🍔=== MENU PESAN ===🍔");
  menu.forEach((item, i) =>
    console.log(`${i + 1}. ${item.nama} - ${formatRupiah(item.harga)}`)
  );
  console.log("0. Kembali ke menu utama\n");

  rl.question("Pilih nomor menu: ", (input) => {
    const pilihan = parseInt(input);

    if (pilihan === 0) return menuUtama();

    if (isNaN(pilihan) || pilihan < 1 || pilihan > menu.length) {
      console.log("❌ Pilihan tidak valid!");
      return setTimeout(() => tampilMenuPesan(rl, keranjang, menuUtama), 1000);
    }

    const item = menu[pilihan - 1];
    keranjang.push(item);
    console.log(`✅ ${item.nama} ditambahkan ke keranjang.`);

    rl.question("Tambah lagi? (y/n): ", (jawab) => {
      if (jawab.toLowerCase() === "y")
        tampilMenuPesan(rl, keranjang, menuUtama);
      else menuUtama();
    });
  });
};
