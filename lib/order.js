import { menu } from './data.js';
import { formatRupiah } from './utils.js';

export async function tampilMenuPesan(rl, keranjang, menuUtama, keluar) {
  try {
    console.clear();
    console.log('🍔=== MENU PESAN ===🍔');
    menu.forEach((item, i) =>
      console.log(`${i + 1}. ${item.nama} - ${formatRupiah(item.harga)}`)
    );
    console.log('0. Kembali ke menu utama');
    console.log('x. Keluar\n');

    const input = await rl.question('Pilih nomor menu (atau 0 untuk kembali, x untuk keluar): ');
    const trimmed = input.trim().toLowerCase();

    if (trimmed === 'x' || trimmed === 'q') {
      if (typeof keluar === 'function') return keluar();
      return process.exit(0);
    }

    const pilihan = parseInt(trimmed, 10);

    if (pilihan === 0) return menuUtama();

    if (Number.isNaN(pilihan) || pilihan < 1 || pilihan > menu.length) {
      console.log('❌ Pilihan tidak valid!');
      await new Promise(r => setTimeout(r, 1000));
      return tampilMenuPesan(rl, keranjang, menuUtama, keluar);
    }

    const item = menu[pilihan - 1];
    keranjang.push(item);
    console.log(`✅ ${item.nama} ditambahkan ke keranjang.`);

    const jawab = await rl.question('Tambah lagi? (y/n): ');
    if (jawab.trim().toLowerCase() === 'y') {
      return tampilMenuPesan(rl, keranjang, menuUtama, keluar);
    }
    return menuUtama();
  } catch (err) {
    console.error('Terjadi error pada tampilMenuPesan:', err.message);
    return menuUtama();
  }
}