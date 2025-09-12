export const searchFood = [
  { menu: "Ayam dada", harga: 30000 },
  { menu: "Ayam sayap", harga: 21000 },
  { menu: "Ayam paha", harga: 28000 },
  { menu: "Perkedel", harga: 17000 },
  { menu: "Rice", harga: 11000 },
  { menu: "French fries", harga: 20000 },
  { menu: "Mineral Water", harga: 8000 },
  { menu: "Fanta", harga: 14000 },
  { menu: "Coca-Cola", harga: 15000 },
  { menu: "Mango Float", harga: 1000 },
];

export function menuUtama() {
  console.log("\n<--------- Selamat datang di KFC ----------->\n");
  console.log("1. Pilih Menu");
  console.log("2. Keranjang");
  console.log("3. History");
  console.log("4. Exit");
}
