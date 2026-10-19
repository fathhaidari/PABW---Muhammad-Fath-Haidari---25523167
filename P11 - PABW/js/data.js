// js/data.js

export const profil = {
  nama: "Muhammad Fath Haidari",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript", "Git"],
  alamat: { kota: "Bekasi" }
};

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftar, kategori) {
  if (!daftar || !Array.isArray(daftar)) return [];
  if (!kategori || kategori.toLowerCase() === "semua") return daftar;
  
  return daftar.filter((proyek) => 
    proyek.kategori && proyek.kategori.toLowerCase() === kategori.toLowerCase()
  );
}