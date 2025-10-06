export const formatRupiah = (angka) =>
  "Rp" + angka.toLocaleString("id-ID", { minimumFractionDigits: 0 });
