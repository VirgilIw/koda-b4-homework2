import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { tampilMenuPesan } from './lib/order.js';
import { tampilKeranjang } from './lib/cart.js';
import { tampilInvoice } from './lib/invoice.js';

const rl = readline.createInterface({ input, output });
let keranjang = [];

const keluar = () => {
  console.clear();
  console.log('👋 Terima kasih sudah memesan!');
  rl.close();
};

const menuUtama = async () => {
  try {
    console.clear();
    console.log('🍗=== MENU UTAMA KFC ===🍗');
    console.log('1. Pesan Makanan');
    console.log('2. Lihat Keranjang');
    console.log('3. Invoice');
    console.log('4. Keluar\n');

    const pilihan = await rl.question('Pilih opsi (1-4): ');
    switch (pilihan.trim()) {
      case '1':
        await tampilMenuPesan(rl, keranjang, menuUtama, keluar);
        break;
      case '2':
        await tampilKeranjang(rl, keranjang, menuUtama, keluar);
        break;
      case '3':
        await tampilInvoice(rl, keranjang, menuUtama, keluar);
        break;
      case '4':
        keluar();
        break;
      default:
        console.log('❌ Pilihan tidak valid!');
        await new Promise(r => setTimeout(r, 1000));
        await menuUtama();
    }
  } catch (err) {
    console.error('Terjadi error di menuUtama:', err.message);
    rl.close();
  }
};

menuUtama();